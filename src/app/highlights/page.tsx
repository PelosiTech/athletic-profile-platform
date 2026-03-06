"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Flame,
  Play,
  ChevronRight,
  Star,
  CheckCircle2,
  TrendingUp,
  Zap,
  Calendar,
  Eye,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// Weekly highlights data (would come from CMS/API in production)
const weeklyHighlights = [
  {
    id: 1,
    athlete: "Marcus Thompson",
    school: "Ridgeline Academy",
    sport: "Football",
    position: "Wide Receiver",
    grade: "Junior",
    photo: "/images/athlete-1.jpg",
    slug: "marcus-thompson",
    verified: true,
    highlight: {
      title: "8 Catches, 142 Yards, 2 TDs vs Desert Vista",
      description:
        "Marcus dominated Friday night with contested catches in double coverage, including a 47-yard touchdown bomb in the 4th quarter to seal the win.",
      stats: ["8 REC", "142 YDS", "2 TD", "17.8 AVG"],
      type: "Game of the Week",
      date: "Mar 1, 2026",
      videoUrl: "#",
      youtubeId: "gc1mfy1UTMA",
    },
  },
  {
    id: 2,
    athlete: "Jasmine Carter",
    school: "Ridgeline Academy",
    sport: "Basketball",
    position: "Point Guard",
    grade: "Senior",
    photo: "/images/athlete-2.jpg",
    slug: "jasmine-carter",
    verified: true,
    highlight: {
      title: "Triple-Double: 22 Pts, 11 Ast, 10 Reb",
      description:
        "Jasmine recorded a rare triple-double in the regional semifinal, controlling the pace and hitting clutch free throws down the stretch.",
      stats: ["22 PTS", "11 AST", "10 REB", "3 STL"],
      type: "Performance of the Week",
      date: "Feb 28, 2026",
      videoUrl: "#",
      youtubeId: "8MIiiOccigg",
    },
  },
  {
    id: 3,
    athlete: "Diego Ramirez",
    school: "Ridgeline Academy",
    sport: "Track & Field",
    position: "Sprinter",
    grade: "Junior",
    photo: "/images/athlete-3.jpg",
    slug: "diego-ramirez",
    verified: true,
    highlight: {
      title: "New PR: 10.89s in the 100m",
      description:
        "Diego dropped his personal record by 0.15 seconds at the East Valley Invitational, putting him in the top 5 for Arizona Division II sprinters.",
      stats: ["10.89s 100M", "22.1s 200M", "PR", "AZ Top 5"],
      type: "Record Breaker",
      date: "Mar 3, 2026",
      videoUrl: "#",
      youtubeId: "TYWP5FtxjZg",
    },
  },
  {
    id: 4,
    athlete: "Alyssa Chen",
    school: "Ridgeline Academy",
    sport: "Soccer",
    position: "Midfielder",
    grade: "Sophomore",
    photo: "/images/athlete-4.jpg",
    slug: "alyssa-chen",
    verified: true,
    highlight: {
      title: "2 Goals, 1 Assist in Regional Championship",
      description:
        "Alyssa scored both goals including the game-winner in extra time, and added an assist to lead Ridgeline to the regional title.",
      stats: ["2 GOL", "1 AST", "87% PASS", "MVP"],
      type: "Clutch Performance",
      date: "Mar 4, 2026",
      videoUrl: "#",
      youtubeId: "TeQtvYzw6ig",
    },
  },
  {
    id: 5,
    athlete: "Tyler Jackson",
    school: "Ridgeline Academy",
    sport: "Football",
    position: "Linebacker",
    grade: "Senior",
    photo: "/images/athlete-2.jpg",
    slug: "tyler-jackson",
    verified: true,
    highlight: {
      title: "12 Tackles, 2 Sacks, Forced Fumble",
      description:
        "Tyler was an absolute force on defense, shutting down the run game and getting to the quarterback twice in a dominant defensive showing.",
      stats: ["12 TKL", "2 SACK", "1 FF", "1 TFL"],
      type: "Defensive Player of the Week",
      date: "Mar 1, 2026",
      videoUrl: "#",
      youtubeId: "BI1pv6YGpP0",
    },
  },
];

const athleteOfTheWeek = weeklyHighlights[0];

const previousWeeks = [
  { week: "Feb 24 – Mar 1", athleteCount: 6, topAthlete: "Jaylen Williams", topStat: "4.35s 40yd PR" },
  { week: "Feb 17 – Feb 23", athleteCount: 5, topAthlete: "Sophia Martinez", topStat: "28 pts, 9 reb" },
  { week: "Feb 10 – Feb 16", athleteCount: 7, topAthlete: "Marcus Thompson", topStat: "156 rec yards" },
];

function HighlightTypeIcon({ type }: { type: string }) {
  switch (type) {
    case "Game of the Week":
      return <Trophy className="h-4 w-4" />;
    case "Performance of the Week":
      return <Star className="h-4 w-4" />;
    case "Record Breaker":
      return <TrendingUp className="h-4 w-4" />;
    case "Clutch Performance":
      return <Zap className="h-4 w-4" />;
    case "Defensive Player of the Week":
      return <Flame className="h-4 w-4" />;
    default:
      return <Trophy className="h-4 w-4" />;
  }
}

