import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  BarChart3,
  Share2,
  Shield,
  Users,
  Trophy,
  ArrowRight,
  Star,
  CheckCircle2,
  GraduationCap,
  Dumbbell,
  Target,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Athletic Metrics Dashboard",
    desc: "Showcase your 40-yard dash, bench press, squat, vertical jump, and more with stunning visual displays that coaches love.",
  },
  {
    icon: GraduationCap,
    title: "Academic Profile",
    desc: "Highlight your GPA, honors courses, test scores, and intended field of study. Coaches recruit student-athletes, not just athletes.",
  },
  {
    icon: Share2,
    title: "One Link. Everywhere.",
    desc: "Share your complete athletic profile with any coach, scout, or recruiter with a single link. Works perfectly on mobile.",
  },
  {
    icon: Shield,
    title: "School Verified",
    desc: "Profiles verified by your school's athletic department. Coaches trust verified stats and academics.",
  },
  {
    icon: Dumbbell,
    title: "Testing Integration",
    desc: "Directly import your combine and testing results. Keep your metrics up to date as you improve throughout the season.",
  },
  {
    icon: Target,
    title: "Recruiting Visibility",
    desc: "Get discovered by college coaches searching for athletes by sport, position, metrics, and location.",
  },
];

const steps = [
  {
    num: "01",
    title: "Create Your Profile",
    desc: "Sign up in minutes. Add your basic info, sports, and school.",
  },
  {
    num: "02",
    title: "Add Your Stats",
    desc: "Input your athletic testing metrics, academics, and highlights.",
  },
  {
    num: "03",
    title: "Share Your Link",
    desc: "Get your unique profile link and share it with coaches everywhere.",
  },
];

const testimonials = [
  {
    name: "Coach Rodriguez",
    role: "Head Football Coach, Desert Vista Prep",
    text: "AthProfile completely changed how we handle recruiting outreach. Every one of our athletes has a professional digital resume ready to share.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Parent of D1 Recruit",
    text: "My son's AthProfile link was the first thing college coaches asked for. It made the recruiting process so much easier and more professional.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Student Athlete, Class of 2025",
    text: "I sent my AthProfile link to 30 coaches in one night. Got responses from 8 programs within a week. This platform is a game-changer.",
    rating: 5,
  },
];

const stats = [
  { value: "2,400+", label: "Athlete Profiles" },
  { value: "150+", label: "Partner Schools" },
  { value: "500+", label: "College Connections" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
              <Zap className="mr-1.5 h-3.5 w-3.5 text-primary" />
              Trusted by 150+ Arizona Schools
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Your Athletic Story.{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                One Link.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              The digital resume for student athletes. Showcase your stats, academics, and highlights to
              college coaches with a single, professional profile link.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/onboard">
                <Button size="lg" className="gap-2 px-8 text-base">
                  Create Your Profile <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/athletes/marcus-thompson">
                <Button variant="outline" size="lg" className="gap-2 px-8 text-base">
                  View Sample Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border/40 bg-card/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-primary sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything a Student Athlete Needs
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built specifically for high school athletes who want to get recruited.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="border-border/40 bg-card/50 transition-colors hover:border-primary/30">
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get Discovered in 3 Simple Steps
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                  <span className="text-2xl font-bold text-primary">{s.num}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Athletes, Coaches & Parents
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/40 bg-card/50">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
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

      {/* CTA */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-background p-8 sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Get Recruited?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Join thousands of student athletes who are using AthProfile to connect with college coaches and showcase their talent.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/onboard">
                  <Button size="lg" className="gap-2 px-8">
                    Create Free Profile <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/schools">
                  <Button variant="outline" size="lg" className="px-8">
                    Partner Your School
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
