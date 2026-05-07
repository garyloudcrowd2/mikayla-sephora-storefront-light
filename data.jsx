// Sample data for Mikayla's storefront — pro MUA persona

const CREATOR = {
  name: "Mikayla Nogueira",
  handle: "@mikaylanogueira",
  title: "Licensed MUA · Massachusetts",
  bio: "From CVS aisles to red carpets. Beauty for real people, real budgets, real skin. If I love it, you'll know — if I don't, you'll know louder.",
  followers: "16.2M",
  looks: 124,
  curated: 58,
  rating: 4.9,
  ratingCount: "48,902",
  avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&auto=format&fit=crop",
  cover: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?w=1800&q=80&auto=format&fit=crop",
  portrait: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80&auto=format&fit=crop",
};

const HERO_REEL = {
  poster: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&q=80&auto=format&fit=crop",
  caption: "Editorial smoke — in 90 seconds",
  duration: "1:32",
};

// "Tutorials" — vertical reels w/ products attached
const REELS = [
  {
    id: "r1",
    title: "The Editorial Smoke",
    duration: "1:32",
    views: "2.1M",
    poster: "videos/mikayla-4-poster.jpg",
    video: "videos/mikayla-4.mp4",
    tag: "TUTORIAL",
    products: ["p1", "p2", "p3", "p4"],
  },
  {
    id: "r2",
    title: "No-Makeup Makeup",
    duration: "0:58",
    views: "890K",
    poster: "videos/mikayla-5-poster.jpg",
    video: "videos/mikayla-5.mp4",
    tag: "GRWM",
    products: ["p5", "p6", "p7"],
  },
  {
    id: "r3",
    title: "Bridal: 12-Hour Wear",
    duration: "2:14",
    views: "1.3M",
    poster: "videos/mikayla-1-poster.jpg",
    video: "videos/mikayla-1.mp4",
    tag: "MASTERCLASS",
    products: ["p1", "p8", "p9"],
  },
  {
    id: "r4",
    title: "Glass Skin, Real Skin",
    duration: "1:05",
    views: "640K",
    poster: "videos/mikayla-2-poster.jpg",
    video: "videos/mikayla-2.mp4",
    tag: "TUTORIAL",
    products: ["p7", "p10", "p11"],
  },
  {
    id: "r5",
    title: "Red Carpet Liner",
    duration: "1:48",
    views: "1.8M",
    poster: "videos/mikayla-3-poster.jpg",
    video: "videos/mikayla-3.mp4",
    tag: "TUTORIAL",
    products: ["p2", "p3", "p12"],
  },
  {
    id: "r6",
    title: "Lit From Within",
    duration: "0:42",
    views: "420K",
    poster: "videos/mikayla-4-poster.jpg",
    video: "videos/mikayla-4.mp4",
    tag: "GRWM",
    products: ["p10", "p13"],
  },
];

