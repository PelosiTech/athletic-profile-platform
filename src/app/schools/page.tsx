import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Users,
  BarChart3,
  Shield,
  GraduationCap,
  Trophy,
  ArrowRight,
  School,
  Handshake,
  Target,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Users,
    title: "Centralized Athlete Profiles",
    desc: "Every athlete in your program gets a professional, shareable profile. No more scattered spreadsheets and paper forms.",
  },
  {
    icon: BarChart3,
    title: "Testing Data Dashboard",
    desc: "Track and compare athletic metrics across your entire program. Identify improvement trends and standout performers.",
  },
  {
    icon: Shield,
    title: "School-Verified Badges",
    desc: "Your school's verification badge on every profile builds trust with college coaches and recruiters.",
  },
  {
    icon: GraduationCap,
    title: "Academic Integration",
    desc: "Ensure academic profiles stay current. GPA, honors courses, and test scores alongside athletic data.",
  },
  {
    icon: Trophy,
    title: "Recruiting Exposure",
    desc: "Increase your athletes' visibility to college programs. Our platform is searched by hundreds of coaches monthly.",
  },
  {
    icon: Target,
    title: "Custom Branding",
    desc: "Your school's colors, logo, and branding on every athlete profile. Represent your program professionally.",
  },
];

const stats = [
  { value: "150+", label: "Partner Schools" },
  { value: "3,200+", label: "Athlete Profiles" },
  { value: "45%", label: "Increase in Coach Engagement" },
  { value: "92%", label: "Coach Satisfaction" },
];

export default function Schools() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5">
              <School className="mr-1.5 h-3.5 w-3.5" /> For Schools & Athletic Programs
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Empower Your Athletic Program with{" "}
              <span className="text-primary">Digital Profiles</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Give every student athlete in your program a professional digital resume. Streamline recruiting, showcase your program, and help your athletes get discovered.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 px-8">
                <Handshake className="h-4 w-4" /> Partner With Us
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border/40 bg-card/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold">Why Schools Choose AthProfile</h2>
          <p className="mt-4 text-muted-foreground">
            Everything your athletic department needs to support student athletes in the recruiting process.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.title} className="border-border/40 bg-card/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works for schools */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { num: "1", title: "Partner With Us", desc: "Complete a quick partnership form. We'll set up your school's custom portal within 48 hours." },
              { num: "2", title: "Onboard Athletes", desc: "Athletes create profiles through your school's branded portal. Coaches can verify stats and academic info." },
              { num: "3", title: "Track & Share", desc: "Monitor your program's profiles, track recruiting engagement, and share athlete profiles with college programs." },
            ].map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                  <span className="text-xl font-bold text-primary">{s.num}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-background p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold">Ready to Elevate Your Program?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Join 150+ Arizona schools already using AthProfile. Free for schools — we believe every student athlete deserves visibility.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8">
              <Handshake className="h-4 w-4" /> Partner With Us <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact: info@azturfwarz.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
