"use client";
import { useState } from "react";
import Link from "next/link";
import { athletes } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, GraduationCap, Filter } from "lucide-react";

const allSports = Array.from(new Set(athletes.flatMap((a) => a.sports.map((s) => s.sport))));
const allSchools = Array.from(new Set(athletes.map((a) => a.school)));
const allGrades = ["Freshman", "Sophomore", "Junior", "Senior"];

export default function AthletesDirectory() {
  const [search, setSearch] = useState("");
  const [sportFilter, setSportFilter] = useState("");
  const [schoolFilter, setSchoolFilter] = useState("");
  const [gradeFilter, setGradeFilter] = useState("");

  const filtered = athletes.filter((a) => {
    const matchSearch =
      !search ||
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.school.toLowerCase().includes(search.toLowerCase());
    const matchSport = !sportFilter || a.sports.some((s) => s.sport === sportFilter);
    const matchSchool = !schoolFilter || a.school === schoolFilter;
    const matchGrade = !gradeFilter || a.grade === gradeFilter;
    return matchSearch && matchSport && matchSchool && matchGrade;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold sm:text-4xl">Athletes Directory</h1>
        <p className="mt-2 text-muted-foreground">
          Browse and discover student athletes. Click a profile to see their full stats, academics, and highlights.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search athletes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <select
          value={sportFilter}
          onChange={(e) => setSportFilter(e.target.value)}
          className="h-10 rounded-md border border-input bg-background px-3 text-sm"
        >
          <option value="">All Sports</option>
          {allSports.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          value={schoolFilter}
          onChange={(e) => setSchoolFilter(e.target.value)}
          className="h-10 rounded-md border border-input bg-background px-3 text-sm"
        >
          <option value="">All Schools</option>
          {allSchools.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          value={gradeFilter}
          onChange={(e) => setGradeFilter(e.target.value)}
          className="h-10 rounded-md border border-input bg-background px-3 text-sm"
        >
          <option value="">All Grades</option>
          {allGrades.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      <p className="mb-4 text-sm text-muted-foreground">{filtered.length} athletes found</p>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((a) => (
          <Link key={a.id} href={`/athletes/${a.id}`}>
            <Card className="group h-full border-border/40 bg-card/60 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
              {/* Banner */}
              <div className={`h-28 rounded-t-lg bg-gradient-to-r ${a.bannerGradient} relative`}>
                <div className="absolute -bottom-8 left-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-card bg-gradient-to-br from-primary/30 to-primary/10 shadow-lg">
                    <span className="text-lg font-bold text-primary">
                      {a.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                </div>
              </div>
              <CardContent className="pt-12 pb-4 px-4">
                <h3 className="font-semibold group-hover:text-primary transition-colors">{a.name}</h3>
                <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {a.school}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {a.sports.map((s) => (
                    <Badge key={s.sport} variant="secondary" className="text-xs">
                      {s.sport}
                    </Badge>
                  ))}
                  <Badge variant="outline" className="text-xs">
                    {a.grade}
                  </Badge>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-sm font-bold">{a.gpa.toFixed(1)}</p>
                    <p className="text-[10px] text-muted-foreground">GPA</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{a.height}</p>
                    <p className="text-[10px] text-muted-foreground">Height</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{a.weight}</p>
                    <p className="text-[10px] text-muted-foreground">Weight</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