export default function HighlightsPage() {
  return (
    <div className="pt-16 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
              <Flame className="h-5 w-5 text-emerald-400" />
            </div>
            <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
              Updated Weekly
            </Badge>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Game{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Highlights
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Every week we spotlight the top performances from verified AthProfile athletes.
            Get featured by keeping your profile active and submitting your game highlights.
          </p>
          <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-emerald-400" />
              Week of Mar 1 – Mar 7, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="h-4 w-4 text-emerald-400" />
              2,847 views this week
            </span>
          </div>
        </div>
      </section>

      {/* Athlete of the Week — Featured */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-400" />
          <h2 className="text-2xl font-bold">Athlete of the Week</h2>
        </div>

        <Card className="overflow-hidden border-emerald-500/20 bg-gradient-to-r from-card via-card to-emerald-500/5">
          <div className="grid md:grid-cols-[320px_1fr]">
            <div className="relative h-72 md:h-full">
              <img
                src={athleteOfTheWeek.photo}
                alt={athleteOfTheWeek.athlete}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-card" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-amber-500 text-black font-semibold gap-1">
                  <Trophy className="h-3 w-3" />
                  Athlete of the Week
                </Badge>
              </div>
            </div>
            <CardContent className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">{athleteOfTheWeek.athlete}</h3>
                {athleteOfTheWeek.verified && (
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {athleteOfTheWeek.school} · {athleteOfTheWeek.sport} · {athleteOfTheWeek.position} · {athleteOfTheWeek.grade}
              </p>
              <h4 className="text-xl font-semibold text-emerald-400 mb-3">
                {athleteOfTheWeek.highlight.title}
              </h4>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {athleteOfTheWeek.highlight.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {athleteOfTheWeek.highlight.stats.map((stat) => (
                  <Badge
                    key={stat}
                    variant="secondary"
                    className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 text-sm font-bold"
                  >
                    {stat}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Link href={`/athletes/${athleteOfTheWeek.slug}`}>
                  <Button className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-white">
                    View Full Profile <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              {athleteOfTheWeek.highlight.youtubeId && (
                <div className="mt-6 aspect-video overflow-hidden rounded-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${athleteOfTheWeek.highlight.youtubeId}`}
                    title={athleteOfTheWeek.highlight.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              )}
            </CardContent>
          </div>
        </Card>
      </section>

      {/* Weekly Highlights Feed */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-emerald-400" />
            <h2 className="text-2xl font-bold">This Week&apos;s Highlights</h2>
          </div>
          <Badge variant="outline" className="text-muted-foreground">
            {weeklyHighlights.length} Athletes Featured
          </Badge>
        </div>

        <div className="space-y-4">
          {weeklyHighlights.slice(1).map((item) => (
            <Card
              key={item.id}
              className="group border-border/40 bg-card/80 transition-all hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative h-48 w-full sm:h-auto sm:w-48 flex-shrink-0">
                  <img
                    src={item.photo}
                    alt={item.athlete}
                    className="h-full w-full object-cover sm:rounded-l-lg"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-black/70 text-white text-xs gap-1 backdrop-blur-sm">
                      <HighlightTypeIcon type={item.highlight.type} />
                      {item.highlight.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="flex-1 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">
                          {item.athlete}
                        </h3>
                        {item.verified && (
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {item.school} · {item.sport} · {item.position} · {item.grade}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground hidden sm:block">{item.highlight.date}</span>
                  </div>

                  <h4 className="mt-3 font-semibold text-emerald-400">{item.highlight.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {item.highlight.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {item.highlight.stats.map((stat) => (
                        <Badge
                          key={stat}
                          variant="secondary"
                          className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs font-bold px-2"
                        >
                          {stat}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href={`/athletes/${item.slug}`}
                      className="flex items-center text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                    >
                      Profile <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                  {item.highlight.youtubeId && (
                    <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                      <iframe
                        src={`https://www.youtube.com/embed/${item.highlight.youtubeId}`}
                        title={item.highlight.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    </div>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Previous Weeks */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold mb-6">Previous Weeks</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {previousWeeks.map((week) => (
            <Card key={week.week} className="border-border/40 bg-card/60 hover:border-emerald-500/20 transition-all cursor-pointer">
              <CardContent className="p-5">
                <p className="text-sm font-medium text-muted-foreground">{week.week}</p>
                <p className="mt-2 font-semibold">{week.topAthlete}</p>
                <p className="text-sm text-emerald-400 font-bold">{week.topStat}</p>
                <p className="mt-2 text-xs text-muted-foreground">{week.athleteCount} athletes featured</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA: Get Featured */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Card className="border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-card to-card overflow-hidden">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20">
              <Zap className="h-7 w-7 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Want to Get Featured?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-4">
              Active AthProfile members get their game highlights showcased to coaches, recruiters,
              and the entire athletic community every week.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Verified athlete badge</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Weekly highlight features</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Coach & recruiter visibility</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Card className="border-border/40 bg-card/80 w-full sm:w-64">
                <CardContent className="p-5 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Profile Setup</p>
                  <p className="text-3xl font-bold">$75</p>
                  <p className="text-xs text-muted-foreground mt-1">one-time</p>
                  <ul className="mt-3 space-y-1.5 text-xs text-left">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" /> Professional profile page</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" /> Verified athletic testing</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" /> Verified badge on profile</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" /> Shareable profile link</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-500/30 bg-emerald-500/5 w-full sm:w-64 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-emerald-500 text-white text-xs">Most Popular</Badge>
                </div>
                <CardContent className="p-5 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Active Membership</p>
                  <p className="text-3xl font-bold text-emerald-400">$8<span className="text-lg text-muted-foreground">/mo</span></p>
                  <p className="text-xs text-muted-foreground mt-1">billed monthly</p>
                  <ul className="mt-3 space-y-1.5 text-xs text-left">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" /> Everything in Setup</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" /> Weekly highlight features</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" /> Priority coach visibility</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" /> Stats update anytime</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" /> Highlight reel submissions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Link href="/onboard">
                <Button size="lg" className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
