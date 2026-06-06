// Central listing data for the sale of the motor yacht "Scirocco".
// Photos and videos use placeholders for now — drop real files into
// /public/images and /public/videos and set the `src` field to swap them in.

export const boat = {
  name: "Scirocco",
  model: "Dyna 50",
  year: "circa 1993",
  tagline: "A 51ft Mediterranean cruiser, completely overhauled and ready to go",
  price: "$320,000",
  currency: "AUD",
  berth: "Horizon Shores Marina, Jacobs Well",
  location: "Queensland, Australia",
  summary:
    "Scirocco is a spacious 51-foot Dyna 50 (circa 1993) Mediterranean cruiser built for comfortable, long-range living on the water. Twin Detroit diesels, two double cabins, two bathrooms, a full galley, lounge and dining, plus an enormous flybridge entertaining deck. She has just come through a top-to-bottom overhaul — new electrics, rebuilt engines, new fuel tank, freshly painted hull and all-new plumbing — so the hard work is already done. She is berthed at Horizon Shores Marina, Jacobs Well.",
};

// Headline specifications shown as quick-glance chips.
export const quickSpecs: { label: string; value: string }[] = [
  { label: "Length", value: "51 ft" },
  { label: "Make & Model", value: "Dyna 50" },
  { label: "Year", value: "circa 1993" },
  { label: "Type", value: "Mediterranean Cruiser" },
  { label: "Engines", value: "Twin Detroit Diesel" },
  { label: "Power", value: "559 hp each" },
  { label: "Cabins", value: "2 Bedrooms" },
  { label: "Bathrooms", value: "2 Bathrooms" },
];

export type FeatureSection = {
  id: string;
  title: string;
  intro?: string;
  items: { name: string; detail?: string }[];
};

export const featureSections: FeatureSection[] = [
  {
    id: "accommodation",
    title: "Layout & Accommodation",
    intro:
      "Generous living spaces across multiple decks make Scirocco feel more like a floating apartment than a boat.",
    items: [
      { name: "2 double bedrooms", detail: "Comfortable sleeping for the whole family or guests." },
      { name: "2 bathrooms", detail: "Private, well-appointed heads with the plumbing completely redone." },
      { name: "Lounge", detail: "Relaxed indoor living area for unwinding at anchor." },
      { name: "Dining area", detail: "Sit-down dining for entertaining on board." },
      { name: "Full galley", detail: "A proper kitchen for cooking underway or in the marina." },
      {
        name: "Top deck / flybridge",
        detail: "Huge upper helm with a dedicated entertainment area and the best seats on the water.",
      },
      { name: "Back deck", detail: "Spacious aft cockpit for fishing, swimming and sundowners." },
      { name: "Air conditioning", detail: "Climate control throughout for year-round comfort." },
    ],
  },
  {
    id: "performance",
    title: "Engines & Performance",
    intro: "Serious power, freshly rebuilt and ready for the long haul.",
    items: [
      { name: "Twin diesel engines", detail: "Detroit Diesel, 559 hp each." },
      { name: "Engines rebuilt", detail: "Full engine rebuild as part of the recent overhaul." },
      { name: "New fuel tank", detail: "Brand-new fuel tank fitted." },
    ],
  },
  {
    id: "overhaul",
    title: "Recently & Completely Overhauled",
    intro:
      "Scirocco has just been through a comprehensive refit — the expensive, time-consuming work is already done.",
    items: [
      { name: "New electrics", detail: "Complete rewire throughout." },
      { name: "Engine rebuild", detail: "Both engines fully rebuilt." },
      { name: "New fuel tank", detail: "Freshly fitted fuel tank." },
      { name: "Hull sanded & repainted", detail: "Hull completely sanded back and repainted." },
      { name: "Generator refurbished", detail: "Generator fully refurbished." },
      { name: "New electrical distribution system", detail: "All-new power distribution." },
      { name: "All plumbing redone", detail: "Every line and fitting renewed." },
    ],
  },
  {
    id: "extras",
    title: "Also Included",
    intro: "Everything you need to start enjoying her from day one.",
    items: [
      { name: "Inflatable pool", detail: "Large 5m x 5m on-water pool." },
      { name: "Entertainment system", detail: "Built-in sound and media." },
      { name: "TV", detail: "Television on board." },
      { name: "Starlink internet", detail: "Fast satellite internet anywhere you cruise." },
      { name: "Electric BBQ", detail: "For long lunches on the back deck." },
    ],
  },
];

export type GalleryPhoto = {
  id: string;
  caption: string;
  category:
    | "Exterior"
    | "Flybridge"
    | "Living"
    | "Galley"
    | "Cabins"
    | "Systems"
    | "Extras";
  src?: string; // when omitted, a styled placeholder is shown
};

