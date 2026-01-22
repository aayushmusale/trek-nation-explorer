import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search, Filter, MapPin, Clock, Star, Users, Mountain, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Layout } from '@/components/layout/Layout';
import {
  trips,
  categoryInfo,
  formatPrice,
  getDifficultyBadgeClass,
  getTripsByCategory,
  TripCategory,
  DifficultyLevel,
} from '../data/trips';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const difficultyLevels: DifficultyLevel[] = ['easy', 'moderate', 'challenging', 'extreme'];
const durationOptions = ['1 Day', '2 Days', '3-5 Days', '6+ Days'];

function TrekCard({ trip }: { trip: typeof trips[0] }) {
  return (
    <Link
      to={`/trek/${trip.slug}`}
      className="group bg-white shadow-md rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={trip.image}
          alt={trip.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getDifficultyBadgeClass(trip.difficulty)}`}>
            {trip.difficulty}
          </span>
        </div>
        {trip.originalPrice && (
          <div className="absolute top-3 right-3 bg-[#E9C46A] text-[#0B1E2D] text-xs font-bold px-2 py-1 rounded-full">
            {Math.round((1 - trip.price / trip.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
          <MapPin className="h-3 w-3" /> {trip.location}
        </div>
        <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
          {trip.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">{trip.tagline}</p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {trip.duration}
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3 text-[#E9C46A] fill-[#E9C46A]" />
              {trip.rating}
            </span>
          </div>
          <div className="text-right">
            {trip.originalPrice && (
              <p className="text-xs text-muted-foreground line-through">{formatPrice(trip.originalPrice)}</p>
            )}
            <p className="font-semibold text-[#E9C46A]">{formatPrice(trip.price)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Treks() {
  const { category } = useParams<{ category?: TripCategory }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredTrips = useMemo(() => {
    let filtered = category ? getTripsByCategory(category) : trips;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (trip) =>
          trip.name.toLowerCase().includes(query) ||
          trip.location.toLowerCase().includes(query) ||
          trip.tagline.toLowerCase().includes(query)
      );
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter((trip) => trip.difficulty === selectedDifficulty);
    }

    if (selectedDuration !== 'all') {
      filtered = filtered.filter((trip) => {
        switch (selectedDuration) {
          case '1 Day':
            return trip.durationDays === 1;
          case '2 Days':
            return trip.durationDays === 2;
          case '3-5 Days':
            return trip.durationDays >= 3 && trip.durationDays <= 5;
          case '6+ Days':
            return trip.durationDays >= 6;
          default:
            return true;
        }
      });
    }

    return filtered;
  }, [category, searchQuery, selectedDifficulty, selectedDuration]);

  const currentCategory = category ? categoryInfo[category] : null;
  const hasActiveFilters = selectedDifficulty !== 'all' || selectedDuration !== 'all' || searchQuery;

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDifficulty('all');
    setSelectedDuration('all');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80)' }}>
        <div className="absolute inset-0 bg-[#0B1E2D]/70"></div>
        <div className="relative container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {currentCategory ? (
              <>
                <div className="text-4xl mb-4">{currentCategory.icon}</div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                  {currentCategory.name}
                </h1>
                <p className="text-lg text-white/90">{currentCategory.description}</p>
              </>
            ) : (
              <>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Explore All <span className="text-[#E9C46A]">Treks</span>
                </h1>
                <p className="text-lg text-white/90">
                  Discover adventures across Sahyadris, Himalayas, and beyond
                </p>
                {/* <Button className="mt-6 bg-[#E9C46A] hover:bg-[#E9C46A]/90 text-[#0B1E2D] font-semibold px-8 py-3 transition-all duration-300 hover:scale-105">
                  <Link to="/treks">Explore Treks</Link>
                </Button> */}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="border-b border-border/50 sticky top-16 bg-background/95 backdrop-blur z-30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            <Link
              to="/treks"
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                !category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80 text-foreground'
              }`}
            >
              All Treks
            </Link>
            {(Object.entries(categoryInfo) as [TripCategory, typeof categoryInfo[TripCategory]][]).map(
              ([key, cat]) => (
                <Link
                  key={key}
                  to={`/treks/${key}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    category === key
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  {cat.icon} {cat.name}
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* Filters and Grid */}
      <section className="py-8 md:py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 border-2 rounded-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search treks by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <div className={`${showFilters ? 'flex' : 'hidden'} sm:flex gap-2 flex-1 sm:flex-initial`}>
                <div className="border-2 rounded-md">
                  <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    {difficultyLevels.map((level) => (
                      <SelectItem key={level} value={level} className="capitalize">
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                </div>
                <div className="border-2 rounded-md">
                <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                  <SelectTrigger className="w-full sm:w-[140px]">
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Duration</SelectItem>
                    {durationOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                  Search: "{searchQuery}"
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery('')} />
                </span>
              )}
              {selectedDifficulty !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs capitalize">
                  {selectedDifficulty}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedDifficulty('all')} />
                </span>
              )}
              {selectedDuration !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                  {selectedDuration}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedDuration('all')} />
                </span>
              )}
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs h-auto py-1">
                Clear all
              </Button>
            </div>
          )}

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredTrips.length} trek{filteredTrips.length !== 1 ? 's' : ''}
          </p>

          {/* Trek Grid */}
          {filteredTrips.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTrips.map((trip) => (
                <TrekCard key={trip.id} trip={trip} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Mountain className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">No treks found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search query
              </p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We organize custom treks for groups. Tell us your preferences and we'll plan the perfect adventure.
            </p>
            <Button asChild className="bg-gradient-cta shadow-glow">
              <Link to="/contact">
                Plan Custom Trek <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
