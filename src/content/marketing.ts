/**
 * Marketing landing-page content.
 *
 * Single source of truth for the copy and per-item design tokens (category
 * colors, glyphs) used across the marketing sections. Kept separate from the
 * components so copy edits never require touching layout code.
 *
 * Values mirror the approved design exactly. Per-item colors are hex because
 * they are content-level accents (category palettes), not global theme tokens.
 */

const INK = "#16352B";
const BODY = "#46504A";
const SOFT = "#6B7770";
const Y = "#FFC94A";

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Sign In", href: "#pricing" },
];

// --- Hero mockup -----------------------------------------------------------

export type HeroNavItem = { label: string; meta: string; active: boolean };

export const heroNav: HeroNavItem[] = [
  { label: "Sleep", meta: "4 of 6", active: true },
  { label: "Nursery", meta: "2 of 5", active: false },
  { label: "Feeding", meta: "1 of 4", active: false },
  { label: "Hospital", meta: "0 of 6", active: false },
  { label: "Registry", meta: "18 items", active: false },
  { label: "Budget", meta: "$2,140", active: false },
  { label: "Postpartum", meta: "0 of 6", active: false },
];

export type HeroChip = { label: string; bg: string; ink: string };
export type HeroCard = {
  title: string;
  meta: string;
  glyph: string;
  tile: string;
  tileInk: string;
  bg: string;
  chips: HeroChip[];
};

export const heroCards: HeroCard[] = [
  {
    title: "The Crib",
    meta: "sorted on Tuesday",
    glyph: "✓",
    tile: "#FFF3CE",
    tileInk: "#8A6410",
    bg: "#FFFDF6",
    chips: [{ label: "DaVinci Kalani · $330", bg: "#FFF3CE", ink: "#8A6410" }],
  },
  {
    title: "Crib Mattress",
    meta: "waiting on the crib size",
    glyph: "◷",
    tile: "#E6EEFA",
    tileInk: "#20456B",
    bg: "#FFFFFF",
    chips: [
      { label: "3 saved", bg: "#E3EFE1", ink: "#2C5136" },
      { label: "by Week 30", bg: "#E6EEFA", ink: "#20456B" },
    ],
  },
  {
    title: "Sleep Sacks",
    meta: "needs the room temperature",
    glyph: "◔",
    tile: "#FDE6DC",
    tileInk: "#8A4326",
    bg: "#FFFFFF",
    chips: [{ label: "measure first", bg: "#FDE6DC", ink: "#8A4326" }],
  },
  {
    title: "Swaddles",
    meta: "not started, and that’s fine",
    glyph: "○",
    tile: "#F1F0EC",
    tileInk: "#6B7770",
    bg: "#FFFFFF",
    chips: [{ label: "later", bg: "#F1F0EC", ink: "#6B7770" }],
  },
];

// --- Problem section -------------------------------------------------------

export type ScatterNote = { label: string; x: string; y: string; rot: string };

export const scatter: ScatterNote[] = [
  { label: "Reddit thread, 84 comments", x: "2%", y: "4%", rot: "-3deg" },
  { label: "Amazon wishlist", x: "54%", y: "0%", rot: "2.5deg" },
  { label: "Babylist registry", x: "8%", y: "23%", rot: "1.5deg" },
  { label: "Notes app — “ask Sarah”", x: "48%", y: "20%", rot: "-2deg" },
  { label: "17 browser tabs", x: "0%", y: "44%", rot: "2deg" },
  { label: "Screenshots folder", x: "44%", y: "42%", rot: "-1.5deg" },
  { label: "Hospital PDF", x: "12%", y: "64%", rot: "-2.5deg" },
  { label: "Texts with your partner", x: "46%", y: "63%", rot: "2deg" },
  { label: "That spreadsheet", x: "20%", y: "84%", rot: "-1deg" },
];

export type GatheredItem = { label: string; meta: string };

export const gathered: GatheredItem[] = [
  { label: "Research you saved", meta: "with the source" },
  { label: "What you compared", meta: "and ruled out" },
  { label: "What you chose", meta: "and why" },
  { label: "What you already bought", meta: "and what it cost" },
];

// --- How it works ----------------------------------------------------------

export type StepRow = {
  label: string;
  meta: string;
  color: string;
  dotBg: string;
  mark: string;
};
export type Step = {
  n: string;
  eyebrow: string;
  tile: string;
  tileInk: string;
  title: string;
  body: string;
  rows: StepRow[];
};

