"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  User,
  Dumbbell,
  GraduationCap,
  Heart,
  Upload,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Zap,
} from "lucide-react";

const steps = [
  { num: 1, label: "Basic Info", icon: User },
  { num: 2, label: "Metrics", icon: Dumbbell },
  { num: 3, label: "Academics", icon: GraduationCap },
  { num: 4, label: "Personal", icon: Heart },
  { num: 5, label: "Media", icon: Upload },
];

const sports = ["Football", "Basketball", "Soccer", "Track & Field", "Baseball", "Volleyball", "Swimming", "Wrestling", "Tennis", "Cross Country"];

export default function Onboard() {
  const [step, setStep] = useState(1);
  const progress = (step / 5) * 100;

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-2xl font-bold">Create Your Profile</h1>
          <span className="text-sm text-muted-foreground">Step {step} of 5</span>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="mt-4 flex justify-between">
          {steps.map((s) => (
            <button
              key={s.num}
              onClick={() => setStep(s.num)}
              className={`flex flex-col items-center gap-1 text-xs transition-colors ${
                s.num <= step ? "text-primary" : "text-muted-foreground/50"
              }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all ${
                  s.num < step
                    ? "border-primary bg-primary text-primary-foreground"
                    : s.num === step
                    ? "border-primary bg-primary/10"
                    : "border-border bg-background"
                }`}
              >
                {s.num < step ? <CheckCircle2 className="h-4 w-4" /> : <s.icon className="h-3.5 w-3.5" />}
              </div>
              <span className="hidden sm:block">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step content */}
      <Card className="border-border/40">
        {step === 1 && (
          <>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Tell us about yourself. This info will appear on your public profile.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">First Name</label>
                  <Input placeholder="Marcus" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Last Name</label>
                  <Input placeholder="Thompson" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Age</label>
                  <Input type="number" placeholder="16" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Grade</label>
                  <select className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                    <option>Freshman (9th)</option>
                    <option>Sophomore (10th)</option>
                    <option selected>Junior (11th)</option>
                    <option>Senior (12th)</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Graduation Year</label>
                  <Input placeholder="2027" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Height</label>
                  <Input placeholder={`5'11"`} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Weight (lbs)</label>
                  <Input type="number" placeholder="175" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">School</label>
                <Input placeholder="Ridgeline Academy" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Sports (select all that apply)</label>
                <div className="flex flex-wrap gap-2">
                  {sports.map((s) => (
                    <Badge
                      key={s}
                      variant="outline"
                      className="cursor-pointer px-3 py-1.5 hover:bg-primary/10 hover:border-primary/30 transition-colors"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </>
        )}

        {step === 2 && (
          <>
            <CardHeader>
              <CardTitle>Athletic Testing Metrics</CardTitle>
              <CardDescription>Enter your most recent testing numbers. You can update these anytime.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">40 Yard Dash (seconds)</label>
                  <Input type="number" step="0.01" placeholder="4.62" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Vertical Jump (inches)</label>
                  <Input type="number" placeholder="32" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Bench Press (lbs)</label>
                  <Input type="number" placeholder="185" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Squat (lbs)</label>
                  <Input type="number" placeholder="315" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Power Clean (lbs)</label>
                  <Input type="number" placeholder="205" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Deadlift (lbs)</label>
                  <Input type="number" placeholder="345" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Pull Ups (reps)</label>
                  <Input type="number" placeholder="14" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Shuttle Run (seconds)</label>
                  <Input type="number" step="0.01" placeholder="4.30" />
                </div>
              </div>
            </CardContent>
          </>
        )}

        {step === 3 && (
          <>
            <CardHeader>
              <CardTitle>Academic Profile</CardTitle>
              <CardDescription>Coaches recruit student-athletes. Your academics matter.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Cumulative GPA</label>
                  <Input type="number" step="0.1" placeholder="3.7" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">GPA Scale</label>
                  <select className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                    <option>4.0 Unweighted</option>
                    <option>4.0 Weighted</option>
                    <option>5.0 Weighted</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">SAT Score (optional)</label>
                  <Input type="number" placeholder="1180" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">ACT Score (optional)</label>
                  <Input type="number" placeholder="26" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Intended Field of Study</label>
                <Input placeholder="Sports Management" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Honors & AP Courses (one per line)</label>
                <textarea
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder={"AP English Language\nHonors Chemistry\nAP US History"}
                />
              </div>
            </CardContent>
          </>
        )}

        {step === 4 && (
          <>
            <CardHeader>
              <CardTitle>Personal Profile</CardTitle>
              <CardDescription>Help coaches get to know you beyond the numbers.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Your Goal</label>
                <textarea
                  className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Play college football at a D1 program and earn a degree in Sports Management"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Role Model</label>
                <Input placeholder="Larry Fitzgerald" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Hobbies & Interests (comma-separated)</label>
                <Input placeholder="Film study, mentoring younger athletes, community service" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Leadership & Activities (one per line)</label>
                <textarea
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder={"Team Captain — Varsity Football\nPeer Mentor — Athlete Program\nVolunteer Coach — Youth League"}
                />
              </div>
            </CardContent>
          </>
        )}

        {step === 5 && (
          <>
            <CardHeader>
              <CardTitle>Media & Highlights</CardTitle>
              <CardDescription>Upload your best photos, game film, and highlight reels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">Profile Photo</label>
                <div className="flex h-40 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-border hover:border-primary/50 transition-colors">
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Click or drag to upload</p>
                    <p className="text-xs text-muted-foreground/60">PNG, JPG up to 5MB</p>
                  </div>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Highlight Videos</label>
                <div className="flex h-32 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-border hover:border-primary/50 transition-colors">
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Upload video files or paste Hudl/YouTube links</p>
                  </div>
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Hudl Profile Link (optional)</label>
                <Input placeholder="https://www.hudl.com/profile/..." />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">YouTube Highlight Link (optional)</label>
                <Input placeholder="https://youtube.com/watch?v=..." />
              </div>
            </CardContent>
          </>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-border/40 p-6">
          <Button
            variant="outline"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          {step < 5 ? (
            <Button onClick={() => setStep(step + 1)} className="gap-2">
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button className="gap-2 bg-green-600 hover:bg-green-700">
              <CheckCircle2 className="h-4 w-4" /> Complete Profile
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
