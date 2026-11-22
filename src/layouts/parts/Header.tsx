import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Watch Live', href: '/watch-live' },
  { label: 'Teachings', href: '/teachings' },
  { label: 'Prayer', href: '/prayer' },
  { label: 'Give', href: '/give' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[hsl(var(--secondary))] shadow-lg shadow-black/20'
          : 'bg-[hsl(var(--secondary))]/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 min-w-0">
            <img
              src="/airo-assets/images/layouts/header/illumination-global-ministries"
              alt="Illumination Global Ministries"
              className="block h-auto max-h-12 w-auto max-w-[220px] object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                    isActive
                      ? 'text-[hsl(var(--primary))]'
                      : 'text-white/80 hover:text-[hsl(var(--primary))]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[hsl(var(--primary))] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              to="/give"
              className="ml-2 px-5 py-2 rounded-full text-sm font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--secondary))] hover:bg-[hsl(var(--accent))] transition-colors duration-200 shadow-md"
            >
              Give Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[hsl(var(--secondary))] border-t border-white/10 px-6 pb-6 pt-2">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-3 text-base font-medium border-b border-white/10 transition-colors duration-200 ${
                    isActive
                      ? 'text-[hsl(var(--primary))]'
                      : 'text-white/80 hover:text-[hsl(var(--primary))]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/give"
              className="mt-4 text-center px-5 py-3 rounded-full text-sm font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--secondary))] hover:bg-[hsl(var(--accent))] transition-colors duration-200"
            >
              Give Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
