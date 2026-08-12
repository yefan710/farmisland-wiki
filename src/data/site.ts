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
  checkedAt: "2026-08-11T19:02:00+08:00",
  playing: 3311,
  favorites: 16114,
  visits: 3946330,
  navigation: [
    { href: "/beginner-guide", label: "Beginner guide" },
    { href: "/codes", label: "Codes" },
    { href: "/seeds-and-crops", label: "Seeds and crops" },
    { href: "/bank-and-money", label: "Bank and money" },
  ],
} as const;

export const confirmedSystems = [
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
    explanation: "Separate a dated externally listed code string from its current active status and reward fields.",
    value: "Use the known string without inventing the missing status",
    href: "/codes",
  },
  {
    label: "First session",
    question: "What should I do first?",
    explanation: "Follow the official loop from seeds and crops to the Bank, cash and island expansion.",
    value: "A short route through the confirmed systems",
    href: "/beginner-guide",
  },
  {
    label: "Crops",
    question: "What is known about seeds and XL plants?",
    explanation: "Separate the known planting loop from crop lists, values and XL details that have not yet been processed.",
    value: "Know which fields are available and which remain open",
    href: "/seeds-and-crops",
  },
  {
    label: "Cash loop",
    question: "How does the Bank fit the game?",
    explanation: "See how harvested crops become cash and why a useful profit table needs one dated field set.",
    value: "Understand where harvested crops become cash",
    href: "/bank-and-money",
  },
  {
    label: "Expansion",
    question: "When should I look at more land?",
    explanation: "Learn where land fits the loop and how dated web or video values can fill a future cost table.",
    value: "A clear expansion decision with visible data gaps",
    href: "/land-expansion",
  },
  {
    label: "Helpers",
    question: "What do chickens do?",
    explanation: "Read the known role and the exact effect, cost, Tier, and probability fields that still need sourcing.",
    value: "Know the current evidence limit before spending",
    href: "/chickens",
  },
] as const;

export const communityReports = {
  codes: [
    {
      label: "Community videos reporting codes",
      observedAt: "Aug 11, 2026",
      href: "https://www.youtube.com/watch?v=6uSuiCqsgUg",
      note: "The title is a dated fact about code coverage, but it does not contain a readable code string, reward, or active status.",
    },
    {
      label: "Reddit post reporting THANKYOU",
      observedAt: "Published Aug 3, 2026",
      href: "https://www.reddit.com/r/RobloxCodesUnite/comments/1vejcvp/farm_an_island_codes_for_roblox/",
      note: "THANKYOU is a dated externally listed string. The current active status and reward have not been established in the processed fields.",
    },
  ],
  xl: {
    label: "Community video using the term XL Plant",
    observedAt: "Observed Aug 11, 2026",
    href: "https://www.youtube.com/watch?v=Zj7CVlpJmvs",
    note: "XL Plant is a dated externally observed term. The title does not contain the conditions, rates, or bonus fields.",
  },
} as const;

export const sourceGroups = [
  {
    title: "Roblox records",
    status: "Current or dated facts",
    items: [
      { label: "Farm an Island experience", href: site.gameUrl, detail: "Correct place, developer and player destination" },
      { label: "Roblox game API", href: `https://games.roblox.com/v1/games?universeIds=${site.universeId}`, detail: "Identity, description and dated metrics" },
      { label: "Roblox media API", href: `https://games.roblox.com/v2/games/${site.universeId}/media`, detail: "Official experience images" },
    ],
  },
  {
    title: "External web records",
    status: "Facts limited to the fields visible in each source",
    items: [
      { label: "Codes video result", href: communityReports.codes[0].href, detail: "Dated code-topic record; string and reward fields absent" },
      { label: "Reddit THANKYOU post", href: communityReports.codes[1].href, detail: "Dated code string; current status and reward fields open" },
      { label: "XL Plant video result", href: communityReports.xl.href, detail: "Dated term; conditions, rates, and bonuses open" },
    ],
  },
] as const;
