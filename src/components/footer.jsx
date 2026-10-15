
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { site, navLinks } from '../data/site';
import logo from "../assets/Mickey's_PrimaryLogo_White.svg";

// Inline brand icons
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
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.32v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.35-4.64c.3 0 .59.04.86.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52V6.89a4.85 4.85 0 0 1-1.04-.2z" />
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
    <footer className="bg-dusty-plumb text-cream-200">
      <div className="container-mx px-5 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-12">

          {/* BRAND */}
          <div className="text-center sm:col-span-2 lg:col-span-1 lg:text-left">
            <Link
              to="/"
              aria-label="Mickey's Café & Lounge home"
              className="mb-5 inline-flex"
            >
              <img
                src={logo}
                alt="Mickey's Café & Lounge"
                className="h-16 w-auto max-w-[210px] object-contain sm:h-[72px] md:max-w-[230px] lg:mx-0"
              />
            </Link>

            <p className="mx-auto max-w-sm text-sm leading-7 text-cream-100/65 lg:mx-0">
              Good Coffee, Great Food, Better Together. A warm place to relax,
              connect, and enjoy the little things — in the heart of Kitchener.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-honey-300 hover:bg-honey-300 hover:text-plum-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* EXPLORE + CUSTOMER: SIDE BY SIDE ON MOBILE */}
          <div className="grid grid-cols-2 gap-6 sm:col-span-2 sm:gap-10 lg:col-span-2 lg:gap-8">

            {/* EXPLORE */}
            <div className="min-w-0">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-honey-300">
                Explore
              </p>

              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center gap-1.5 text-sm leading-5 text-cream-100/70 transition-colors duration-200 hover:text-honey-300"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CUSTOMER */}
            <div className="min-w-0">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-honey-300">
                Customer
              </p>

              <ul className="space-y-4">
                {customerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center gap-1.5 text-sm leading-5 text-cream-100/70 transition-colors duration-200 hover:text-honey-300"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-honey-300">
              Visit Us
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-1 h-[18px] w-[18px] shrink-0 text-copper-300"
                  strokeWidth={1.5}
                />

                <div className="text-sm leading-6 text-cream-100/70">
                  <p>{site.address.line1}</p>
                  <p>{site.address.line2}</p>
                </div>
              </div>

              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 text-sm text-cream-100/70 transition-colors hover:text-honey-300"
              >
                <Mail
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-copper-300"
                  strokeWidth={1.5}
                />
                <span className="break-all">{site.email}</span>
              </a>
            </div>
          </div>
        </div>

       

        {/* BOTTOM BAR */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-cream-100/10 pt-6 md:mt-10 md:flex-row md:pt-7">
          <p className="text-center text-xs leading-5 text-cream-100/40 md:text-left">
            © {new Date().getFullYear()} Mickey's Café &amp; Lounge. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <Link
              to="/contact"
              className="text-xs text-cream-100/45 transition-colors hover:text-honey-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              className="text-xs text-cream-100/45 transition-colors hover:text-honey-300"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
