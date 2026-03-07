"use client";
import { useState } from "react";
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
} from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    id: 1,
    athlete: "Marcus Thompson",
    school: "Ridgeline Academy",
    sport: "Football · Wide Receiver",
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
    sport: "Basketball · Point Guard",
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
    sport: "Track & Field · Sprinter",
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
    sport: "Soccer · Midfielder",
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
    sport: "Football · Linebacker",
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

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* ===== HERO VIDEO ===== */}
      <section className="relative w-full">
        {/* Video container — 16:9 aspect ratio, nice and big */}
        <div className="relative w-full" style={{ paddingBottom: "50%" }}>
          <iframe
            key={active.youtubeId + muted}
            src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${active.youtubeId}`}
            title={active.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
          />

          {/* Bottom gradient only — keeps video visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

          {/* Now Playing — top left */}
          <div className="absolute top-4 left-4 sm:left-6 z-10">
            <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Now Playing
            </div>
          </div>

          {/* Mute button — top right */}
          <div className="absolute top-4 right-4 sm:right-6 z-10">
            <button
              onClick={() => setMuted(!muted)}
              className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 hover:bg-black/70 transition-colors"
            >
              {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
              {muted ? "Unmute" : "Mute"}
            </button>
          </div>

          {/* Athlete overlay — compact, bottom left */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 sm:px-6 sm:pb-5 z-10">
            <div className="flex items-end justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={active.photo}
                  alt={active.athlete}
                  className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-sm sm:text-base">{active.athlete}</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <Badge className={`${active.badgeColor} text-[10px] gap-1 px-1.5 py-0`}>
                      <active.badgeIcon className="h-2.5 w-2.5" />
                      {active.badge}
                    </Badge>
                  </div>
                  <span className="text-white/50 text-xs">{active.school} · {active.sport}</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                {active.stats.map((s) => (
                  <span key={s} className="bg-white/10 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VERTICAL FEED ===== */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-2 mb-5">
          <Flame className="h-5 w-5 text-emerald-400" />
          <h2 className="text-base font-bold text-white">This Week&apos;s Highlights</h2>
        </div>

        <div className="space-y-3">
          {highlights.map((h, i) => (
            <button
              key={h.id}
              onClick={() => { setActiveIndex(i); setMuted(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all text-left ${
                i === activeIndex
                  ? "bg-emerald-500/10 ring-1 ring-emerald-500/30"
                  : "bg-white/[0.03] hover:bg-white/[0.06] ring-1 ring-white/5 hover:ring-white/10"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative flex-shrink-0 w-28 sm:w-36 rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={`https://img.youtube.com/vi/${h.youtubeId}/mqdefault.jpg`}
                  alt={h.athlete}
                  className="w-full h-full object-cover"
                />
                {i === activeIndex && (
                  <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                    <span className="flex items-center gap-1 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                      </span>
                      PLAYING
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <img src={h.photo} alt="" className="h-6 w-6 rounded-full object-cover border border-white/20" />
                  <span className={`text-sm font-semibold ${i === activeIndex ? "text-emerald-400" : "text-white"}`}>
                    {h.athlete}
                  </span>
                  <CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                </div>
                <p className="text-white/70 text-xs sm:text-sm truncate mb-1.5">{h.title}</p>
                <div className="flex items-center gap-2">
                  <Badge className={`${h.badgeColor} text-[9px] gap-0.5 px-1.5 py-0`}>
                    <h.badgeIcon className="h-2 w-2" />
                    {h.badge}
                  </Badge>
                  <span className="text-white/30 text-[10px]">{h.school}</span>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight className={`h-4 w-4 flex-shrink-0 ${i === activeIndex ? "text-emerald-400" : "text-white/20"}`} />
            </button>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <div className="text-center rounded-2xl bg-white/[0.03] border border-white/5 p-8">
          <Zap className="mx-auto mb-3 h-7 w-7 text-emerald-400" />
          <h2 className="text-xl font-bold text-white mb-2">Want to Be Featured?</h2>
          <p className="text-white/40 text-sm mb-5">Create your profile, upload highlights, get seen by coaches.</p>
          <Link href="/onboard">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
              Get Started Free <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
