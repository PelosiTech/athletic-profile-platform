import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Star,
  CheckCircle2,
  UserPlus,
  ClipboardCheck,
  Share2,
  Trophy,
  Users,
  GraduationCap,
  Quote,
} from "lucide-react";

const featuredAthletes = [
  {
    name: "Marcus Thompson",
    school: "Ridgeline Academy",
    sport: "Football",
    position: "Wide Receiver",
    grade: "Junior",
    fortyYard: "4.52s",
    gpa: "3.8",
    photo: "/images/athlete-1.jpg",
    slug: "marcus-thompson",
  },
  {
    name: "Sophia Rivera",
    school: "Ridgeline Academy",
    sport: "Basketball",
    position: "Point Guard",
    grade: "Senior",
    fortyYard: "4.71s",
    gpa: "3.9",
    photo: "/images/athlete-2.jpg",
    slug: "sophia-rivera",
  },
  {
    name: "Jaylen Carter",
    school: "Ridgeline Academy",
    sport: "Track & Field",
    position: "Sprinter",
    grade: "Junior",
    fortyYard: "4.38s",
    gpa: "3.5",
    photo: "/images/athlete-3.jpg",
    slug: "jaylen-carter",
  },
  {
    name: "Ava Mitchell",
    school: "Ridgeline Academy",
    sport: "Soccer",
    position: "Midfielder",
    grade: "Sophomore",
    fortyYard: "4.65s",
    gpa: "4.0",
    photo: "/images/athlete-4.jpg",
    slug: "ava-mitchell",
  },
];

const testimonials = [
  {
    name: "Coach Dan Rodriguez",
    role: "Head Football Coach, Desert Vista Prep",
    text: "AthProfile completely changed how we handle recruiting outreach. Every one of our athletes now has a professional digital resume ready to share with college programs.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Parent of D1 Recruit",
    text: "My son's profile link was the first thing college coaches asked for. It made the recruiting process so much easier and more professional than sending highlight tapes over email.",
    rating: 5,
  },
  {
    name: "Coach Maria Santos",
    role: "Girls Basketball, Scottsdale High",
    text: "I recommend this platform to every athlete I coach. The verified stats and clean presentation give our girls a real edge in the recruiting process.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Athletes on turf field"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm border-emerald-500/30 bg-emerald-500/10">
              <Trophy className="mr-1.5 h-3.5 w-3.5 text-emerald-400" />
              Powered by AZ Turf Warz
            </Badge>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-white">
              Your Athletic Story.{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                One Link.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl max-w-xl">
              The digital resume for student athletes. Showcase your stats, academics, and highlights to
              college coaches with a single, professional profile link.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/onboard">
                <Button size="lg" className="gap-2 px-8 text-base bg-emerald-500 hover:bg-emerald-600 text-white">
                  Create Your Profile <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/athletes">
                <Button variant="outline" size="lg" className="gap-2 px-8 text-base border-white/20 text-white hover:bg-white/10">
                  Browse Athletes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Athletes */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-emerald-500/30">Featured Athletes</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Real Profiles. Real Athletes.
          </h2>
          <p className="mt-3 text-muted-foreground">
            See how student athletes are showcasing their talent to college coaches.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAthletes.map((a) => (
            <Card key={a.name} className="group overflow-hidden border-border/40 bg-card/60 transition-all hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={a.photo}
                  alt={a.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-emerald-500/90 text-white text-xs">{a.sport}</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">{a.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{a.school} · {a.grade} · {a.position}</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-emerald-500/10 p-2 text-center">
                    <p className="text-sm font-bold text-emerald-400">{a.fortyYard}</p>
                    <p className="text-[10px] text-muted-foreground">40yd Dash</p>
                  </div>
                  <div className="rounded-lg bg-emerald-500/10 p-2 text-center">
                    <p className="text-sm font-bold text-emerald-400">{a.gpa}</p>
                    <p className="text-[10px] text-muted-foreground">GPA</p>
                  </div>
                </div>
                <Link href={`/athletes/${a.slug}`} className="mt-3 flex items-center text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                  View Profile <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge variant="outline" className="mb-4 border-emerald-500/30">How It Works</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get Discovered in 3 Simple Steps
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: UserPlus, title: "Create Profile", desc: "Sign up in minutes. Add your basic info, sports, school, and athletic history." },
              { icon: ClipboardCheck, title: "Complete Testing", desc: "Input your combine results, athletic metrics, GPA, and highlight videos." },
              { icon: Share2, title: "Share Your Link", desc: "Get your unique profile URL and share it with every coach and recruiter." },
            ].map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-500/10">
                  <step.icon className="h-7 w-7 text-emerald-400" />
                </div>
                <div className="absolute top-8 left-[60%] hidden h-[2px] w-[calc(100%-20%)] bg-gradient-to-r from-emerald-500/50 to-transparent md:block last:hidden" style={i === 2 ? { display: "none" } : {}} />
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="bg-emerald-500/5 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: "500+", label: "Athletes" },
              { value: "45", label: "Schools" },
              { value: "120+", label: "Coaches Connected" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-emerald-400 sm:text-5xl">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Schools CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/action-1.jpg"
            alt="Football action"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bring Athletic Profiles to Your School
            </h2>
            <p className="mt-4 text-gray-300">
              Give every student athlete at your school a professional digital presence.
              Schools get a dedicated dashboard to manage athletes, verify stats, and connect with college programs.
            </p>
            <div className="mt-8">
              <Link href="/schools">
                <Button size="lg" className="gap-2 px-8 bg-emerald-500 hover:bg-emerald-600 text-white">
                  Partner Your School <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge variant="outline" className="mb-4 border-emerald-500/30">Testimonials</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Athletes, Coaches & Parents
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/40 bg-card/50">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-emerald-500/30 mb-3" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-emerald-400" />
              <span className="font-semibold">Powered by AZ Turf Warz</span>
              <span className="text-muted-foreground text-sm">| Phoenix, AZ</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/athletes" className="hover:text-emerald-400 transition-colors">Athletes</Link>
              <Link href="/schools" className="hover:text-emerald-400 transition-colors">Schools</Link>
              <Link href="/coaches" className="hover:text-emerald-400 transition-colors">Coaches</Link>
              <Link href="/onboard" className="hover:text-emerald-400 transition-colors">Sign Up</Link>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            © 2026 AZ Turf Warz. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
