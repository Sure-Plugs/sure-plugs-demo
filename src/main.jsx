import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Menu,
  PlugZap,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import './styles.css';

const timeline = [
  {
    icon: Search,
    step: '01',
    title: 'Discover the right plug',
    copy:
      'Search curated vendors, services, and opportunities with clear tags, location signals, and availability windows.',
    stat: '2m',
  },
  {
    icon: ShieldCheck,
    step: '02',
    title: 'Verify before you commit',
    copy:
      'Profiles surface ratings, completed deals, proof notes, and Sure Plug checks so every lead feels accountable.',
    stat: '98%',
  },
  {
    icon: CalendarCheck,
    step: '03',
    title: 'Reserve a clean handoff',
    copy:
      'Pick a slot, set expectations, and keep the full conversation attached to one timeline record.',
    stat: '24/7',
  },
  {
    icon: BadgeCheck,
    step: '04',
    title: 'Close with confidence',
    copy:
      'Confirm delivery, leave a review, and keep your history ready for repeat connections.',
    stat: '4.9',
  },
];

const metrics = [
  ['Verified plugs', '4,200+'],
  ['Average response', '12 min'],
  ['Cities covered', '18'],
];

const categories = ['Phones', 'Apartments', 'Logistics', 'Events', 'Repairs'];

const mobileNavItems = [
  ['Home', '#top'],
  ['About', '#proof'],
  ['Services', '#timeline'],
  ['Signin', '#start'],
  ['Login', '#start'],
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Sure Plug home">
          <span className="brand-mark">
            <PlugZap size={22} strokeWidth={2.4} />
          </span>
          <span>Sure Plug</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          <a href="#timeline">Timeline</a>
          <a href="#proof">Proof</a>
          <a href="#start">Start</a>
        </nav>

        <button
          className="icon-button mobile-menu"
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <Menu size={20} />
        </button>

        <nav
          className={`mobile-nav ${isMobileMenuOpen ? 'is-open' : ''}`}
          id="mobile-navigation"
          aria-label="Mobile primary"
        >
          {mobileNavItems.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setIsMobileMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80"
            alt=""
          />
        </div>

        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} />
            Trusted connections, mapped end to end
          </p>
          <h1>Sure Plug</h1>
          <p className="hero-copy">
            A clean timeline experience for finding trusted plugs, checking their proof, and
            closing each connection without losing context.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#timeline">
              View timeline
              <ArrowRight size={18} />
            </a>
            <a className="secondary-action" href="#start">
              Join waitlist
            </a>
          </div>
        </div>
      </section>

      <section className="metrics-band" id="proof" aria-label="Sure Plug metrics">
        {metrics.map(([label, value]) => (
          <div className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="timeline-section" id="timeline">
        <div className="section-heading">
          <p className="eyebrow compact">
            <ClipboardList size={16} />
            The Sure Plug flow
          </p>
          <h2>Every connection gets a visible path.</h2>
        </div>

        <div className="timeline-shell">
          <div className="timeline-line" aria-hidden="true" />
          {timeline.map(({ icon: Icon, step, title, copy, stat }) => (
            <article className="timeline-item" key={title}>
              <div className="timeline-dot">
                <Icon size={24} />
              </div>
              <div className="timeline-card">
                <div className="card-top">
                  <span>{step}</span>
                  <strong>{stat}</strong>
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="workspace">
        <div className="workspace-copy">
          <p className="eyebrow compact">
            <Users size={16} />
            Built for repeat decisions
          </p>
          <h2>Keep your best plugs close and your next move obvious.</h2>
          <p>
            Save trusted contacts, compare categories, and track the next action from a single
            surface built for quick scanning.
          </p>
        </div>

        <div className="panel" aria-label="Sure Plug activity snapshot">
          <div className="panel-header">
            <span>Live board</span>
            <CheckCircle2 size={20} />
          </div>
          <div className="search-row">
            <Search size={18} />
            <span>Search verified plugs</span>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <button className="category-chip" type="button" key={category}>
                {category}
              </button>
            ))}
          </div>
          <div className="review-card">
            <div>
              <span className="avatar">SP</span>
              <div>
                <strong>Prime gadget plug</strong>
                <p>Verified today · Lekki pickup</p>
              </div>
            </div>
            <span className="rating">
              <Star size={16} fill="currentColor" />
              4.9
            </span>
          </div>
        </div>
      </section>

      <section className="cta-band" id="start">
        <div>
          <p className="eyebrow compact">Private beta</p>
          <h2>Bring your plugs into one trusted timeline.</h2>
        </div>
        <form className="signup-form">
          <label htmlFor="email">Email address</label>
          <div>
            <input id="email" name="email" type="email" placeholder="you@example.com" />
            <button type="submit">
              Request access
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
