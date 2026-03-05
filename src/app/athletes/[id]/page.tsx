"use client";
import { useParams } from "next/navigation";
import { getAthlete, athletes } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Share2,
  MapPin,
  GraduationCap,
  Trophy,
  Dumbbell,
  Heart,
  Mail,
  Phone,
  ExternalLink,
  Timer,
  Target,
  Gauge,
  ArrowUp,
  User,
  CheckCircle2,
  Play,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function MetricCard({
  label,
  value,
  icon: Icon,
  percentile,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
  percentile?: number;
}) {
  return (
    <Card className="border-border/40 bg-card/80">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          {percentile && (
            <Badge variant="secondary" className="text-xs">
              Top {percentile}%
            </Badge>
          )}
        </div>
        <p className="mt-3 text-2xl font-bold">{value}</p>
        <p className="text-xs text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}

function StatBar({ label, value, max, unit }: { label: string; value: number; max: number; unit: string }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-semibold">
          {value} {unit}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function AthleteProfile() {
  const params = useParams();
  const athlete = getAthlete(params.id as string);
  const [copied, setCopied] = useState(false);

  if (!athlete) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Athlete Not Found</h1>
          <p className="mt-2 text-muted-foreground">This profile doesn&apos;t exist or has been removed.</p>
          <Link href="/athletes">
            <Button className="mt-4">Browse Athletes</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pb-20">
      {/* Hero Banner */}
      <div className={`relative h-72 bg-gradient-to-r ${athlete.bannerGradient} sm:h-96`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/60 to-transparent h-40" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Profile header */}
        <div className="-mt-36 relative z-10 sm:-mt-44">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end">
            {/* Avatar */}
            <div className="h-56 w-44 overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:h-72 sm:w-56">
              {athlete.photo ? (
                <img src={athlete.photo} alt={athlete.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/30 to-primary/10">
                  <span className="text-5xl font-bold text-primary">
                    {athlete.name.split(" ").map((n: string) => n[0]).join("")}
                  </span>
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold sm:text-4xl">{athlete.name}</h1>
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {athlete.school}
                <span className="text-border">•</span>
                {athlete.sports.map((s) => `${s.sport} — ${s.position}`).join(", ")}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {athlete.sports.map((s) => (
                  <Badge key={s.sport} className="bg-primary/10 text-primary border-primary/20">
                    {s.sport}
                  </Badge>
                ))}
                <Badge variant="outline">{athlete.grade} ({athlete.gradeNum}th Grade)</Badge>
                <Badge variant="outline">Class of {2026 + (12 - athlete.gradeNum)}</Badge>
              </div>
            </div>

            <Button onClick={handleShare} variant="outline" className="gap-2 shrink-0">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Share Profile"}
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[
            { label: "Age", value: `${athlete.age}` },
            { label: "Grade", value: athlete.grade },
            { label: "Height", value: athlete.height },
            { label: "Weight", value: athlete.weight },
            { label: "GPA", value: athlete.gpa.toFixed(1) },
          ].map((s) => (
            <Card key={s.label} className="border-border/40 bg-card/60">
              <CardContent className="p-4 text-center">
                <p className="text-xl font-bold sm:text-2xl">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Left: Main content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Athletic Metrics */}
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  Athletic Testing Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-0">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {athlete.metrics.fortyYard && (
                    <MetricCard label="40 Yard Dash" value={athlete.metrics.fortyYard} icon={Timer} percentile={25} />
                  )}
                  {athlete.metrics.benchPress && (
                    <MetricCard label="Bench Press" value={athlete.metrics.benchPress} icon={Dumbbell} />
                  )}
                  {athlete.metrics.squat && (
                    <MetricCard label="Squat" value={athlete.metrics.squat} icon={Dumbbell} percentile={15} />
                  )}
                  {athlete.metrics.powerClean && (
                    <MetricCard label="Power Clean" value={athlete.metrics.powerClean} icon={Gauge} />
                  )}
                  {athlete.metrics.deadlift && (
                    <MetricCard label="Deadlift" value={athlete.metrics.deadlift} icon={Dumbbell} />
                  )}
                  {athlete.metrics.verticalJump && (
                    <MetricCard label="Vertical Jump" value={athlete.metrics.verticalJump} icon={ArrowUp} percentile={20} />
                  )}
                  {athlete.metrics.pullUps !== undefined && (
                    <MetricCard label="Pull Ups" value={`${athlete.metrics.pullUps} reps`} icon={Target} />
                  )}
                  {athlete.metrics.mileTime && (
                    <MetricCard label="Mile Time" value={athlete.metrics.mileTime} icon={Timer} />
                  )}
                  {athlete.metrics.shuttleRun && (
                    <MetricCard label="Shuttle Run" value={athlete.metrics.shuttleRun} icon={Timer} />
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Strength Bars */}
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Trophy className="h-5 w-5 text-primary" />
                  Strength Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {athlete.metrics.benchPress && (
                  <StatBar label="Bench Press" value={parseInt(athlete.metrics.benchPress)} max={315} unit="lbs" />
                )}
                {athlete.metrics.squat && (
                  <StatBar label="Squat" value={parseInt(athlete.metrics.squat)} max={500} unit="lbs" />
                )}
                {athlete.metrics.deadlift && (
                  <StatBar label="Deadlift" value={parseInt(athlete.metrics.deadlift)} max={500} unit="lbs" />
                )}
                {athlete.metrics.powerClean && (
                  <StatBar label="Power Clean" value={parseInt(athlete.metrics.powerClean)} max={350} unit="lbs" />
                )}
              </CardContent>
            </Card>

            {/* Media / Highlights */}
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Play className="h-5 w-5 text-primary" />
                  Highlights & Media
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    "Game Highlights Reel",
                    "40 Yard Dash",
                    "Combine Testing",
                    "Season Highlights",
                    "Practice Clips",
                    "Team Celebration",
                  ].map((title, i) => (
                    <div
                      key={i}
                      className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-secondary to-secondary/50 cursor-pointer transition-all hover:ring-2 hover:ring-primary/50"
                    >
                      <Play className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                        <p className="text-xs font-medium">{title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personal Profile */}
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Heart className="h-5 w-5 text-primary" />
                  Personal Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Goal</h4>
                  <p className="text-sm leading-relaxed">{athlete.personal.goal}</p>
                </div>
                <Separator className="bg-border/40" />
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Role Model</h4>
                  <p className="text-sm">{athlete.personal.roleModel}</p>
                </div>
                <Separator className="bg-border/40" />
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Hobbies & Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {athlete.personal.hobbies.map((h) => (
                      <Badge key={h} variant="secondary">{h}</Badge>
                    ))}
                  </div>
                </div>
                <Separator className="bg-border/40" />
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Leadership & Activities</h4>
                  <ul className="space-y-2">
                    {athlete.personal.leadership.map((l) => (
                      <li key={l} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Academic Profile */}
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Academics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{athlete.academics.gpa.toFixed(1)}</p>
                  <p className="text-xs text-muted-foreground">Cumulative GPA</p>
                </div>
                <Separator className="bg-border/40" />
                {athlete.academics.satScore && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">SAT Score</span>
                    <span className="font-semibold">{athlete.academics.satScore}</span>
                  </div>
                )}
                {athlete.academics.actScore && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ACT Score</span>
                    <span className="font-semibold">{athlete.academics.actScore}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Intended Study</span>
                  <span className="font-semibold text-right">{athlete.academics.intendedStudy}</span>
                </div>
                <Separator className="bg-border/40" />
                <div>
                  <p className="mb-2 text-sm font-semibold text-muted-foreground">Honors & AP Courses</p>
                  <div className="flex flex-wrap gap-1.5">
                    {athlete.academics.honors.map((h) => (
                      <Badge key={h} variant="outline" className="text-xs">
                        {h}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sports */}
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Trophy className="h-5 w-5 text-primary" />
                  Sports
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {athlete.sports.map((s) => (
                  <div key={s.sport} className="flex items-center justify-between rounded-lg bg-secondary/50 p-3">
                    <span className="text-sm font-medium">{s.sport}</span>
                    <Badge variant="secondary" className="text-xs">{s.position}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact / Recruiting */}
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{athlete.contact.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{athlete.contact.phone}</span>
                </div>
                {athlete.contact.twitter && (
                  <div className="flex items-center gap-3 text-sm">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <span>{athlete.contact.twitter}</span>
                  </div>
                )}
                {athlete.contact.hudl && (
                  <div className="flex items-center gap-3 text-sm">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <span>{athlete.contact.hudl}</span>
                  </div>
                )}
                <Separator className="bg-border/40" />
                <Button className="w-full gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Athlete
                </Button>
              </CardContent>
            </Card>

            {/* School Info */}
            <Card className="border-border/40 bg-primary/5">
              <CardContent className="p-4 text-center">
                <MapPin className="mx-auto mb-2 h-5 w-5 text-primary" />
                <p className="font-semibold">{athlete.school}</p>
                <p className="text-xs text-muted-foreground">Phoenix, Arizona</p>
                <Badge className="mt-2 bg-primary/10 text-primary border-primary/20">
                  <CheckCircle2 className="mr-1 h-3 w-3" /> Verified School
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