export const galleryPhotos: GalleryPhoto[] = [
  // Exterior
  { id: "ext-hero", caption: "Scirocco — starboard profile", category: "Exterior", src: "/images/scirocco-hero.jpg" },
  { id: "ext-stern", caption: "Stern, swim platform & dinghy", category: "Exterior", src: "/images/scirocco-stern.jpg" },
  { id: "ext-bow", caption: "Bow & foredeck", category: "Exterior", src: "/images/scirocco-bow.jpg" },
  { id: "ext-1", caption: "On the water", category: "Exterior", src: "/images/scirocco-1.jpg" },
  { id: "ext-2", caption: "Profile view", category: "Exterior", src: "/images/scirocco-2.jpg" },
  { id: "ext-3", caption: "At the marina", category: "Exterior", src: "/images/scirocco-3.jpg" },

  // Flybridge — photos to come
  { id: "fly-1", caption: "Flybridge entertainment area", category: "Flybridge" },
  { id: "fly-2", caption: "Upper helm station", category: "Flybridge" },

  // Living
  { id: "liv-lounge", caption: "Lounge", category: "Living", src: "/images/scirocco-lounge.jpg" },
  { id: "liv-saloon", caption: "Saloon — entertainment system & TV", category: "Living", src: "/images/scirocco-saloon.jpg" },
  { id: "liv-backdeck", caption: "Back deck", category: "Living" },

  // Galley
  { id: "gal-1", caption: "Galley — cooktop & microwave", category: "Galley", src: "/images/scirocco-galley-1.jpg" },
  { id: "gal-2", caption: "Galley — fridge/freezer, coffee machine & sink", category: "Galley", src: "/images/scirocco-galley-2.jpg" },

  // Cabins & bathrooms
  { id: "cab-1", caption: "Master cabin", category: "Cabins", src: "/images/scirocco-cabin-1.jpg" },
  { id: "cab-2", caption: "Master cabin — another angle", category: "Cabins", src: "/images/scirocco-cabin-2.jpg" },
  { id: "cab-3", caption: "Forward guest cabin", category: "Cabins", src: "/images/scirocco-cabin-3.jpg" },
  { id: "cab-4", caption: "Guest cabin — portlights & settee", category: "Cabins", src: "/images/scirocco-cabin-4.jpg" },
  { id: "bath-1", caption: "Bathroom — vanity & WC", category: "Cabins", src: "/images/scirocco-bathroom-1.jpg" },
  { id: "bath-2", caption: "Bathroom — shower & vanity", category: "Cabins", src: "/images/scirocco-bathroom-2.jpg" },
  { id: "bath-3", caption: "Ensuite shower", category: "Cabins", src: "/images/scirocco-bathroom-3.jpg" },

  // Systems — recent overhaul
  { id: "sys-1", caption: "New Victron electrical system & battery bank", category: "Systems", src: "/images/scirocco-electrical.jpg" },

  // Included extras — photos to come
  { id: "extra-pool", caption: "5m x 5m inflatable pool", category: "Extras" },
  { id: "extra-bbq", caption: "Electric BBQ on the back deck", category: "Extras" },
];

export const photoCategories = [
  "All",
  "Exterior",
  "Flybridge",
  "Living",
  "Galley",
  "Cabins",
  "Systems",
  "Extras",
] as const;

export type GalleryVideo = {
  id: string;
  caption: string;
  description: string;
  youtubeId?: string; // YouTube video to embed
  src?: string; // local video file; when both omitted, a placeholder is shown
};

export const galleryVideos: GalleryVideo[] = [
  {
    id: "vid-original-tour",
    caption: "Video tour of Scirocco",
    description:
      "An earlier walkthrough video of this exact boat — a great look around inside and out.",
    youtubeId: "C1oOZzgG-hU",
  },
  {
    id: "vid-walkthrough",
    caption: "Full walkthrough tour",
    description: "A complete walk from the back deck through the galley, lounge and cabins.",
  },
  {
    id: "vid-flybridge",
    caption: "Flybridge & entertainment area",
    description: "The top deck entertaining space and upper helm.",
  },
  {
    id: "vid-engines",
    caption: "Engines running",
    description: "Twin 559hp Detroit diesels — freshly rebuilt — at start-up and idle.",
  },
  {
    id: "vid-cruising",
    caption: "Out on the water",
    description: "Scirocco underway and at anchor.",
  },
];

// Seller / inspection details.
export const seller = {
  name: "Thomas Perkins",
  phone: "0419 172 527",
  phoneHref: "tel:0419172527",
  inspections: "Available for inspections on Sunday afternoons",
  berth: "Horizon Shores Marina, Jacobs Well, QLD",
};
