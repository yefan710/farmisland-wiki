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
    explanation: "See two codes that worked in an Aug 7 target-game capture, their rewards and the in-game Redeem path.",
    value: "Use dated codes, then recheck the current result",
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
    explanation: "See five crops observed in dated footage and what one fertilizer-to-XL Durian demonstration proves.",
    value: "Known crop cards without a guessed profit ranking",
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
    explanation: "Compare your cash with early pad costs visible in the Aug 5 tutorial.",
    value: "Dated costs from 65 to 220 cash",
    href: "/land-expansion",
  },
  {
    label: "Helpers",
    question: "What do chickens do?",
    explanation: "Read the Common Chicken card, its visible 2x Power and the listed XL Chicken Hunter pass price.",
    value: "Known card fields with the formula left open",
    href: "/chickens",
  },
] as const;

export const communityReports = {
  codes: [
    {
      label: "Community videos reporting codes",
      observedAt: "Aug 11, 2026",
      href: "https://www.youtube.com/watch?v=6uSuiCqsgUg",
      note: "The video shows two successful redemptions in the target game. Those results belong to the Aug 7 capture and do not prove that either code still works today.",
    },
    {
      label: "Reddit post reporting THANKYOU",
      observedAt: "Published Aug 3, 2026",
      href: "https://www.reddit.com/r/RobloxCodesUnite/comments/1vejcvp/farm_an_island_codes_for_roblox/",
      note: "This post lists THANKYOU. A target-game video published Aug 7 also shows the code awarding 2 Free Seed Packs.",
    },
  ],
  xl: {
    label: "Community video using the term XL Plant",
    observedAt: "Observed Aug 11, 2026",
    href: "https://www.youtube.com/watch?v=Zj7CVlpJmvs",
    note: "A target-game video shows fertilizer being applied before a Durian card changes to XL Durian. It does not prove a guaranteed recipe or probability.",
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
      { label: "Roblox game passes API", href: `https://apis.roblox.com/game-passes/v1/universes/${site.universeId}/game-passes?passView=Full&pageSize=100`, detail: "XL pass names, IDs, listed Robux prices and sale status checked Aug 12, 2026" },
    ],
  },
  {
    title: "External web records",
    status: "Facts limited to the fields visible in each source",
    items: [
      { label: "Beginner gameplay guide", href: "https://www.youtube.com/watch?v=NfPFSo07V4w", detail: "Dated crop, Bank, land and Chicken UI fields from the target game" },
      { label: "Codes gameplay video", href: communityReports.codes[0].href, detail: "Two successful code results and the in-game redemption path in an Aug 7 capture" },
      { label: "Second codes gameplay video", href: "https://www.youtube.com/watch?v=xT49YALRaPE", detail: "A second target-game codes record used for identity and topic cross-checking" },
      { label: "Reddit THANKYOU post", href: communityReports.codes[1].href, detail: "A separate dated listing of the THANKYOU string" },
      { label: "XL Plant gameplay video", href: communityReports.xl.href, detail: "Dated fertilizer demonstration and visible Durian/XL Durian card fields" },
    ],
  },
] as const;