export const steps: Step[] = [
  {
    n: "1",
    eyebrow: "about four minutes",
    tile: "#FFF3CE",
    tileInk: "#8A6410",
    title: "Answer a few questions",
    body: "Due date, where you live, where the baby will sleep, how you’re feeding, house or apartment. Ten of them, and you can change any answer later.",
    rows: [
      {
        label: "When are you due?",
        meta: "12 Nov",
        color: INK,
        dotBg: Y,
        mark: "✓",
      },
      {
        label: "Where will the baby sleep?",
        meta: "our room",
        color: INK,
        dotBg: Y,
        mark: "✓",
      },
      {
        label: "House or apartment?",
        meta: "",
        color: SOFT,
        dotBg: "#F1F0EC",
        mark: "",
      },
    ],
  },
  {
    n: "2",
    eyebrow: "instantly",
    tile: "#E6EEFA",
    tileInk: "#20456B",
    title: "Get a plan that’s actually yours",
    body: "We put away the 197 decisions that don’t apply to you and order the rest by when they genuinely need doing — including the lead times nobody warns you about.",
    rows: [
      {
        label: "83 decisions apply to you",
        meta: "",
        color: INK,
        dotBg: Y,
        mark: "✓",
      },
      {
        label: "197 put away",
        meta: "hidden",
        color: SOFT,
        dotBg: "#F1F0EC",
        mark: "",
      },
      {
        label: "3 have real deadlines",
        meta: "by Week 30",
        color: INK,
        dotBg: "#E6EEFA",
        mark: "!",
      },
    ],
  },
  {
    n: "3",
    eyebrow: "over the next few months",
    tile: "#E3EFE1",
    tileInk: "#2C5136",
    title: "Build your workspace as you go",
    body: "Every link you save, every shortlist, every choice and the reason behind it lands in the right place. By Week 36 the whole thing is a record instead of a worry.",
    rows: [
      { label: "The Crib", meta: "sorted", color: INK, dotBg: Y, mark: "✓" },
      {
        label: "Car Seat",
        meta: "2 saved",
        color: INK,
        dotBg: "#F1F0EC",
        mark: "",
      },
      {
        label: "Hospital Bag",
        meta: "Week 34",
        color: SOFT,
        dotBg: "#F1F0EC",
        mark: "",
      },
    ],
  },
];

// --- Rooms / features ------------------------------------------------------

export type Room = {
  title: string;
  glyph: string;
  tile: string;
  ink: string;
  body: string;
  meta: string;
};

export const rooms: Room[] = [
  {
    title: "Sleep",
    glyph: "◗",
    tile: "#F3EDFB",
    ink: "#4C3A78",
    body: "Crib, mattress, sheets, swaddles, sleep sacks — and the room temperature that decides half of them.",
    meta: "6 decisions",
  },
  {
    title: "Nursery",
    glyph: "◱",
    tile: "#E6EEFA",
    ink: "#20456B",
    body: "The dresser, the chair, the blackout curtains, and where a 54-inch box actually fits.",
    meta: "5 decisions",
  },
  {
    title: "Feeding",
    glyph: "◠",
    tile: "#FDE6DC",
    ink: "#8A4326",
    body: "Bottles, pump, nursing supplies. Held back until you’ve decided how you want to feed.",
    meta: "11 decisions",
  },
  {
    title: "Hospital",
    glyph: "◫",
    tile: "#E3EFE1",
    ink: "#2C5136",
    body: "Three bags, the route, the parking, and who you call when it starts.",
    meta: "6 decisions",
  },
  {
    title: "Registry",
    glyph: "◇",
    tile: "#FFF3CE",
    ink: "#8A6410",
    body: "Built from what you actually chose, not from a store’s idea of what you need.",
    meta: "live list",
  },
  {
    title: "Budget",
    glyph: "◈",
    tile: "#E6EEFA",
    ink: "#20456B",
    body: "What you’ve spent, what’s left, and what each thing really cost after the extras.",
    meta: "running total",
  },
  {
    title: "Postpartum",
    glyph: "◡",
    tile: "#FDE6DC",
    ink: "#8A4326",
    body: "Recovery supplies, freezer meals, the lactation number, and help for the first two weeks.",
    meta: "6 decisions",
  },
  {
    title: "Health",
    glyph: "◍",
    tile: "#E3EFE1",
    ink: "#2C5136",
    body: "A pediatrician with a waitlist, the medicine kit, and dosing by weight.",
    meta: "5 decisions",
  },
  {
    title: "Planning",
    glyph: "▤",
    tile: "#F3EDFB",
    ink: "#4C3A78",
    body: "Appointments, hospital registration, insurance, parental leave, birth registration and the reminders that go with them.",
    meta: "7 to plan",
  },
  {
    title: "Clothing",
    glyph: "◒",
    tile: "#FFF3CE",
    ink: "#8A6410",
    body: "Newborn basics sized for a November baby, and the going-home outfit.",
    meta: "5 decisions",
  },
];

// --- Decision detail section ----------------------------------------------

export type DecisionItem = { text: string; meta: string; color: string };
export type DecisionBlock = { label: string; items: DecisionItem[] };

export const decisionBlocks: DecisionBlock[] = [
  {
    label: "research you saved",
    items: [
      {
        text: "Reddit — “Is Storkcraft still worth it?”",
        meta: "4 days ago",
        color: INK,
      },
      {
        text: "YouTube — assembly, start to finish",
        meta: "4 days",
        color: INK,
      },
      { text: "Sarah — four years on hers", meta: "last week", color: INK },
    ],
  },
  {
    label: "products you considered",
    items: [
      { text: "DaVinci Kalani", meta: "$330 · chosen", color: INK },
      { text: "Graco Benton", meta: "$240", color: BODY },
      { text: "Storkcraft Tuscany", meta: "$279", color: BODY },
    ],
  },
  {
    label: "your notes",
    items: [
      {
        text: "Wall is 54″ exactly. 3″ closet clearance.",
        meta: "",
        color: INK,
      },
      { text: "Toddler rail is $70 extra — budget it.", meta: "", color: INK },
    ],
  },
  {
    label: "status",
    items: [
      { text: "Decided", meta: "Tue", color: INK },
      { text: "Ordered", meta: "Wed", color: INK },
      { text: "Delivered · assembled", meta: "2 weeks", color: INK },
    ],
  },
];

