import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { site, navLinks } from '../data/site';
import logo from "../assets/Mickey's_PrimaryLogo_White.svg";

// Inline brand icons (lucide-react removed these in many versions)
function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function TikTokIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.32v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.35-4.64c.3 0 .59.04.86.13V9.4a6.33 6.33 0 00-1-.05A6.34 6.34 0 005 20.1a6.34 6.34 0 0010.86-4.43V8.69a8.16 8.16 0 004.77 1.52V6.89a4.85 4.85 0 01-1.04-.2z" />
    </svg>
  );
}

const customerLinks = [
  { label: "My Mickey's", path: '/my-mickeys' },
  { label: 'Gift Cards', path: '/gift-cards' },
  { label: 'Order Online', path: '/menu' },
  { label: 'Reservations', path: '/reservations' },
];

const socials = [
  { label: 'Instagram', href: site.instagramUrl, Icon: InstagramIcon },
  { label: 'Facebook', href: site.facebookUrl, Icon: FacebookIcon },
  { label: 'TikTok', href: site.tiktokUrl, Icon: TikTokIcon },
  { label: 'YouTube', href: site.youtubeUrl, Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[#2a140d] text-cream-200 pt-20 pb-8">
      <div className="container-mx px-6 sm:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-10 lg:gap-8 pb-12 border-b border-cream-100/10">
          {/* Brand */}
          <div className='text-center'>
            <Link
              to="/"
              aria-label="Mickey's Café & Lounge home"
              className="inline-block mb-4"
            >
              <img
                src={logo}
                alt="Mickey's Café & Lounge"
                className="h-30 w-auto max-w-[300px] object-contain"
              />
            </Link>

            <p className="text-sm text-cream-100/60 leading-relaxed max-w-xs">
              Good Coffee, Great Food, Better Together. A warm place to relax,
              connect, and enjoy the little things — in the heart of Kitchener.
            </p>

            <div className="flex gap-3 mt-6 text-center items-center justify-center">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-cream-100/20 flex items-center justify-center text-cream-100/80 hover:bg-honey-300 hover:text-plum-500 hover:border-honey-300 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow text-honey-300 mb-4">Explore</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-cream-100/70 hover:text-honey-300 transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer */}
          <div>
            <p className="eyebrow text-honey-300 mb-4">Customer</p>
            <ul className="space-y-2.5">
              {customerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-cream-100/70 hover:text-honey-300 transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          

          {/* Contact */}
          <div>
            <p className="eyebrow text-honey-300 mb-4">Contact</p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-copper-300 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div className="text-sm text-cream-100/70 font-sans">
                  <p>{site.address.line1}</p>
                  <p>{site.address.line2}</p>
                </div>
              </div>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-sm text-cream-100/70 hover:text-honey-300 transition-colors font-sans"
              >
                <Mail className="w-4 h-4 text-copper-300 shrink-0" strokeWidth={1.5} />
                {site.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-cream-100/40 font-sans">
            © {new Date().getFullYear()} Mickey's Café & Lounge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/contact"
              className="text-xs text-cream-100/40 hover:text-honey-300 transition-colors font-sans"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-xs text-cream-100/40 hover:text-honey-300 transition-colors font-sans"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}