import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Users, Trophy, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Individual Athlete",
    price: "Free",
    period: "",
    description: "Get your profile live and start getting noticed.",
    badge: null,
    features: [
      "Digital athlete profile page",
      "Shareable profile link",
      "Basic stats & metrics",
      "Academic info display",
      "1 highlight video embed",
      "Mobile-friendly profile",
    ],
    cta: "Create Free Profile",
    href: "/onboard",
    variant: "outline" as const,
  },
  {
    name: "Pro Athlete",
    subtitle: "Serious Recruits",
    price: "$9",
    period: "/month",
    description: "Stand out to coaches with premium features and analytics.",
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Unlimited highlight videos",
      "Profile view analytics",
      "Coach contact tracking",
      "Custom profile URL",
      "Priority in search results",
      "Season-by-season stat tracking",
      "Downloadable PDF resume",
    ],
    cta: "Go Pro",
    href: "/onboard",
    variant: "default" as const,
  },
  {
    name: "Elite",
    subtitle: "All-In Recruitment",
    price: "$19",
    period: "/month",
    description: "Maximum exposure with direct coach outreach tools.",
    badge: null,
    features: [
      "Everything in Pro",
      "Direct coach messaging",
      "College program matching",
      "Verified stats badge",
      "Featured athlete placement",
      "Recruitment timeline tracker",
      "Multi-sport profiles",
      "Personal recruitment advisor (email)",
    ],
    cta: "Go Elite",
    href: "/onboard",
    variant: "outline" as const,
  },
];

const schoolPlans = [
  {
    name: "Team Plan",
    price: "$199",
    period: "/season",
    description: "Perfect for a single team or program.",
    features: [
      "Up to 50 athlete profiles",
      "Team branding & colors",
      "Bulk athlete onboarding",
      "Coach admin dashboard",
      "Roster management",
      "Team stats overview",
    ],
  },
  {
    name: "School Plan",
    price: "$499",
    period: "/year",
    description: "Cover every sport and every athlete at your school.",
    features: [
      "Unlimited athlete profiles",
      "All sports & programs",
      "School-branded portal",
      "Multi-coach access",
      "Transcript & GPA integration",
      "Priority support",
      "Custom URL (yourschool.athprofile.com)",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
            <Zap className="mr-1.5 h-3.5 w-3.5" /> Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Invest in Your{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Athletic Future
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Whether you&apos;re just getting started or going all-in on recruitment, 
            we have a plan that fits. Every profile gets you one step closer to your next level.
          </p>
        </div>
      </section>

      {/* Athlete Plans */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">For Athletes</h2>
            <p className="mt-2 text-muted-foreground">Your digital athletic resume, always ready to share</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${
                  plan.badge
                    ? "border-primary/50 shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                    : "border-border/50"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      <Star className="mr-1 h-3 w-3" /> {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4 pt-8">
                  <div className="text-sm font-medium text-muted-foreground">{plan.subtitle}</div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.href} className="mt-8 block">
                    <Button variant={plan.variant} className="w-full" size="lg">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School & Team Plans */}
      <section className="border-t border-border/40 bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4 px-3 py-1">
              <Users className="mr-1.5 h-3.5 w-3.5" /> Schools & Programs
            </Badge>
            <h2 className="text-2xl font-bold sm:text-3xl">Team & School Plans</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Give every athlete at your school or program a professional profile. 
              Bulk pricing that makes it easy.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {schoolPlans.map((plan) => (
              <Card key={plan.name} className="border-border/50">
                <CardHeader>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/schools" className="mt-6 block">
                    <Button variant="outline" className="w-full" size="lg">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Opportunity Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4 px-3 py-1">
              <Trophy className="mr-1.5 h-3.5 w-3.5" /> The Opportunity
            </Badge>
            <h2 className="text-2xl font-bold sm:text-3xl">Revenue Model</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              A scalable SaaS model with multiple revenue streams, 
              built on the AZ Turf Warz athlete network.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Athlete Subscriptions",
                value: "$9–$19/mo",
                detail: "Per athlete. At 200 athletes on Pro ($9), that's $1,800/mo recurring. Elite upsells add $10/mo each.",
              },
              {
                icon: Shield,
                title: "School Contracts",
                value: "$499/yr per school",
                detail: "One school = $499/yr. 10 schools in the Phoenix metro = $4,990/yr. 50 schools statewide = $24,950/yr.",
              },
              {
                icon: Zap,
                title: "Team Plans",
                value: "$199/season",
                detail: "Travel teams, club programs, AAU. Shorter commitment, per-season billing. Volume play across all sports.",
              },
              {
                icon: Trophy,
                title: "Turf Warz Funnel",
                value: "Built-In Network",
                detail: "400+ flag football players per year = built-in customer base. Every Turf Warz registration is a profile lead.",
              },
              {
                icon: Star,
                title: "Year 1 Target",
                value: "$25K–$50K ARR",
                detail: "100 Pro athletes ($10.8K) + 50 Elite ($11.4K) + 10 schools ($5K) + team plans. Conservative estimate.",
              },
              {
                icon: ArrowRight,
                title: "Year 2–3 Scale",
                value: "$100K+ ARR",
                detail: "Expand beyond AZ. Multi-state. College coach premium features. Verified stats partnerships. Event sponsorships.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-lg font-bold text-primary">{item.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to Build Your Profile?</h2>
          <p className="mt-4 text-muted-foreground">
            Join athletes across Arizona who are taking control of their recruitment story.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/onboard">
              <Button size="lg">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/schools">
              <Button variant="outline" size="lg">
                School & Team Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