export type DecisionNote = { title: string; accent: string; body: string };

export const decisionNotes: DecisionNote[] = [
  {
    title: "It remembers the reason",
    accent: Y,
    body: "Six months from now, when someone asks why you didn’t get the cheaper one, the answer is still on the page.",
  },
  {
    title: "Nothing is a dead end",
    accent: "#9BB8DA",
    body: "Ruled something out? It stays, greyed, with the reason. You never re-research the same crib twice.",
  },
  {
    title: "The receipt lives here too",
    accent: "#8FB396",
    body: "Price paid, where from, delivery date, and the return window — attached to the decision, not buried in email.",
  },
  {
    title: "Your partner sees the same page",
    accent: "#C9A2E8",
    body: "One workspace, two people. No screenshots, no forwarding, no “which link did you mean?”",
  },
];

// --- Timeline --------------------------------------------------------------

export type TimelineStop = {
  week: string;
  body: string;
  state: string;
  stateInk: string;
  dot: string;
  shadow: "rest" | "float";
};

export const timeline: TimelineStop[] = [
  {
    week: "Week 12",
    body: "Almost nothing. A due date, and the two things with real waitlists.",
    state: "2 decisions open",
    stateInk: SOFT,
    dot: "#FFC94A",
    shadow: "rest",
  },
  {
    week: "Week 20",
    body: "The big ones arrive — crib, stroller, car seat — because lead times start to matter.",
    state: "11 decisions open",
    stateInk: SOFT,
    dot: "#FFC94A",
    shadow: "rest",
  },
  {
    week: "Week 28",
    body: "Feeding unlocks, the nursery comes together, the registry goes out.",
    state: "you are here",
    stateInk: "#8A6410",
    dot: "#FFC94A",
    shadow: "float",
  },
  {
    week: "Hospital",
    body: "Three bags, the route, the paperwork, and the car seat installed and checked.",
    state: "opens at Week 34",
    stateInk: SOFT,
    dot: "#EFEDE7",
    shadow: "rest",
  },
  {
    week: "Home",
    body: "Postpartum supplies, the pediatrician, and everything you decided, kept.",
    state: "waiting",
    stateInk: SOFT,
    dot: "#EFEDE7",
    shadow: "rest",
  },
];

// --- Pricing ---------------------------------------------------------------

export const freeIncludes: string[] = [
  "Answer the ten questions",
  "See your personalized plan in full",
  "Browse every decision and what matters in it",
  "Use every checklist, calculator and guide",
  "No card, no trial countdown",
];

export const paidIncludes: string[] = [
  "Save your plan and come back to it",
  "Save research, links and notes to any decision",
  "Build shortlists and record what you chose, and why",
  "Track purchases, prices and your running budget",
  "Build your registry from what you actually picked",
  "Your partner shares the same workspace",
];

// --- FAQ -------------------------------------------------------------------

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Why is Keesa a one-time payment?",
    a: "Because preparing for a baby has an end. You use this hardest between about Week 12 and Week 40, and a subscription would mean charging you for months you barely open it — or worse, quietly renewing while you’re holding a newborn. One payment, this pregnancy, done.",
  },
  {
    q: "Can I use it after my baby is born?",
    a: "Yes, and most people do for a while. The postpartum and health sections are written for the first months, and your workspace stays readable forever — including two years later when you’re trying to remember which mattress you bought.",
  },
  {
    q: "Do I have to pay before exploring?",
    a: "No. The interview, your generated plan, every decision page and every free resource are open to everyone, and always will be. You pay when you want to start saving things into it.",
  },
  {
    q: "Can my partner view it?",
    a: "Yes — one workspace, two people, included. They see the same decisions, the same research and the same shortlists, and can add their own. No second payment and no separate plan.",
  },
  {
    q: "Does Keesa work where I live?",
    a: "Yes — Keesa works anywhere. The plan, the decisions and everything you save are the same wherever you are. Some planning resources vary by country, particularly paperwork and government processes, and localized guidance keeps expanding over time. You can also edit or add anything that is specific to where you live.",
  },
];

// --- Footer ----------------------------------------------------------------

export type FooterColumn = { title: string; links: string[] };

export const footerCols: FooterColumn[] = [
  {
    title: "product",
    links: ["Features", "Pricing", "The Workspace", "Sign In"],
  },
  {
    title: "resources",
    links: [
      "Checklists",
      "Calculators",
      "Buying Guides",
      "Comparisons",
      "Templates & Printables",
    ],
  },
  { title: "company", links: ["About", "Contact", "Privacy", "Terms"] },
];
