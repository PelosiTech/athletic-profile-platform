"use client";
import { useEffect, useRef, useState } from "react";
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
} from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    id: 1,
    athlete: "Marcus Thompson",
    school: "Ridgeline Academy",
    sport: "Football · Wide Receiver · Junior",
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
    sport: "Basketball · Point Guard · Senior",
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
    sport: "Track & Field · Sprinter · Junior",
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
    sport: "Soccer · Midfielder · Sophomore",
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
    sport: "Football · Linebacker · Senior",
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

function HighlightCard({ h, isVisible }: { h: typeof highlights[0]; isVisible: boolean }) {
  return (
    <div className="snap-start">
      {/* Video */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {isVisible ? (
          <iframe
            src={`https://www.youtube.com/embed/${h.youtubeId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0`}
            title={h.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
          />
        ) : (
          /* Thumbnail placeholder until scrolled into view */
          <img
            src={`https://img.youtube.com/vi/${h.youtubeId}/maxresdefault.jpg`}
            alt={h.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      {/* Info bar */}
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-start gap-3">
          <Link href={`/athletes/${h.slug}`}>
            <img
              src={h.photo}
              alt={h.athlete}
              className="h-11 w-11 rounded-full object-cover border-2 border-white/10 flex-shrink-0 hover:border-emerald-500/50 transition-colors"
            />
          </Link>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-[15px] leading-snug mb-1">{h.title}</p>
            <div className="flex items-center gap-2 mb-2">
              <Link href={`/athletes/${h.slug}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                <span className="text-white/60 text-sm">{h.athlete}</span>
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
              </Link>
              <span className="text-white/20">·</span>
              <span className="text-white/40 text-xs">{h.school}</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className={`${h.badgeColor} text-[10px] gap-1 px-2 py-0.5`}>
                <h.badgeIcon className="h-2.5 w-2.5" />
                {h.badge}
              </Badge>
              {h.stats.map((s) => (
                <span key={s} className="text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  {s}
                </span>
              ))}
              <Link
                href={`/athletes/${h.slug}`}
                className="text-xs text-white/30 hover:text-emerald-400 transition-colors ml-auto flex items-center gap-0.5"
              >
                Full Profile <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-white/5" />
    </div>
  );
}

export default function HighlightsPage() {
  const [visibleIds, setVisibleIds] = useState<Set<number>>(new Set([1]));
  const observerRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const next = new Set(visibleIds);
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute("data-id"));
          if (entry.isIntersecting) {
            next.add(id);
          } else {
            next.delete(id);
          }
        });
        setVisibleIds(next);
      },
      { threshold: 0.4 }
    );

    observerRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header */}
      <div className="px-4 sm:px-6 py-5 flex items-center gap-2 max-w-3xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <Flame className="h-4 w-4 text-emerald-400" />
          <span className="text-white font-bold text-sm">Weekly Highlights</span>
        </div>
        <span className="text-white/20 text-xs ml-auto">Scroll to watch</span>
      </div>

      {/* Feed */}
      <div className="max-w-3xl mx-auto snap-y snap-mandatory">
        {highlights.map((h) => (
          <div
            key={h.id}
            ref={(el) => { if (el) observerRefs.current.set(h.id, el); }}
            data-id={h.id}
          >
            <HighlightCard h={h} isVisible={visibleIds.has(h.id)} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
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
      </div>
    </div>
  );
}