const PRODUCTS = {
  p1: { id: "p1", brand: "Pat McGrath Labs", name: "Mothership IX: Huetopian Dream", price: 138, img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80&auto=format&fit=crop", category: "Eyes", color: "#3a2a3f" },
  p2: { id: "p2", brand: "Charlotte Tilbury", name: "Hollywood Flawless Filter", price: 49, img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80&auto=format&fit=crop", category: "Complexion", color: "#e8c4a0" },
  p3: { id: "p3", brand: "Hourglass", name: "Caution Extreme Lash Mascara", price: 32, img: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=600&q=80&auto=format&fit=crop", category: "Eyes", color: "#0a0a0a" },
  p4: { id: "p4", brand: "Rare Beauty", name: "Soft Pinch Liquid Blush", price: 23, img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80&auto=format&fit=crop", category: "Cheeks", color: "#c75a62" },
  p5: { id: "p5", brand: "Ilia", name: "Super Serum Skin Tint SPF 40", price: 48, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80&auto=format&fit=crop", category: "Complexion", color: "#d9a88a" },
  p6: { id: "p6", brand: "Saie", name: "Glowy Super Gel", price: 32, img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80&auto=format&fit=crop", category: "Highlighter", color: "#f4d4a8" },
  p7: { id: "p7", brand: "Tatcha", name: "The Dewy Skin Cream", price: 72, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80&auto=format&fit=crop", category: "Skincare", color: "#e8e4d8" },
  p8: { id: "p8", brand: "Make Up For Ever", name: "HD Skin Foundation", price: 47, img: "https://images.unsplash.com/photo-1607602132700-068258431c6c?w=600&q=80&auto=format&fit=crop", category: "Complexion", color: "#c9a088" },
  p9: { id: "p9", brand: "Urban Decay", name: "All Nighter Setting Spray", price: 36, img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&q=80&auto=format&fit=crop", category: "Setting", color: "#9bb8c4" },
  p10: { id: "p10", brand: "Glossier", name: "Futuredew", price: 26, img: "https://images.unsplash.com/photo-1583241800698-9c2e3796ce04?w=600&q=80&auto=format&fit=crop", category: "Highlighter", color: "#f4c89a" },
  p11: { id: "p11", brand: "U Beauty", name: "Resurfacing Compound", price: 168, img: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&q=80&auto=format&fit=crop", category: "Skincare", color: "#f0e8de" },
  p12: { id: "p12", brand: "Stila", name: "Stay All Day Liquid Liner", price: 24, img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80&auto=format&fit=crop", category: "Eyes", color: "#1a1a1a" },
  p13: { id: "p13", brand: "RMS Beauty", name: "Living Luminizer", price: 38, img: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=600&q=80&auto=format&fit=crop", category: "Highlighter", color: "#f0d8b0" },
};

// Hotspot positions for the "tap pause → face hotspots" interaction (% of frame)
const HOTSPOTS = {
  r1: [
    { id: "p1", x: 50, y: 38, label: "Lid" },
    { id: "p2", x: 38, y: 56, label: "Skin" },
    { id: "p3", x: 52, y: 42, label: "Lash" },
    { id: "p4", x: 32, y: 60, label: "Cheek" },
  ],
  r2: [
    { id: "p5", x: 50, y: 50, label: "Skin" },
    { id: "p6", x: 38, y: 56, label: "Cheek" },
    { id: "p7", x: 50, y: 42, label: "Glow" },
  ],
  r3: [
    { id: "p1", x: 50, y: 38, label: "Smoke" },
    { id: "p8", x: 50, y: 55, label: "Base" },
    { id: "p9", x: 60, y: 42, label: "Set" },
  ],
  r4: [
    { id: "p7", x: 50, y: 50, label: "Cream" },
    { id: "p10", x: 38, y: 50, label: "Dew" },
    { id: "p11", x: 60, y: 50, label: "Serum" },
  ],
  r5: [
    { id: "p12", x: 52, y: 42, label: "Wing" },
    { id: "p2", x: 40, y: 55, label: "Skin" },
    { id: "p3", x: 52, y: 44, label: "Lash" },
  ],
  r6: [
    { id: "p10", x: 42, y: 52, label: "Dew" },
    { id: "p13", x: 60, y: 42, label: "Lift" },
  ],
};

// Timeline for "products fade in beside video as applied" (seconds → product id)
const TIMELINES = {
  r1: [
    { t: 0, id: "p2", step: "Filter base" },
    { t: 18, id: "p1", step: "Build the smoke" },
    { t: 48, id: "p3", step: "Lengthen lashes" },
    { t: 70, id: "p4", step: "Cheek wash" },
  ],
  r2: [
    { t: 0, id: "p5", step: "Skin tint" },
    { t: 20, id: "p7", step: "Dew layer" },
    { t: 40, id: "p6", step: "Cheek gel" },
  ],
  r3: [
    { t: 0, id: "p8", step: "Foundation" },
    { t: 30, id: "p1", step: "Smoke" },
    { t: 80, id: "p9", step: "Set 12hr" },
  ],
  r4: [
    { t: 0, id: "p7", step: "Cream" },
    { t: 18, id: "p11", step: "Serum" },
    { t: 40, id: "p10", step: "Glow drops" },
  ],
  r5: [
    { t: 0, id: "p2", step: "Even skin" },
    { t: 24, id: "p12", step: "Liner wing" },
    { t: 60, id: "p3", step: "Lash" },
  ],
  r6: [
    { t: 0, id: "p10", step: "Dew" },
    { t: 22, id: "p13", step: "Lift" },
  ],
};

// "On Mikayla today" — signature kit
const SIGNATURE_KIT = ["p2", "p1", "p3", "p4", "p9"];

// Curated edits (collections)
const EDITS = [
  { id: "e1", name: "The 5-Minute Face", count: 8, img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80&auto=format&fit=crop", desc: "Backstage essentials. Skin, brows, lash, lip — done." },
  { id: "e2", name: "Editorial Smoke", count: 12, img: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=900&q=80&auto=format&fit=crop", desc: "How I build dimensional smoke for runway and lens." },
  { id: "e3", name: "Glass Skin Kit", count: 7, img: "https://images.unsplash.com/photo-1614108472250-de0fa12fa6c4?w=900&q=80&auto=format&fit=crop", desc: "The dewy, lit-from-within layering ritual." },
  { id: "e4", name: "Bridal: All Day", count: 11, img: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=900&q=80&auto=format&fit=crop", desc: "12-hour wear. Photographs like a dream. Survives the toast." },
];

const REVIEWS = [
  { name: "Maya R.", verified: true, rating: 5, body: "Bought the entire Editorial Smoke kit because of Mikayla's tutorial. Did the look in 8 minutes, husband asked who I was.", date: "3 days ago", look: "Editorial Smoke" },
  { name: "Joon P.", verified: true, rating: 5, body: "She is the only MUA on the internet who explains *why* — not just what. The Pat McGrath palette pull alone was worth it.", date: "1 week ago", look: "Editorial Smoke" },
  { name: "Liv K.", verified: true, rating: 5, body: "The no-makeup makeup tutorial converted me from Charlotte Tilbury to Ilia overnight. Skin has never looked better on Zoom.", date: "2 weeks ago", look: "No-Makeup Makeup" },
];

Object.assign(window, { CREATOR, HERO_REEL, REELS, PRODUCTS, HOTSPOTS, TIMELINES, SIGNATURE_KIT, EDITS, REVIEWS });
