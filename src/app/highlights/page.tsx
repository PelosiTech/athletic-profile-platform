"use client";
import { useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Flame,
  Star,
  CheckCircle2,
  TrendingUp,
  Zap,
  ArrowRight,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    id: 1,
    athlete: "Marcus Thompson",
    school: "Ridgeline Academy",
    sport: "Football",
    position: "Wide Receiver",
    grade: "Junior",
    photo: "/images/athlete-1.jpg",
    slug: "marcus-thompson",
    title: "8 Catches, 142 Yards, 2 TDs vs Desert Vista",
    stats: ["8 REC", "142 YDS", "2 TD"],
    badge: "Athlete of the Week",
    badgeColor: "bg-amber-500 text-black",
    badgeIcon: Trophy,
    youtubeId: "gc1mfy1UTMA",
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
    title: "Triple-Double: 22 Pts, 11 Ast, 10 Reb",
    stats: ["22 PTS", "11 AST", "10 REB"],
    badge: "Performance of the Week",
    badgeColor: "bg-emerald-500 text-white",
    badgeIcon: Star,
    youtubeId: "8MIiiOccigg",
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
    title: "New PR: 10.89s in the 100m",
    stats: ["10.89s", "PR", "AZ Top 5"],
    badge: "Record Breaker",
    badgeColor: "bg-blue-500 text-white",
    badgeIcon: TrendingUp,
    youtubeId: "TYWP5FtxjZg",
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
    title: "2 Goals, 1 Assist — Regional Championship MVP",
    stats: ["2 GOL", "1 AST", "MVP"],
    badge: "Clutch Performance",
    badgeColor: "bg-purple-500 text-white",
    badgeIcon: Zap,
    youtubeId: "TeQtvYzw6ig",
  },
  {
    id: 5,
    athlete: "Tyler Jackson",
    school: "Scottsdale Prep",
    sport: "Football",
    position: "Linebacker",
    grade: "Senior",
    photo: "/images/athlete-2.jpg",
    slug: "tyler-jackson",
    title: "12 Tackles, 2 Sacks, Forced Fumble",
    stats: ["12 TKL", "2 SACK", "1 FF"],
    badge: "Defensive POW",
    badgeColor: "bg-red-500 text-white",
    badgeIcon: Flame,
    youtubeId: "BI1pv6YGpP0",
  },
];

export default function HighlightsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const active = highlights[activeIndex];

  const scrollRow = useCallback((dir: "left" | "right") => {
    const el = document.getElementById("hl-row");
    if (el) el.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* ===== HERO VIDEO — full viewport height ===== */}
      <section className="relative w-full" style={{ height: "85vh", minHeight: 480 }}>
        {/* YouTube iframe — autoplay muted */}
        <div className="absolute inset-0">
          <iframe
            key={active.youtubeId + muted}
            src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${active.youtubeId}`}
            title={active.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            style={{ border: 0 }}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent pointer-events-none" />

        {/* Content overlay — bottom left */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14 z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <Badge className={`${active.badgeColor} mb-3 gap-1.5 px-3 py-1 text-xs font-bold`}>
              <active.badgeIcon className="h-3 w-3" />
              {active.badge}
            </Badge>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3 drop-shadow-lg">
              {active.title}
            </h1>

            {/* Athlete info */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={active.photo}
                alt={active.athlete}
                className="h-10 w-10 rounded-full object-cover border-2 border-white/30"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">{active.athlete}</span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-white/60 text-sm">
                  {active.school} · {active.sport} · {active.position}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-2 mb-5">
              {active.stats.map((s) => (
                <span
                  key={s}
                  className="bg-white/10 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full border border-white/10"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link href={`/athletes/${active.slug}`}>
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2 font-semibold">
                  View Profile <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 gap-2"
                onClick={() => setMuted(!muted)}
              >
                {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                {muted ? "Unmute" : "Mute"}
              </Button>
            </div>
          </div>
        </div>

        {/* "Now Playing" top bar */}
        <div className="absolute top-20 left-6 sm:left-10 z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            Now Playing — Weekly Highlights
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ROW — Netflix style ===== */}
      <section className="relative bg-black px-6 sm:px-10 py-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-emerald-400" />
            <h2 className="text-lg font-bold text-white">This Week&apos;s Highlights</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollRow("left")}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollRow("right")}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          id="hl-row"
          className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {highlights.map((h, i) => (
            <button
              key={h.id}
              onClick={() => { setActiveIndex(i); setMuted(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className={`flex-shrink-0 group relative rounded-xl overflow-hidden transition-all duration-300 ${
                i === activeIndex
                  ? "ring-2 ring-emerald-500 scale-105"
                  : "ring-1 ring-white/10 hover:ring-white/30 hover:scale-[1.02]"
              }`}
              style={{ width: 280, height: 158 }}
            >
              {/* Thumbnail — YouTube thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${h.youtubeId}/mqdefault.jpg`}
                alt={h.athlete}
                className="w-full h-full object-cover"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Now playing indicator */}
              {i === activeIndex && (
                <div className="absolute top-2 left-2">
                  <span className="flex items-center gap-1.5 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                    </span>
                    NOW PLAYING
                  </span>
                </div>
              )}

              {/* Badge */}
              {i !== activeIndex && (
                <div className="absolute top-2 left-2">
                  <Badge className={`${h.badgeColor} text-[10px] gap-1 px-1.5 py-0.5`}>
                    <h.badgeIcon className="h-2.5 w-2.5" />
                    {h.badge}
                  </Badge>
                </div>
              )}

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <img src={h.photo} alt="" className="h-6 w-6 rounded-full object-cover border border-white/30" />
                  <span className="text-white text-sm font-semibold truncate">{h.athlete}</span>
                  <CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                </div>
                <p className="text-white/70 text-xs truncate">{h.title}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-black px-6 sm:px-10 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
              <Zap className="h-6 w-6 text-emerald-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Want to Be Featured?</h2>
          <p className="text-white/50 mb-6">
            Create your profile, upload your highlights, get seen by coaches.
          </p>
          <Link href="/onboard">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
              Get Started Free <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
