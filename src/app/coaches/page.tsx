import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Eye,
  Bookmark,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Users,
  Target,
  Zap,
  CheckCircle2,
  Star,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Search,
    title: "Advanced Search",
    desc: "Filter athletes by sport, position, location, metrics, GPA, and graduation year. Find exactly who you're looking for.",
  },
  {
    icon: Eye,
    title: "Complete Profiles",
    desc: "View verified athletic metrics, academic records, highlight videos, and personal statements — all in one place.",
  },
  {
    icon: Bookmark,
    title: "Save & Track Recruits",
    desc: "Bookmark athletes to your recruiting board. Track their progress as they update their profiles throughout the season.",
  },
  {
    icon: MessageSquare,
    title: "Direct Contact",
    desc: "Reach out to athletes and their families directly through the platform. Streamline your recruiting communication.",
  },
  {
    icon: BarChart3,
    title: "Compare Athletes",
    desc: "Side-by-side metric comparisons. Evaluate multiple recruits against your program's benchmarks.",
  },
  {
    icon: Target,
    title: "Smart Recommendations",
    desc: "Get athlete recommendations based on your program's needs, playing style, and recruiting history.",
  },
];

export default function Coaches() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5">
              <Users className="mr-1.5 h-3.5 w-3.5" /> For College Coaches & Scouts
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Discover Your Next{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Impact Player
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Search thousands of verified student-athlete profiles. Find the talent that fits your program with real metrics, academics, and highlights.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/athletes">
                <Button size="lg" className="gap-2 px-8">
                  <Search className="h-4 w-4" /> Browse Athletes
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8">
                Request Coach Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold">Built for How Coaches Recruit</h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to identify, evaluate, and connect with student athletes.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="border-border/40 bg-card/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sample search */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold mb-8">Try a Quick Search</h2>
            <Card className="border-border/40">
              <CardContent className="p-6">
                <div className="grid gap-3 sm:grid-cols-4">
                  <select className="h-10 rounded-md border border-input bg-background px-3 text-sm">
                    <option>All Sports</option>
                    <option>Football</option>
                    <option>Basketball</option>
                    <option>Soccer</option>
                    <option>Track & Field</option>
                  </select>
                  <select className="h-10 rounded-md border border-input bg-background px-3 text-sm">
                    <option>Any Position</option>
                    <option>Wide Receiver</option>
                    <option>Quarterback</option>
                    <option>Linebacker</option>
                  </select>
                  <select className="h-10 rounded-md border border-input bg-background px-3 text-sm">
                    <option>Any Grad Year</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                  </select>
                  <Link href="/athletes">
                    <Button className="w-full gap-2">
                      <Search className="h-4 w-4" /> Search
                    </Button>
                  </Link>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs text-muted-foreground">Popular:</span>
                  <Badge variant="outline" className="text-xs cursor-pointer hover:bg-primary/10">Football — WR</Badge>
                  <Badge variant="outline" className="text-xs cursor-pointer hover:bg-primary/10">Basketball — PG</Badge>
                  <Badge variant="outline" className="text-xs cursor-pointer hover:bg-primary/10">Soccer — Midfielder</Badge>
                  <Badge variant="outline" className="text-xs cursor-pointer hover:bg-primary/10">Track — Sprinter</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
          </div>
          <blockquote className="text-xl font-medium leading-relaxed">
            &ldquo;AthProfile has become an essential part of our recruiting workflow. Having verified metrics and academics in one place saves us hours every week. The quality of athlete profiles is outstanding.&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="font-semibold">Coach David Patterson</p>
            <p className="text-sm text-muted-foreground">Assistant Football Coach, Arizona State University</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Start Discovering Talent Today</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Coach accounts are free. Get access to our full database of verified student-athlete profiles.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8">
              Create Coach Account <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/athletes">
              <Button variant="outline" size="lg" className="px-8">
                Browse Athletes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
