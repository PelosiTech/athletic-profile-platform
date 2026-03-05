"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { href: "/athletes", label: "Athletes" },
  { href: "/schools", label: "For Schools" },
  { href: "/coaches", label: "For Coaches" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span>
            Ath<span className="text-primary">Profile</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              Dashboard
            </Button>
          </Link>
          <Link href="/onboard">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/40 bg-background px-4 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/dashboard" className="block py-3 text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>
            Dashboard
          </Link>
          <Link href="/onboard" onClick={() => setOpen(false)}>
            <Button size="sm" className="mt-2 w-full">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
