export type Adventure = {
  id: string;
  title: string;
  location: string;
  country: string;
  region: "Whitsundays" | "South East Queensland" | "Great Barrier Reef";
  date: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const adventures: Adventure[] = [
  {
    id: "whitehaven-beach",
    title: "Whitehaven Beach",
    location: "Whitsunday Island, QLD",
    country: "Australia",
    region: "Whitsundays",
    date: "July 2025",
    description:
      "Pure white silica sand swirling into pale turquoise shallows. We anchored at Hill Inlet and stayed three days — no reception, no hurry, just unreal water.",
    image: "/images/adv-whitehaven.png",
    featured: true,
  },
  {
    id: "hardy-reef",
    title: "Hardy Reef",
    location: "Outer Great Barrier Reef, QLD",
    country: "Australia",
    region: "Great Barrier Reef",
    date: "July 2025",
    description:
      "Moored out on the edge of the reef. Snorkelled at dawn with turtles and reef sharks, then watched the sun come up from the flybridge with a coffee.",
    image: "/images/adv-hardy-reef.png",
    featured: true,
  },
  {
    id: "hook-island-nara",
    title: "Nara Inlet",
    location: "Hook Island, Whitsundays",
    country: "Australia",
    region: "Whitsundays",
    date: "June 2025",
    description:
      "A steep green fjord-like inlet tucked into Hook Island. Glassy water, waterfalls after the rain, and absolutely nobody else for a full 24 hours.",
    image: "/images/adv-nara-inlet.png",
    featured: true,
  },
  {
    id: "hamilton-island",
    title: "Hamilton Island",
    location: "Whitsundays, QLD",
    country: "Australia",
    region: "Whitsundays",
    date: "June 2025",
    description:
      "Pulled into the marina after a week off-grid. Long shower, cold sav blanc at the yacht club, restock. The bougie reset your body needs.",
    image: "/images/adv-hamilton-island.png",
  },
  {
    id: "tangalooma-wrecks",
    title: "The Tangalooma Wrecks",
    location: "Moreton Island, QLD",
    country: "Australia",
    region: "South East Queensland",
    date: "April 2025",
    description:
      "Fifteen rusting hulls sunk in line as a breakwater, now a snorkelling wonderland. Anchored right alongside and had the water to ourselves by 6am.",
    image: "/images/adv-tangalooma.png",
  },
  {
    id: "straddie",
    title: "Straddie",
    location: "North Stradbroke Island, QLD",
    country: "Australia",
    region: "South East Queensland",
    date: "March 2025",
    description:
      "Pandanus on the dunes, long empty beaches, dolphins that follow you between Amity and Dunwich. My favourite weekend bolthole from Brisbane.",
    image: "/images/adv-straddie.png",
  },
  {
    id: "kgari",
    title: "K'gari",
    location: "Fraser Island, QLD",
    country: "Australia",
    region: "South East Queensland",
    date: "May 2025",
    description:
      "The world's largest sand island, best seen from the water — those honey-coloured cliffs running for miles, and the wreck of the Maheno at golden hour.",
    image: "/images/adv-kgari.png",
  },
  {
    id: "great-sandy-strait",
    title: "Great Sandy Strait",
    location: "Between K'gari & the mainland, QLD",
    country: "Australia",
    region: "South East Queensland",
    date: "May 2025",
    description:
      "The shallow, mangrove-lined passage inside K'gari. Shoal-hopping by day, still-as-glass anchorages by night, and pelicans for company.",
    image: "/images/adv-sandy-strait.png",
  },
  {
    id: "noosa",
    title: "Laguna Bay",
    location: "Noosa, QLD",
    country: "Australia",
    region: "South East Queensland",
    date: "February 2025",
    description:
      "Anchored off Main Beach with the Noosa headland for a backdrop. Long-lunch-at-the-yacht-club kind of place. Always a few too many rosés.",
    image: "/images/adv-noosa.png",
  },
  {
    id: "lady-musgrave",
    title: "Lady Musgrave",
    location: "Southern Great Barrier Reef, QLD",
    country: "Australia",
    region: "Great Barrier Reef",
    date: "October 2024",
    description:
      "A coral cay lagoon you can anchor inside. Turtles and reef sharks at the bommies, pisonia-forested island in the middle. Absolute Eden.",
    image: "/images/adv-lady-musgrave.png",
  },
];

export const regions = [
  "All",
  "Whitsundays",
  "South East Queensland",
  "Great Barrier Reef",
] as const;
