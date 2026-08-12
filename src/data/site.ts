export const site = {
  name: "Farm an Island Wiki",
  gameName: "Farm an Island",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description: "A fan-made Farm an Island wiki with careful code status, a beginner route, and guides to crops, the Bank, land and chickens.",
  developer: "Boiler Games",
  placeId: "78769336859161",
  universeId: "10349044906",
  genre: "Simulation / Tycoon",
  gameUrl: "https://www.roblox.com/games/78769336859161/Farm-an-Island",
  checkedAt: "2026-08-12T10:22:00+08:00",
  playing: 2754,
  favorites: 16638,
  visits: 4109655,
  navigation: [
    { href: "/beginner-guide", label: "Beginner guide" },
    { href: "/codes", label: "Codes" },
    { href: "/seeds-and-crops", label: "Seeds and crops" },
    { href: "/bank-and-money", label: "Bank and money" },
  ],
} as const;

export const gameplayLoop = [
  { step: "01", title: "Plant", detail: "Plant seeds on your island." },
  { step: "02", title: "Harvest", detail: "Collect crops when they are ready." },
  { step: "03", title: "Use the Bank", detail: "Trade harvested crops for cash." },
  { step: "04", title: "Expand", detail: "Use cash to buy more land." },
  { step: "05", title: "Check chickens", detail: "The official description says chickens help on the journey." },
] as const;

export const homeRoutes = [
  {
    label: "Status",
    question: "What is the current code status?",
    explanation: "Try two codes that last worked on Aug 7, see their rewards and follow the in-game Redeem path.",
    value: "Know the reward and where to enter each code",
    href: "/codes",
  },
  {
    label: "First session",
    question: "What should I do first?",
    explanation: "Follow the official loop from seeds and crops to the Bank, cash and island expansion.",
    value: "A short route through planting, the Bank and expansion",
    href: "/beginner-guide",
  },
  {
    label: "Crops",
    question: "What is known about seeds and XL plants?",
    explanation: "See the available details for five crops and watch fertilizer turn one Durian into an XL Durian.",
    value: "Crop details plus a playable XL example",
    href: "/seeds-and-crops",
  },
  {
    label: "Cash loop",
    question: "How does the Bank fit the game?",
    explanation: "See the Transfer action, a timed Average deal and a batch result without turning them into a false crop formula.",
    value: "Understand the changing Bank screen",
    href: "/bank-and-money",
  },
  {
    label: "Expansion",
    question: "When should I look at more land?",
    explanation: "Compare your cash with early pad costs last checked on Aug 5.",
    value: "Dated costs from 65 to 220 cash",
    href: "/land-expansion",
  },
  {
    label: "Helpers",
    question: "What do chickens do?",
    explanation: "Read the Common Chicken card, its visible 2x Power and the listed XL Chicken Hunter pass price.",
    value: "Understand the card before choosing a pass",
    href: "/chickens",
  },
] as const;

export const videoDemos = {
  codes: { videoId: "6uSuiCqsgUg", startAt: 60 },
  xlDurian: { videoId: "Zj7CVlpJmvs", startAt: 0 },
} as const;
