import { useState } from 'react';
import { X, Send, Calendar, Users, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Trip, formatPrice } from '@/data/trips';
import { useToast } from '@/hooks/use-toast';

interface InquiryFormProps {
  trip: Trip;
  onClose: () => void;
}

export default function InquiryForm({ trip, onClose }: InquiryFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    groupSize: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Inquiry Submitted!',
      description: "We'll get back to you within 24 hours with trip details.",
    });

    setIsSubmitting(false);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border/50 p-4 flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl font-bold">Book / Inquire</h2>
            <p className="text-sm text-muted-foreground">{trip.name}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Trip Summary */}
        <div className="p-4 bg-muted/30 border-b border-border/50">
          <div className="flex gap-4">
            <img
              src={trip.image}
              alt={trip.name}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold">{trip.name}</p>
              <p className="text-sm text-muted-foreground">{trip.duration} • {trip.location}</p>
              <p className="text-primary font-bold mt-1">{formatPrice(trip.price)} / person</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" /> Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Preferred Date
              </Label>
              <Select
                value={formData.date}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, date: value }))}
              >
                <SelectTrigger id="date">
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  {trip.upcomingDates.map((date) => (
                    <SelectItem key={date} value={date}>
                      {new Date(date).toLocaleDateString('en-IN', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </SelectItem>
                  ))}
                  <SelectItem value="other">Other / Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="groupSize" className="flex items-center gap-2">
                <Users className="h-4 w-4" /> Group Size
              </Label>
              <Select
                value={formData.groupSize}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, groupSize: value }))}
              >
                <SelectTrigger id="groupSize">
                  <SelectValue placeholder="How many?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Solo (1 person)</SelectItem>
                  <SelectItem value="2">2 people</SelectItem>
                  <SelectItem value="3-5">3-5 people</SelectItem>
                  <SelectItem value="6-10">6-10 people</SelectItem>
                  <SelectItem value="10+">More than 10</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> Additional Message (Optional)
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any special requirements, questions, or preferences..."
              rows={3}
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-gradient-cta shadow-glow"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Submitting...'
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" /> Send Inquiry
                </>
              )}
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              We'll respond within 24 hours with availability and payment details.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
