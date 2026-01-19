import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mountain, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Treks',
    href: '/treks',
    children: [
      { label: 'Sahyadri Treks', href: '/treks/sahyadri' },
      { label: 'Himalayan Expeditions', href: '/treks/himalayan' },
      { label: 'International', href: '/treks/international' },
      { label: 'Weekend Getaways', href: '/treks/weekend' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Mountain className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display text-xl md:text-2xl font-bold text-foreground">
              Trek<span className="text-primary">-Nation</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                        isActive(link.href)
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      )}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link to={child.href} className="cursor-pointer">
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive(link.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-gradient-cta shadow-glow-sm hover:shadow-glow transition-shadow">
              <Link to="/treks">Explore Treks</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <div className="space-y-1">
                      <span className="px-4 py-2 text-sm font-medium text-muted-foreground">
                        {link.label}
                      </span>
                      <div className="pl-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              'block px-4 py-2 text-sm rounded-lg transition-colors',
                              isActive(child.href)
                                ? 'text-primary bg-primary/10'
                                : 'text-foreground hover:bg-muted'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                        isActive(link.href)
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:bg-muted'
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4">
                <Button asChild className="w-full bg-gradient-cta">
                  <Link to="/treks" onClick={() => setMobileMenuOpen(false)}>
                    Explore Treks
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
