import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

// Sample blog post content
const blogPostData: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}> = {
  'top-10-monsoon-treks-sahyadri': {
    title: 'Top 10 Monsoon Treks in Sahyadri You Must Experience',
    excerpt: 'The Western Ghats come alive during monsoon. Discover the best trails where waterfalls cascade, valleys turn emerald green, and every step is an adventure.',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=80',
    author: 'Arjun Sharma',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Trekking Guide',
    content: `
The monsoon transforms the Sahyadri mountains into a trekker's paradise. From June to September, the Western Ghats receive abundant rainfall, turning brown hills into lush green valleys, creating temporary waterfalls, and filling every stream to the brim.

## Why Trek in Monsoon?

While many consider monsoon the "off-season" for trekking, experienced trekkers know it's actually the most magical time. The landscape is at its greenest, waterfalls are at their most powerful, and the cool misty air makes for comfortable trekking.

### 1. Harishchandragad via Nalichi Vaat

The iconic Konkan Kada offers breathtaking views during monsoon. The mist-covered valley below creates a surreal experience. The Nalichi Vaat route, though challenging with slippery rocks and stream crossings, is incredibly rewarding.

**Difficulty**: Challenging  
**Best Time**: July-August  
**Pro Tip**: Start early to avoid afternoon fog that reduces visibility.

### 2. Rajmachi Fort

A relatively easy trek perfect for beginners, Rajmachi offers stunning views of the twin forts - Shrivardhan and Manaranjan. During monsoon, numerous streams and waterfalls dot the trail.

**Difficulty**: Easy to Moderate  
**Best Time**: July-September  
**Pro Tip**: Visit during May-June for the magical firefly display.

### 3. Lohagad Fort

One of the most accessible forts from Mumbai and Pune, Lohagad is perfect for a quick monsoon getaway. The trek is short but offers panoramic views of the surrounding valleys covered in clouds.

**Difficulty**: Easy  
**Best Time**: June-September  
**Pro Tip**: Combine with Visapur Fort for a longer adventure.

## Safety Tips for Monsoon Trekking

1. **Wear proper footwear** - Waterproof trekking shoes with good grip are essential
2. **Carry rain gear** - A quality rain jacket is better than an umbrella
3. **Start early** - Weather tends to worsen in the afternoon
4. **Check weather forecasts** - Avoid trekking during heavy rainfall warnings
5. **Trek in groups** - Safety in numbers, especially on slippery trails
6. **Carry extra clothes** - You will get wet, so have dry clothes for the return

## Conclusion

Monsoon trekking in the Sahyadris is a unique experience that every nature lover should have at least once. The challenges are real - slippery trails, leeches, and unpredictable weather - but the rewards are unmatched. The sight of clouds flowing through valleys like rivers, waterfalls emerging from every cliff, and the entire mountain range draped in fifty shades of green makes it all worthwhile.

Ready to experience the magic? Check out our [monsoon trek calendar](/treks/sahyadri) for upcoming departures!
    `,
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostData[slug] : undefined;

  if (!post) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
            </Link>
            <span className="text-primary text-sm font-medium">{post.category}</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full object-cover" />
                <span>{post.author}</span>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-invert prose-lg max-w-none">
                {post.content.split('\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={idx} className="font-display text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                  }
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={idx} className="font-display text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                  }
                  if (paragraph.startsWith('**') && paragraph.includes('**:')) {
                    const [label, value] = paragraph.split('**: ');
                    return (
                      <p key={idx} className="text-muted-foreground">
                        <strong className="text-foreground">{label.replace('**', '')}:</strong> {value}
                      </p>
                    );
                  }
                  if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ')) {
                    return <li key={idx} className="text-muted-foreground ml-4">{paragraph.replace(/^\d+\.\s/, '')}</li>;
                  }
                  if (paragraph.trim()) {
                    return <p key={idx} className="text-muted-foreground leading-relaxed">{paragraph}</p>;
                  }
                  return null;
                })}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <p className="font-semibold mb-4">Share this article</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Author Card */}
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={post.authorImage} alt={post.author} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold">{post.author}</p>
                      <p className="text-sm text-muted-foreground">Trek Leader & Founder</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Arjun has been exploring the Sahyadris for over 15 years and has summited 20+ peaks including Everest.
                  </p>
                </div>

                {/* Related Treks */}
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="font-semibold mb-4">Ready to Trek?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check out our upcoming monsoon treks in the Sahyadris.
                  </p>
                  <Button asChild className="w-full bg-gradient-cta">
                    <Link to="/treks/sahyadri">View Sahyadri Treks</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
