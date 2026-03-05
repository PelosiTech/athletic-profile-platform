"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  User,
  Dumbbell,
  Upload,
  Share2,
  Eye,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Bell,
  Settings,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const recentViews = [
  { name: "Coach Martinez", school: "ASU", time: "2 hours ago" },
  { name: "Coach Johnson", school: "U of A", time: "5 hours ago" },
  { name: "Scout Wilson", school: "NAU", time: "1 day ago" },
  { name: "Coach Davis", school: "GCU", time: "2 days ago" },
  { name: "Coach Lee", school: "USC", time: "3 days ago" },
];

const actions = [
  {
    icon: User,
    title: "Edit Profile",
    desc: "Update your bio, photos, and personal info",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Dumbbell,
    title: "Update Metrics",
    desc: "Add new testing results and PRs",
    color: "from-orange-500/20 to-orange-600/10",
  },
  {
    icon: Upload,
    title: "Upload Media",
    desc: "Add highlights, game film, and photos",
    color: "from-green-500/20 to-green-600/10",
  },
  {
    icon: Share2,
    title: "Share Profile",
    desc: "Get your link to send to coaches",
    color: "from-purple-500/20 to-purple-600/10",
  },
];

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Marcus</h1>
          <p className="text-muted-foreground">Here&apos;s an overview of your athletic profile.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Bell className="h-4 w-4" />
            <Badge className="h-5 w-5 p-0 text-[10px]">3</Badge>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="h-4 w-4" /> Settings
          </Button>
          <Link href="/athletes/marcus-thompson">
            <Button size="sm" className="gap-2">
              <ExternalLink className="h-4 w-4" /> View Profile
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats row */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border/40">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <Eye className="h-5 w-5 text-muted-foreground" />
              <Badge variant="secondary" className="text-xs text-green-400">+24%</Badge>
            </div>
            <p className="mt-2 text-3xl font-bold">1,247</p>
            <p className="text-xs text-muted-foreground">Profile Views (30 days)</p>
          </CardContent>
        </Card>
        <Card className="border-border/40">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <Share2 className="h-5 w-5 text-muted-foreground" />
              <Badge variant="secondary" className="text-xs text-green-400">+12%</Badge>
            </div>
            <p className="mt-2 text-3xl font-bold">86</p>
            <p className="text-xs text-muted-foreground">Link Shares</p>
          </CardContent>
        </Card>
        <Card className="border-border/40">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <TrendingUp className="h-5 w-5 text-muted-foreground" />
              <Badge variant="secondary" className="text-xs text-blue-400">Top 15%</Badge>
            </div>
            <p className="mt-2 text-3xl font-bold">42</p>
            <p className="text-xs text-muted-foreground">Coach Interactions</p>
          </CardContent>
        </Card>
        <Card className="border-border/40">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <BarChart3 className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="mt-2 text-3xl font-bold">85%</p>
            <p className="text-xs text-muted-foreground">Profile Completion</p>
            <Progress value={85} className="mt-2 h-1.5" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {actions.map((a) => (
              <Card key={a.title} className="group cursor-pointer border-border/40 transition-all hover:border-primary/30">
                <CardContent className="p-5">
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${a.color}`}>
                    <a.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Profile completion */}
          <Card className="mt-6 border-border/40">
            <CardHeader>
              <CardTitle className="text-lg">Profile Completion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "Basic Information", done: true },
                { label: "Athletic Metrics", done: true },
                { label: "Academic Profile", done: true },
                { label: "Personal Profile", done: true },
                { label: "Highlight Videos", done: false },
                { label: "Profile Photo", done: false },
                { label: "Parent/Guardian Info", done: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`h-4 w-4 ${item.done ? "text-green-500" : "text-muted-foreground/30"}`} />
                    <span className={item.done ? "" : "text-muted-foreground"}>{item.label}</span>
                  </div>
                  {!item.done && (
                    <Button variant="ghost" size="sm" className="text-xs text-primary">
                      Complete <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent views */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">Recent Profile Views</h2>
          <Card className="border-border/40">
            <CardContent className="p-4">
              <div className="space-y-4">
                {recentViews.map((v, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{v.name}</p>
                        <p className="text-xs text-muted-foreground">{v.school}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{v.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <h2 className="mb-4 mt-8 text-lg font-semibold">Notifications</h2>
          <Card className="border-border/40">
            <CardContent className="p-4 space-y-3">
              {[
                { text: "Coach Martinez viewed your profile", time: "2h ago", type: "view" },
                { text: "New message from Coach Johnson", time: "5h ago", type: "message" },
                { text: "Profile reached 1,200 views!", time: "1d ago", type: "milestone" },
              ].map((n, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-secondary/30 p-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <p className="text-sm">{n.text}</p>
                    <p className="text-xs text-muted-foreground">{n.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
