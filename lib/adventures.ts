export type Adventure = {
  id: string;
  title: string;
  location: string;
  country: string;
  region: "Mediterranean" | "Atlantic" | "Pacific" | "Caribbean" | "Northern Europe";
  date: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const adventures: Adventure[] = [
  {
    id: "greek-cyclades",
    title: "The Cyclades",
    location: "Santorini & Mykonos, Greece",
    country: "Greece",
    region: "Mediterranean",
    date: "July 2024",
    description:
      "White-washed walls, cobalt domes, and water so blue it looks painted. Hopped between islands for three weeks and never wanted to leave.",
    image:
      "https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "adriatic-croatia",
    title: "The Adriatic",
    location: "Dubrovnik to Split, Croatia",
    country: "Croatia",
    region: "Mediterranean",
    date: "June 2024",
    description:
      "Crystal clear Adriatic waters, historic walled cities, and hidden island coves. Croatia by sailboat is something else entirely.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "atlantic-crossing",
    title: "Atlantic Crossing",
    location: "Azores to Bermuda",
    country: "Azores / Bermuda",
    region: "Atlantic",
    date: "May 2024",
    description:
      "11 days of open ocean, nothing but sky and sea. The kind of crossing that resets something deep inside you.",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "caribbean-st-lucia",
    title: "St. Lucia Dreams",
    location: "St. Lucia",
    country: "St. Lucia",
    region: "Caribbean",
    date: "March 2024",
    description:
      "Anchored beneath the Pitons with rum punch in hand. The Caribbean never disappoints when you arrive by sea.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "norwegian-fjords",
    title: "Norwegian Fjords",
    location: "Bergen to Geirangerfjord",
    country: "Norway",
    region: "Northern Europe",
    date: "August 2023",
    description:
      "Dramatic cliffs, waterfalls, and the most dramatic scenery I've ever sailed through. Cold? Yes. Worth it? Absolutely.",
    image:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "turkish-coast",
    title: "Turquoise Coast",
    location: "Bodrum to Göcek, Turkey",
    country: "Turkey",
    region: "Mediterranean",
    date: "September 2023",
    description:
      "Ancient ruins, pine-covered hills, and water so turquoise it's surreal. The Turkish Riviera from the water is magic.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nz-bay-of-islands",
    title: "Bay of Islands",
    location: "Northland, New Zealand",
    country: "New Zealand",
    region: "Pacific",
    date: "February 2024",
    description:
      "144 islands, dolphins riding the bow wave at sunrise, and the warmest welcome from Kiwi sailors.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "portuguese-coast",
    title: "Portuguese Coast",
    location: "Lisbon to Lagos",
    country: "Portugal",
    region: "Atlantic",
    date: "April 2024",
    description:
      "Sardine grills in harbor towns, azulejo tiles, and the best pastéis de nata you've ever tasted after a long sail.",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bora-bora",
    title: "Bora Bora",
    location: "Society Islands, French Polynesia",
    country: "French Polynesia",
    region: "Pacific",
    date: "January 2024",
    description:
      "The lagoon. My god, the lagoon. Every shade of blue you can imagine, and then some. Pinch-me moments, daily.",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sardinia",
    title: "Sardinian Wild",
    location: "Sardinia, Italy",
    country: "Italy",
    region: "Mediterranean",
    date: "August 2024",
    description:
      "Untouched beaches only reachable by sea, pasta made by grandmothers, and Sardinian wine at anchor. Perfetto.",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sailing-action",
    title: "Open Water",
    location: "Bay of Biscay",
    country: "France / Spain",
    region: "Atlantic",
    date: "October 2023",
    description:
      "Twenty knots of breeze, a close-hauled reach, and the boat singing through it. Days like this are what it's all about.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "british-columbia",
    title: "BC Coast",
    location: "Vancouver to Desolation Sound",
    country: "Canada",
    region: "Pacific",
    date: "July 2023",
    description:
      "Eagles, orcas, and silence that stretches for miles. The Pacific Northwest coastline is unlike anywhere else on earth.",
    image:
      "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?auto=format&fit=crop&w=800&q=80",
  },
];

export const regions = [
  "All",
  "Mediterranean",
  "Atlantic",
  "Pacific",
  "Caribbean",
  "Northern Europe",
] as const;
