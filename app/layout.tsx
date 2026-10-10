import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import ThemeToggle from "./ThemeToggle";

export const metadata: Metadata = {
  title: 'jimmy wayne — mountain race mentorship',
  description: 'Race-specific mentorship for iconic mountain ultras, grounded in firsthand experience.',
  metadataBase: new URL('https://jimmywayne.run'),
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
   
<header className="site-header">
  <Link className="brand-lockup" href="/">
    <img
      className="brand-avatar"
      src="/jimmy-wayne-avatar.jpg"
      alt="Jimmy Wayne"
    />
    <span className="wordmark">jimmy wayne</span>
  </Link>

  <nav>
    <Link href="/races">Races</Link>
    <Link href="/about">About</Link>
    <Link href="/field-notes">Field Notes</Link>
    <Link
      className="nav-cta"
      href="https://calendly.com/jelam26-2/jimmywayne"
    >
      Reserve a Session
    </Link>
    <ThemeToggle />
  </nav>
</>

    <main>{children}</main>
    <footer className="site-footer">
      <div><div className="footer-mark">jimmy wayne</div><p>Mountain race mentorship.</p></div>
      <div className="footer-links"><Link href="/races">Races</Link><Link href="/about">About</Link><Link href="/field-notes">Field Notes</Link><Link href="https://calendly.com/jelam26-2/jimmywayne">Reserve</Link></div>
      <div className="footer-bottom"><span>Experience, passed forward.</span><span>© {new Date().getFullYear()} Jimmy Wayne</span></div>
    </footer>
  </body></html>;
}
