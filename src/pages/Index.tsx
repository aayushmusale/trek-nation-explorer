import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Clock, Users, Mountain, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { trips, testimonials, stats, categoryInfo, formatPrice, getDifficultyBadgeClass, getFeaturedTrips, TripCategory } from '@/data/trips';

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80" 
          alt="Mountain landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* <p className="text-[#dae5e8] font-medium mb-4 animate-fade-in text-shadow-hero">Welcome to Trek-Nation</p> */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up text-shadow text-[#dae5e8]">
            Conquer Mountains.<br />
            <span className="text-gradient-orange">Create Memories.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#dadee0] mb-8 max-w-xl animate-fade-in-up">
            From Sahyadri peaks to Himalayan summits, embark on unforgettable adventures with India's most trusted trekking community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button asChild size="lg" className="bg-gradient-cta bg-[#E9C46A] text-lg px-8">
              <Link to="/treks">Explore Treks <ArrowRight className="ml-4 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/contact">Plan Custom Trip</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-12  border-y border-border/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-[#2a555e]">
              <p className="font-display text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  const categories = Object.entries(categoryInfo) as [TripCategory, typeof categoryInfo[TripCategory]][];
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center text-[#2a555e] mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Choose Your Adventure</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">From weekend escapes to expedition-level challenges</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 text-[#2a555e] lg:grid-cols-4 gap-6">
          {categories.map(([key, cat]) => (
            <Link key={key} to={`/treks/${key}`} className="group relative overflow-hidden rounded-xl bg-card border border-border/50 p-6 hover:border-primary/50 transition-all hover:shadow-glow-sm">
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{cat.name}</h3>
              <p className="text-sm text-muted-foreground">{cat.description}</p>
              <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedTripsSection() {
  const featured = getFeaturedTrips();
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-[#2a555e] justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Featured Treks</h2>
            <p className="text-muted-foreground">Hand-picked adventures for every explorer</p>
          </div>
          <Button asChild variant="outline" className="hidden sm:flex">
            <Link to="/treks">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-[#2a555e] lg:grid-cols-4 gap-6">
          {featured.map((trip) => (
            <Link key={trip.id} to={`/trek/${trip.slug}`} className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={trip.image} alt={trip.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getDifficultyBadgeClass(trip.difficulty)}`}>{trip.difficulty}</span>
                </div>
                {trip.originalPrice && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                    {Math.round((1 - trip.price / trip.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" /> {trip.location}
                </div>
                <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">{trip.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{trip.tagline}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{trip.duration}</span>
                    <span className="flex items-center gap-1"><Star className="h-3 w-3 text-trek-gold fill-trek-gold" />{trip.rating}</span>
                  </div>
                  <div className="text-right">
                    {trip.originalPrice && <p className="text-xs text-muted-foreground line-through">{formatPrice(trip.originalPrice)}</p>}
                    <p className="font-semibold text-primary">{formatPrice(trip.price)}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Button asChild><Link to="/treks">View All Treks</Link></Button>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const features = [
    { icon: Shield, title: 'Safety First', desc: 'Trained leaders, first aid, emergency protocols' },
    { icon: Award, title: 'Expert Guides', desc: 'Certified, experienced mountain professionals' },
    { icon: Users, title: 'Small Groups', desc: 'Intimate experiences, personal attention' },
    { icon: Mountain, title: 'Curated Routes', desc: 'Best trails, hidden gems, local insights' },
  ];
  return (
    <section className="py-16 md:py-14">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center text-[#2a555e] mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why Trek With Us?</h2>
        </div>
        <div className="grid grid-cols-2 text-[#2a555e] lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6 rounded-xl bg-card border border-border/50">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-16 md:py-14 bg-muted/20 text-[#2a555e]">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Trekker Stories</h2>
          <p className="text-muted-foreground">Real adventures, real feedback</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.id} className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.tripName}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-trek-gold fill-trek-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{t.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 md:py-14 text-[#2a555e]">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden from-primary/20 to-secondary/20 p-8 md:p-12 lg:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Join thousands of trekkers who've discovered their love for mountains with Trek-Nation.</p>
          <Button asChild size="lg" className="bg-gradient-cta shadow-glow text-lg px-8">
            <Link to="/treks">Start Exploring <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <FeaturedTripsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
