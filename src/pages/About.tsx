import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Users, Shield, Award, MapPin, Heart, Target, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { stats } from '@/data/trips';

const team = [
  {
    name: 'Arjun Sharma',
    role: 'Founder & Lead Trek Guide',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Summited 20+ peaks including Everest. 15 years of mountaineering experience.',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Ensures every trek runs smoothly. Adventure enthusiast and logistics expert.',
  },
  {
    name: 'Rahul Verma',
    role: 'Senior Trek Leader',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Certified mountaineer with expertise in Himalayan and Sahyadri treks.',
  },
  {
    name: 'Sneha Patel',
    role: 'Customer Experience',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'Your first point of contact. Passionate about creating memorable experiences.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Every trek follows strict safety protocols with trained leaders, first aid, and emergency evacuation plans.',
  },
  {
    icon: Heart,
    title: 'Passion for Adventure',
    description: 'We're trekkers first. Our love for mountains drives everything we do.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a tribe of like-minded adventurers who support and inspire each other.',
  },
  {
    icon: Target,
    title: 'Sustainability',
    description: 'Leave no trace. We're committed to preserving the natural beauty we explore.',
  },
];

const milestones = [
  { year: '2018', title: 'Founded Trek-Nation', description: 'Started with weekend Sahyadri treks from Mumbai' },
  { year: '2019', title: 'Himalayan Expansion', description: 'Launched first Himalayan expeditions' },
  { year: '2020', title: 'Virtual Community', description: 'Built online trekking community during lockdown' },
  { year: '2021', title: '5000+ Trekkers', description: 'Crossed 5000 happy trekkers milestone' },
  { year: '2022', title: 'International Treks', description: 'Launched Everest Base Camp and Nepal treks' },
  { year: '2023', title: '15000+ Community', description: 'Grew to 15000+ trekking community members' },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80"
            alt="Mountain landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4">About Trek-Nation</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Born from a Love for <span className="text-gradient-orange">Mountains</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a team of passionate trekkers on a mission to help you discover the transformative power of the mountains.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30 border-y border-border/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Trek-Nation was born in 2018 from a simple idea: make the magic of trekking accessible to everyone. Our founder, Arjun Sharma, after summiting numerous peaks across the Himalayas, realized that the joy of mountains shouldn't be limited to seasoned mountaineers.
                </p>
                <p>
                  What started as weekend treks with friends in the Sahyadris has grown into India's most trusted trekking community. We've taken thousands of first-time trekkers to their first summit, and guided experienced adventurers to conquer bucket-list peaks.
                </p>
                <p>
                  Our philosophy is simple: <strong className="text-foreground">Safe. Fun. Unforgettable.</strong> Every trek we organize prioritizes your safety, ensures you have the time of your life, and creates memories that last forever.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
                alt="Trekkers on mountain"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <p className="font-display text-4xl font-bold">6+</p>
                <p className="text-sm">Years of Adventures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div key={milestone.year} className={`flex items-center gap-6 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="p-4 rounded-xl bg-card border border-border/50">
                      <p className="text-primary font-bold">{milestone.year}</p>
                      <h3 className="font-display font-semibold">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-primary flex-shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate adventurers behind Trek-Nation
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-card rounded-xl overflow-hidden border border-border/50">
                <div className="aspect-square">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Tribe?
            </h2>
            <p className="text-muted-foreground mb-8">
              Your next adventure is just a click away. Explore our treks and find your perfect mountain experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-cta shadow-glow">
                <Link to="/treks">Explore Treks <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
