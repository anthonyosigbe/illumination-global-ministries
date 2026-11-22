import { Link } from 'react-router';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--secondary))] text-white">
      {/* Top warm divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/airo-assets/images/logo/horizontal"
              alt="Illumination Global Ministries"
              className="block h-auto max-h-12 w-auto max-w-[200px] object-contain mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Spreading the light of hope, love, and transformation to communities around the world.
              All are welcome here.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/50 hover:text-[hsl(var(--primary))] transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/50 hover:text-[hsl(var(--primary))] transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-white/50 hover:text-[hsl(var(--primary))] transition-colors duration-200"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="text-white/50 hover:text-[hsl(var(--primary))] transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[hsl(var(--primary))] font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <nav aria-label="Footer links" className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Events', href: '/events' },
                { label: 'Prayer Request', href: '/prayer' },
                { label: 'Give', href: '/give' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white/60 hover:text-[hsl(var(--primary))] text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Times & Contact */}
          <div>
            <h3 className="text-[hsl(var(--primary))] font-semibold text-sm uppercase tracking-widest mb-5">
              Service Times
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <div>
                <p className="text-white/90 font-medium">Sunday Worship</p>
                <p>8:00 AM &amp; 10:30 AM</p>
              </div>
              <div>
                <p className="text-white/90 font-medium">Wednesday Bible Study</p>
                <p>7:00 PM</p>
              </div>
              <div className="mt-2 pt-4 border-t border-white/10">
                <p className="text-white/90 font-medium">Contact</p>
                <p>info@illuminationglobal.org</p>
                <p className="mt-1">31323 Yatesbury Ln</p>
                <p>Fulshear, TX 77441</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Illumination Global Ministries. All rights reserved.</p>
          <p>Spreading light to the nations.</p>
        </div>
      </div>
    </footer>
  );
}
