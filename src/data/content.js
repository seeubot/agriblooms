// Central content store. Pulls every fact directly from the AgriBlooms PRD/brochure
// brief; copy that the brochure didn't spell out verbatim (descriptions, editorial
// text) has been written fresh in the brand's voice. Items marked TODO need
// AgriBlooms to confirm before launch — see PRD §5 Open Questions.

export const brand = {
  name: "AgriBlooms",
  tagline: "VR with you",
  categories: "Landscaping • Organic Farming • Green Solutions",
  phone1: "7036106812",
  phone2: "799550828", // TODO: confirm — one digit short of a standard 10-digit number (PRD §5)
  email: "hello@agriblooms.in", // TODO: confirm real inbox
  address: "Hyderabad, Telangana, India", // TODO: confirm full street address
  social: [
    { handle: "@vragri_blooms", url: "https://instagram.com/vragri_blooms" }, // TODO: confirm platform
    { handle: "@VRagriblooms", url: "https://facebook.com/VRagriblooms" }, // TODO: confirm platform
    { handle: "@Agriblooms25", url: "https://youtube.com/@Agriblooms25" }, // TODO: confirm platform
  ],
};

export const founders = [
  {
    name: "Rajesh Goshetti",
    role: "Founder & Agriculturist",
    bio: "Rajesh grew up close to the land and brings hands-on agricultural know-how to every AgriBlooms project — from soil health to seasonal planting, his eye is on what actually makes things grow.",
  },
  {
    name: "Kasoji Sai Vishal",
    role: "Founder & Innovation Strategist",
    bio: "Sai Vishal focuses on bringing modern agri-technology and smarter processes to traditional landscaping and farming work, so AgriBlooms clients get the best of both old wisdom and new tools.",
  },
];

export const services = [
  {
    id: "landscaping",
    name: "Landscaping",
    short: "Full outdoor design and build for homes, farmhouses, and commercial plots.",
    long: "From first sketch to final planting, we design and build outdoor spaces that suit how you actually use them — lawns, pathways, seating areas, and planting beds laid out with the site's natural shape in mind, not against it.",
  },
  {
    id: "lawn-garden-maintenance",
    name: "Lawn & Garden Maintenance",
    short: "Ongoing care that keeps a finished landscape looking finished.",
    long: "Mowing, pruning, feeding, and seasonal upkeep on a schedule built around your garden's needs. A landscape is never really 'done' — our maintenance plans are what keep it thriving year after year.",
  },
  {
    id: "farmhouse-consultation",
    name: "Farmhouse Consultation",
    short: "Site planning and greening guidance for farmhouse and villa properties.",
    long: "Larger properties need a different kind of plan. We walk the land with you, assess soil and water, and put together a phased plan that balances landscaping, working farm space, and the practical needs of farmhouse living.",
  },
  {
    id: "organic-farming",
    name: "Organic Farming",
    short: "Conversion support and ongoing guidance for chemical-free cultivation.",
    long: "Whether you're converting an existing plot or starting fresh, we help with soil preparation, organic inputs, crop selection, and the rhythm of chemical-free farming — grounded in practices that hold up over seasons, not just one harvest.",
  },
  {
    id: "vertical-gardening",
    name: "Vertical Gardening",
    short: "Living walls and stacked planting for spaces with limited ground area.",
    long: "Balconies, courtyards, and tight urban plots can still hold a real garden. We design vertical planting systems suited to your light and water access, so green space isn't limited by square footage.",
  },
  {
    id: "hydroponics",
    name: "Hydroponics",
    short: "Soil-free growing systems for consistent, space-efficient yields.",
    long: "We set up and help run hydroponic systems for households and small growers wanting more control over yield and water use — a modern complement to traditional growing, not a replacement for it.",
  },
];

export const processSteps = [
  {
    label: "Consultation",
    detail: "We start with a conversation about your space, your goals, and your budget — no obligation, just a clear sense of what's possible.",
  },
  {
    label: "Site Visit",
    detail: "Our team walks the land in person to assess soil, sunlight, water access, and layout before anything is proposed on paper.",
  },
  {
    label: "Planning",
    detail: "You get a concrete plan — layout, plant selection, timeline, and cost — so there are no surprises once work begins.",
  },
  {
    label: "Execution",
    detail: "Our crew carries out the plan on the agreed schedule, with regular updates so you always know where things stand.",
  },
  {
    label: "Support & Maintenance",
    detail: "The relationship continues after handover, with maintenance plans that keep your landscape or farm thriving long-term.",
  },
];

export const modernAgPoints = [
  {
    title: "Precision farming",
    detail: "Soil sensors and field mapping let growers apply water, seed, and nutrients exactly where they're needed — cutting waste while improving yield.",
  },
  {
    title: "Drone-assisted monitoring",
    detail: "Aerial imagery spots irrigation gaps, pest pressure, and crop stress early, well before it's visible from the ground.",
  },
  {
    title: "Nano fertilizers",
    detail: "Smaller, more targeted nutrient delivery means less runoff and a lighter footprint on surrounding soil and water.",
  },
  {
    title: "Data-driven decisions",
    detail: "Weather, soil, and yield data turn farming decisions into something closer to forecasting — fewer guesses, better timing.",
  },
];

export const animalHusbandryPoints = [
  "Pasture and grazing planning that works alongside crop and landscaping plots rather than competing with them.",
  "Basic herd health and nutrition guidance for smallholders integrating livestock into a farm plan.",
  "Waste-to-input cycles — composting and manure management that feed back into organic soil health.",
];
