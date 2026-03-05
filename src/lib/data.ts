export interface Athlete {
  id: string;
  name: string;
  school: string;
  grade: string;
  gradeNum: number;
  age: number;
  height: string;
  weight: string;
  sports: { sport: string; position: string }[];
  gpa: number;
  metrics: {
    fortyYard?: string;
    benchPress?: string;
    squat?: string;
    powerClean?: string;
    deadlift?: string;
    verticalJump?: string;
    pullUps?: number;
    mileTime?: string;
    shuttleRun?: string;
  };
  academics: {
    gpa: number;
    honors: string[];
    intendedStudy: string;
    satScore?: number;
    actScore?: number;
  };
  personal: {
    hobbies: string[];
    roleModel: string;
    goal: string;
    leadership: string[];
  };
  contact: {
    email: string;
    phone: string;
    twitter?: string;
    hudl?: string;
  };
  profileImage: string;
  bannerGradient: string;
  photo?: string;
}

export const athletes: Athlete[] = [
  {
    id: "marcus-thompson",
    name: "Marcus Thompson",
    school: "Ridgeline Academy",
    grade: "Junior",
    gradeNum: 11,
    age: 16,
    height: "5'11\"",
    weight: "175 lbs",
    sports: [
      { sport: "Football", position: "Wide Receiver" },
      { sport: "Track & Field", position: "Sprinter" },
    ],
    gpa: 3.7,
    metrics: {
      fortyYard: "4.62s",
      benchPress: "185 lbs",
      squat: "315 lbs",
      powerClean: "205 lbs",
      deadlift: "345 lbs",
      verticalJump: "32 in",
      pullUps: 14,
    },
    academics: {
      gpa: 3.7,
      honors: ["AP English Language", "Honors Chemistry", "AP US History"],
      intendedStudy: "Sports Management",
      satScore: 1180,
    },
    personal: {
      hobbies: ["Film study", "Mentoring younger athletes", "Community service"],
      roleModel: "Larry Fitzgerald",
      goal: "Play college football at a D1 program and earn a degree in Sports Management",
      leadership: [
        "Team Captain — Varsity Football (2025)",
        "Peer Mentor — Ridgeline Academy Athlete Program",
        "Volunteer Coach — Youth Flag Football League",
      ],
    },
    contact: {
      email: "marcus.t@email.com",
      phone: "(480) 555-0147",
      twitter: "@MarcusT_WR",
      hudl: "hudl.com/profile/marcus-thompson",
    },
    profileImage: "/athletes/marcus.jpg",
    photo: "/images/athlete-1.jpg",
    bannerGradient: "from-emerald-900 via-blue-800 to-slate-900",
  },
  {
    id: "jasmine-carter",
    name: "Jasmine Carter",
    school: "Ridgeline Academy",
    grade: "Senior",
    gradeNum: 12,
    age: 17,
    height: "5'8\"",
    weight: "145 lbs",
    sports: [
      { sport: "Basketball", position: "Point Guard" },
      { sport: "Volleyball", position: "Setter" },
    ],
    gpa: 3.9,
    metrics: {
      fortyYard: "4.95s",
      verticalJump: "28 in",
      benchPress: "115 lbs",
      squat: "225 lbs",
      pullUps: 8,
      shuttleRun: "4.45s",
    },
    academics: {
      gpa: 3.9,
      honors: ["AP Calculus AB", "AP Biology", "Honors Spanish IV"],
      intendedStudy: "Pre-Medicine",
      actScore: 29,
    },
    personal: {
      hobbies: ["Reading", "Yoga", "Volunteering at local clinics"],
      roleModel: "Diana Taurasi",
      goal: "Earn a basketball scholarship and pursue a career in sports medicine",
      leadership: [
        "Team Captain — Varsity Basketball",
        "Student Council Vice President",
        "National Honor Society Member",
      ],
    },
    contact: {
      email: "jasmine.c@email.com",
      phone: "(480) 555-0293",
    },
    profileImage: "/athletes/jasmine.jpg",
    photo: "/images/athlete-2.jpg",
    bannerGradient: "from-purple-900 via-purple-800 to-slate-900",
  },
  {
    id: "diego-ramirez",
    name: "Diego Ramirez",
    school: "Desert Vista Prep",
    grade: "Sophomore",
    gradeNum: 10,
    age: 15,
    height: "5'10\"",
    weight: "160 lbs",
    sports: [{ sport: "Soccer", position: "Midfielder" }],
    gpa: 3.5,
    metrics: {
      fortyYard: "4.78s",
      verticalJump: "26 in",
      squat: "245 lbs",
      mileTime: "5:12",
      shuttleRun: "4.20s",
    },
    academics: {
      gpa: 3.5,
      honors: ["Honors Algebra II", "Honors World History"],
      intendedStudy: "Business Administration",
    },
    personal: {
      hobbies: ["Freestyle soccer", "Gaming", "Cooking"],
      roleModel: "Lionel Messi",
      goal: "Play college soccer and represent his community at the highest level",
      leadership: ["Youth Soccer Coach — Saturday League", "Bilingual Tutor"],
    },
    contact: {
      email: "diego.r@email.com",
      phone: "(602) 555-0381",
    },
    profileImage: "/athletes/diego.jpg",
    photo: "/images/athlete-3.jpg",
    bannerGradient: "from-green-900 via-emerald-800 to-slate-900",
  },
  {
    id: "alyssa-chen",
    name: "Alyssa Chen",
    school: "Ridgeline Academy",
    grade: "Junior",
    gradeNum: 11,
    age: 16,
    height: "5'6\"",
    weight: "135 lbs",
    sports: [
      { sport: "Track & Field", position: "400m / 800m" },
      { sport: "Cross Country", position: "Varsity Runner" },
    ],
    gpa: 4.0,
    metrics: {
      fortyYard: "5.10s",
      mileTime: "5:28",
      verticalJump: "24 in",
      pullUps: 6,
      squat: "185 lbs",
    },
    academics: {
      gpa: 4.0,
      honors: ["AP Chemistry", "AP Calculus BC", "AP English Literature"],
      intendedStudy: "Biomedical Engineering",
      satScore: 1420,
    },
    personal: {
      hobbies: ["Piano", "Science Olympiad", "Trail running"],
      roleModel: "Allyson Felix",
      goal: "Compete at the NCAA D1 level in track while pursuing engineering",
      leadership: [
        "Science Olympiad Team Captain",
        "Varsity Cross Country Co-Captain",
      ],
    },
    contact: {
      email: "alyssa.c@email.com",
      phone: "(480) 555-0412",
    },
    profileImage: "/athletes/alyssa.jpg",
    photo: "/images/athlete-4.jpg",
    bannerGradient: "from-rose-900 via-pink-800 to-slate-900",
  },
  {
    id: "jaylen-williams",
    name: "Jaylen Williams",
    school: "Phoenix Central High",
    grade: "Senior",
    gradeNum: 12,
    age: 18,
    height: "6'3\"",
    weight: "210 lbs",
    sports: [
      { sport: "Football", position: "Linebacker" },
      { sport: "Basketball", position: "Power Forward" },
    ],
    gpa: 3.2,
    metrics: {
      fortyYard: "4.72s",
      benchPress: "245 lbs",
      squat: "385 lbs",
      powerClean: "265 lbs",
      deadlift: "405 lbs",
      verticalJump: "34 in",
      pullUps: 18,
    },
    academics: {
      gpa: 3.2,
      honors: ["Honors English IV"],
      intendedStudy: "Criminal Justice",
    },
    personal: {
      hobbies: ["Weight training", "Fishing", "Coaching youth camps"],
      roleModel: "Ray Lewis",
      goal: "Earn a football scholarship and become a first-generation college graduate",
      leadership: [
        "Defensive Captain — Varsity Football",
        "Big Brothers Big Sisters Volunteer",
      ],
    },
    contact: {
      email: "jaylen.w@email.com",
      phone: "(602) 555-0578",
    },
    profileImage: "/athletes/jaylen.jpg",
    photo: "/images/athlete-1.jpg",
    bannerGradient: "from-orange-900 via-amber-800 to-slate-900",
  },
  {
    id: "sophia-martinez",
    name: "Sophia Martinez",
    school: "Ridgeline Academy",
    grade: "Freshman",
    gradeNum: 9,
    age: 14,
    height: "5'5\"",
    weight: "125 lbs",
    sports: [{ sport: "Soccer", position: "Forward" }],
    gpa: 3.8,
    metrics: {
      fortyYard: "5.15s",
      verticalJump: "22 in",
      squat: "155 lbs",
      shuttleRun: "4.55s",
      mileTime: "6:10",
    },
    academics: {
      gpa: 3.8,
      honors: ["Honors Biology", "Honors English I"],
      intendedStudy: "Undecided",
    },
    personal: {
      hobbies: ["Drawing", "Hiking", "Watching NWSL"],
      roleModel: "Alex Morgan",
      goal: "Make varsity as a sophomore and eventually play college soccer",
      leadership: ["Freshman Class Representative"],
    },
    contact: {
      email: "sophia.m@email.com",
      phone: "(480) 555-0634",
    },
    profileImage: "/athletes/sophia.jpg",
    photo: "/images/athlete-3.jpg",
    bannerGradient: "from-teal-900 via-cyan-800 to-slate-900",
  },
  {
    id: "tyler-jackson",
    name: "Tyler Jackson",
    school: "Scottsdale Prep Academy",
    grade: "Junior",
    gradeNum: 11,
    age: 17,
    height: "6'1\"",
    weight: "185 lbs",
    sports: [
      { sport: "Basketball", position: "Shooting Guard" },
      { sport: "Track & Field", position: "Long Jump / Triple Jump" },
    ],
    gpa: 3.4,
    metrics: {
      fortyYard: "4.68s",
      verticalJump: "36 in",
      benchPress: "175 lbs",
      squat: "295 lbs",
      pullUps: 12,
    },
    academics: {
      gpa: 3.4,
      honors: ["Honors Pre-Calculus", "AP Computer Science A"],
      intendedStudy: "Computer Science",
      actScore: 26,
    },
    personal: {
      hobbies: ["Coding", "Basketball film breakdown", "Music production"],
      roleModel: "Devin Booker",
      goal: "Play D1 basketball while building skills in software development",
      leadership: [
        "Varsity Basketball Team Leader",
        "Coding Club President",
      ],
    },
    contact: {
      email: "tyler.j@email.com",
      phone: "(480) 555-0789",
    },
    profileImage: "/athletes/tyler.jpg",
    photo: "/images/athlete-2.jpg",
    bannerGradient: "from-indigo-900 via-violet-800 to-slate-900",
  },
];

export function getAthlete(id: string): Athlete | undefined {
  return athletes.find((a) => a.id === id);
}
