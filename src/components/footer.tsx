import Link from "next/link";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              Ath<span className="text-primary">Profile</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your Athletic Story. One Link.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/athletes" className="text-muted-foreground hover:text-foreground">Athletes</Link></li>
              <li><Link href="/schools" className="text-muted-foreground hover:text-foreground">For Schools</Link></li>
              <li><Link href="/coaches" className="text-muted-foreground hover:text-foreground">For Coaches</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Get Started</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/onboard" className="text-muted-foreground hover:text-foreground">Create Profile</Link></li>
              <li><Link href="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@azturfwarz.com</li>
              <li>Phoenix, AZ</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          <p>Powered by AZ Turf Warz &nbsp;|&nbsp; Phoenix, AZ</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} AthProfile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
