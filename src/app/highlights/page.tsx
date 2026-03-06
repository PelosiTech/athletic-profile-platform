"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Flame,
  Star,
  CheckCircle2,
  TrendingUp,
  Zap,
  Calendar,
  Eye,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

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
      stats: ["8 REC", "142 YDS", "2 TD", "17.8 AVG"],
      type: "Game of the Week",
      date: "Mar 1, 2026",
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
      stats: ["22 PTS", "11 AST", "10 REB", "3 STL"],
      type: "Performance of the Week",
      date: "Feb 28, 2026",
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
      stats: ["10.89s 100M", "22.1s 200M", "PR", "AZ Top 5"],
      type: "Record Breaker",
      date: "Mar 3, 2026",
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
      stats: ["2 GOL", "1 AST", "87% PASS", "MVP"],
      type: "Clutch Performance",
      date: "Mar 4, 2026",
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
      stats: ["12 TKL", "2 SACK", "1 FF", "1 TFL"],
      type: "Defensive Player of the Week",
      date: "Mar 1, 2026",
      youtubeId: "BI1pv6YGpP0",
    },
  },
];

const featured = weeklyHighlights[0];

function TypeIcon({ type }: { type: string }) {
  switch (type) {
    case "Game of the Week":
      return <Trophy className="h-3.5 w-3.5" />;
    case "Performance of the Week":
      return <Star className="h-3.5 w-3.5" />;
    case "Record Breaker":
      return <TrendingUp className="h-3.5 w-3.5" />;
    case "Clutch Performance":
      return <Zap className="h-3.5 w-3.5" />;
    case "Defensive Player of the Week":
      return <Flame className="h-3.5 w-3.5" />;
    default:
      return <Trophy className="h-3.5 w-3.5" />;
  }
}

export default function HighlightsPage() {
  return (
    <div className="pt-16 pb-20">
      {/* Hero header */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-background to-background" />
        <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 border-emerald-500/30 text-emerald-400">
            <Flame className="mr-1.5 h-3.5 w-3.5" /> Updated Weekly
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Game{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Highlights
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            The best plays from verified AthProfile athletes, every week.
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-emerald-400" />
              Mar 1 – Mar 7, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="h-4 w-4 text-emerald-400" />
              2,847 views
            </span>
          </div>
        </div>
      </section>

      {/* Featured Highlight — VIDEO FIRST */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-400" />
          <h2 className="text-lg font-bold">Highlight of the Week</h2>
        </div>

        {/* Big video */}
        <div className="aspect-video overflow-hidden rounded-xl border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
          <iframe
            src={`https://www.youtube.com/embed/${featured.highlight.youtubeId}?rel=0`}
            title={featured.highlight.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>

        {/* Athlete info bar underneath */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={featured.photo}
              alt={featured.athlete}
              className="h-12 w-12 rounded-full object-cover border-2 border-emerald-500/30"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg">{featured.athlete}</h3>
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-xs gap-1">
                  <Trophy className="h-3 w-3" /> Athlete of the Week
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {featured.school} · {featured.sport} · {featured.position} · {featured.grade}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-wrap gap-1.5">
              {featured.highlight.stats.map((s) => (
                <Badge key={s} variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs font-bold">
                  {s}
                </Badge>
              ))}
            </div>
            <Link href={`/athletes/${featured.slug}`}>
              <Button size="sm" variant="outline" className="gap-1 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 ml-2">
                View Profile <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of highlights — video-first cards */}
      <section className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-emerald-400" />
            <h2 className="text-lg font-bold">This Week</h2>
          </div>
          <Badge variant="outline" className="text-muted-foreground text-xs">
            {weeklyHighlights.length} Featured
          </Badge>
        </div>

        <div className="space-y-8">
          {weeklyHighlights.slice(1).map((item) => (
            <div key={item.id}>
              {/* Video */}
              <div className="aspect-video overflow-hidden rounded-xl border border-border/40">
                <iframe
                  src={`https://www.youtube.com/embed/${item.highlight.youtubeId}?rel=0`}
                  title={item.highlight.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              {/* Info bar below video */}
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.photo}
                    alt={item.athlete}
                    className="h-10 w-10 rounded-full object-cover border border-border/40"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{item.athlete}</h3>
                      {item.verified && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />}
                      <Badge variant="outline" className="text-[10px] gap-1 px-1.5 py-0.5 border-border/40">
                        <TypeIcon type={item.highlight.type} />
                        {item.highlight.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {item.school} · {item.sport} · {item.position} · {item.grade}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex flex-wrap gap-1">
                    {item.highlight.stats.map((s) => (
                      <Badge key={s} variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] font-bold px-1.5">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/athletes/${item.slug}`} className="flex items-center text-xs text-emerald-400 hover:text-emerald-300 font-medium whitespace-nowrap ml-1">
                    Full Profile <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <Card className="border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-card to-card">
          <CardContent className="p-8 text-center">
            <Zap className="mx-auto mb-3 h-8 w-8 text-emerald-400" />
            <h2 className="text-2xl font-bold mb-2">Want to Get Featured?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Create your AthProfile, upload your highlights, and get seen by coaches every week.
            </p>
            <Link href="/onboard">
              <Button size="lg" className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-white">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
