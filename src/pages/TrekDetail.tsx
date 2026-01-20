import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Star,
  Users,
  Mountain,
  Calendar,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  Share2,
  Heart,
  Backpack,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { getTripBySlug, formatPrice, getDifficultyBadgeClass, categoryInfo } from '@/data/trips';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import InquiryForm from '@/components/forms/InquiryForm';

function ImageGallery({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={`${name} - Image ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                idx === activeIndex ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TrekDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const trip = slug ? getTripBySlug(slug) : undefined;

  if (!trip) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <Mountain className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold mb-4">Trek Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The trek you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/treks">
              <ArrowLeft className="mr-2 h-4 w-4" /> Browse All Treks
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const categoryData = categoryInfo[trip.category];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="py-4 border-b border-border/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/treks" className="hover:text-foreground transition-colors">
              Treks
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={`/treks/${trip.category}`} className="hover:text-foreground transition-colors">
              {categoryData.name}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{trip.name}</span>
          </nav>
        </div>
      </section>

      <div className="container px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <ImageGallery images={trip.gallery} name={trip.name} />

            {/* Title and Quick Info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getDifficultyBadgeClass(trip.difficulty)}`}>
                  {trip.difficulty}
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">
                  {categoryData.icon} {categoryData.name}
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{trip.name}</h1>
              <p className="text-lg text-muted-foreground">{trip.tagline}</p>

              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary" /> {trip.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-primary" /> {trip.duration}
                </span>
                {trip.altitude && (
                  <span className="flex items-center gap-1">
                    <Mountain className="h-4 w-4 text-primary" /> {trip.altitude}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-primary" /> {trip.groupSize} people
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-trek-gold fill-trek-gold" /> {trip.rating} ({trip.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Overview */}
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{trip.overview}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trip.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Day-wise Itinerary</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {trip.itinerary.map((day) => (
                  <AccordionItem
                    key={day.day}
                    value={`day-${day.day}`}
                    className="border border-border/50 rounded-lg px-4 bg-card"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-3 text-left">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                          {day.day}
                        </span>
                        <span className="font-display font-semibold">{day.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pl-13">
                      <p className="text-muted-foreground mb-3">{day.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {day.highlights.map((h, i) => (
                          <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                            {h}
                          </span>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
                <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" /> Inclusions
                </h3>
                <ul className="space-y-2">
                  {trip.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20">
                <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-destructive" /> Exclusions
                </h3>
                <ul className="space-y-2">
                  {trip.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Things to Carry */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                <Backpack className="h-6 w-6" /> Things to Carry
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {trip.thingsToCarry.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg bg-muted/30">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Pickup Points */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-6 w-6" /> Pickup Points
              </h2>
              <div className="space-y-2">
                {trip.pickupPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Card */}
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <div className="flex items-baseline gap-2 mb-4">
                  {trip.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(trip.originalPrice)}
                    </span>
                  )}
                  <span className="font-display text-3xl font-bold text-primary">
                    {formatPrice(trip.price)}
                  </span>
                  <span className="text-sm text-muted-foreground">/ person</span>
                </div>

                {trip.originalPrice && (
                  <div className="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-lg mb-4 inline-block">
                    Save {formatPrice(trip.originalPrice - trip.price)}!
                  </div>
                )}

                {/* Upcoming Dates */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> Upcoming Dates
                  </h4>
                  <div className="space-y-2">
                    {trip.upcomingDates.slice(0, 4).map((date, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 rounded-lg bg-muted/30 text-sm"
                      >
                        <span>
                          {new Date(date).toLocaleDateString('en-IN', {
                            weekday: 'short',
                            day: 'numeric',
                            month: 'short',
                          })}
                        </span>
                        <span className="text-accent text-xs">Available</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-gradient-cta shadow-glow text-lg py-6"
                    onClick={() => setShowInquiryForm(true)}
                  >
                    Book Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setShowInquiryForm(true)}
                  >
                    Send Inquiry
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-border/50">
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-2" /> Share
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4 mr-2" /> Save
                  </Button>
                </div>
              </div>

              {/* Quick Info */}
              <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                <h4 className="font-semibold mb-4">Quick Info</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best Season</span>
                    <span>{trip.bestSeason}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Group Size</span>
                    <span>{trip.groupSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span>{trip.duration}</span>
                  </div>
                  {trip.altitude && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Max Altitude</span>
                      <span>{trip.altitude}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Difficulty</span>
                    <span className="capitalize">{trip.difficulty}</span>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
                <h4 className="font-semibold mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Our adventure experts are here to help you plan your perfect trek.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form Modal */}
      {showInquiryForm && (
        <InquiryForm trip={trip} onClose={() => setShowInquiryForm(false)} />
      )}
    </Layout>
  );
}
