import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const blogPosts = [
  {
    id: '1',
    slug: 'top-10-monsoon-treks-sahyadri',
    title: 'Top 10 Monsoon Treks in Sahyadri You Must Experience',
    excerpt: 'The Western Ghats come alive during monsoon. Discover the best trails where waterfalls cascade, valleys turn emerald green, and every step is an adventure.',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80',
    author: 'Arjun Sharma',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Trekking Guide',
  },
  {
    id: '2',
    slug: 'beginners-guide-himalayan-trekking',
    title: "A Beginner's Complete Guide to Himalayan Trekking",
    excerpt: 'Planning your first Himalayan adventure? From fitness preparation to gear essentials, this comprehensive guide covers everything you need to know.',
    image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80',
    author: 'Priya Nair',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Tips & Guides',
  },
  {
    id: '3',
    slug: 'essential-trekking-gear-checklist',
    title: 'The Essential Trekking Gear Checklist: What to Pack & What to Skip',
    excerpt: 'Packing for a trek can be overwhelming. Learn what gear is essential, what you can skip, and how to pack light without compromising on safety.',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80',
    author: 'Rahul Verma',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Gear Guide',
  },
  {
    id: '4',
    slug: 'high-altitude-sickness-prevention',
    title: 'Understanding and Preventing Altitude Sickness on Treks',
    excerpt: 'Altitude sickness can turn a dream trek into a nightmare. Learn the symptoms, prevention strategies, and when to descend for your safety.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    author: 'Dr. Meera Kulkarni',
    date: '2023-12-28',
    readTime: '10 min read',
    category: 'Health & Safety',
  },
  {
    id: '5',
    slug: 'photography-tips-mountain-treks',
    title: 'Capturing the Mountains: Photography Tips for Trekkers',
    excerpt: 'From golden hour shots to star trails, master the art of mountain photography with these tips from professional adventure photographers.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    author: 'Vikram Patel',
    date: '2023-12-20',
    readTime: '7 min read',
    category: 'Photography',
  },
  {
    id: '6',
    slug: 'sustainable-trekking-leave-no-trace',
    title: 'Leave No Trace: A Guide to Sustainable Trekking',
    excerpt: 'Our mountains need protection. Learn the principles of sustainable trekking and how to minimize your environmental impact on trails.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    author: 'Sneha Patel',
    date: '2023-12-15',
    readTime: '5 min read',
    category: 'Sustainability',
  },
];

const categories = ['All', 'Trekking Guide', 'Tips & Guides', 'Gear Guide', 'Health & Safety', 'Photography', 'Sustainability'];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Trek <span className="text-gradient-orange">Stories</span> & Guides
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert tips, inspiring stories, and essential guides to elevate your trekking adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border/50 sticky top-16 bg-background/95 backdrop-blur z-30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  cat === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <Link to={`/blog/${blogPosts[0].slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div>
                <span className="text-primary text-sm font-medium">{blogPosts[0].category}</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold mt-2 mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" /> {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />{' '}
                    {new Date(blogPosts[0].date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {blogPosts[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 bg-muted/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-primary text-xs font-medium">{post.category}</span>
                  <h3 className="font-display font-semibold mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-6">
              Get weekly trekking tips, new trail discoveries, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none"
              />
              <Button className="bg-gradient-cta shadow-glow">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
