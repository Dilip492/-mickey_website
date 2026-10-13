export const mockCustomer = {
  id: "sq_cust_8821",
  squareCustomerId: "SQ-CUST-8821",
  firstName: "Dilip",
  lastName: "Patel",
  email: "dilip@example.com",
  phone: "+1 519 555 0142",
  birthday: "1990-06-14",
  preferredLocation: "Kitchener — Downtown",
  favoriteDrink: "Iced Vanilla Latte",
  avatarUrl: null,
  memberSince: "2023-02-10",
};

export const mockLoyalty = {
  // NOTE: source of truth = Square Loyalty (synced via Laravel)
  points: 1240,
  tier: "Gold",
  tierStars: 4,
  maxTierStars: 5,
  nextRewardAt: 1500,
  nextRewardName: "Free Pastry",
  nextRewardPoints: 240,
};

export const mockRecentOrder = {
  id: "MCK-10294",
  date: "2026-03-28T10:24:00",
  status: "Completed",
  type: "Pickup",
  location: "Kitchener — Downtown",
  items: [
    { name: "Iced Vanilla Latte", qty: 1, price: 620 },
    { name: "Butter Croissant", qty: 1, price: 405 },
    { name: "Chocolate Cake", qty: 1, price: 850 },
  ],
  subtotal: 1875,
  tax: 244,
  total: 2119,
};

export const mockOrders = [
  mockRecentOrder,
  {
    id: "MCK-10188",
    date: "2026-03-21T15:10:00",
    status: "Completed",
    type: "Dine-in",
    location: "Kitchener — Downtown",
    items: [
      { name: "Mickey's Signature Burger", qty: 2, price: 1890 },
      { name: "Flat White", qty: 2, price: 540 },
    ],
    subtotal: 4860,
    tax: 632,
    total: 5492,
  },
  {
    id: "MCK-10091",
    date: "2026-03-12T09:02:00",
    status: "Cancelled",
    type: "Pickup",
    location: "Kitchener — Downtown",
    items: [{ name: "Cortado", qty: 1, price: 480 }],
    subtotal: 480,
    tax: 62,
    total: 542,
  },
];

export const mockFavorites = [
  {
    id: "f1",
    name: "Iced Vanilla Latte",
    description: "Double espresso, oat milk, house vanilla.",
    price: 620,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "f2",
    name: "Butter Croissant",
    description: "Laminated 48 hours, baked every morning.",
    price: 405,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "f3",
    name: "Mickey's Signature Burger",
    description: "Dry-aged beef, smoked cheddar, plum aioli.",
    price: 1890,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "f4",
    name: "Chocolate Cake",
    description: "Dark cocoa, espresso ganache, Maldon salt.",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  },
];

export const mockRewards = [
  {
    id: "r1",
    name: "Free Coffee",
    description: "Any handcrafted coffee, on the house.",
    points: 500,
    status: "available",
    useBy: "2026-06-30",
    emoji: "🎁",
  },
  {
    id: "r2",
    name: "Free Pastry",
    description: "Choose any pastry from the morning case.",
    points: 240,
    status: "progress",
    emoji: "☕",
  },
  {
    id: "r3",
    name: "Free Signature Burger",
    description: "One Mickey's Signature Burger.",
    points: 1200,
    status: "available",
    useBy: "2026-05-15",
    emoji: "🍔",
  },
];

export const mockActivity = [
  {
    id: "a1",
    delta: +120,
    label: "Coffee purchase",
    when: "Today",
    type: "earned",
  },
  {
    id: "a2",
    delta: +250,
    label: "Weekend bonus",
    when: "March 24",
    type: "earned",
  },
  {
    id: "a3",
    delta: -500,
    label: "Free coffee reward",
    when: "March 20",
    type: "redeemed",
  },
  {
    id: "a4",
    delta: +80,
    label: "Pastry purchase",
    when: "March 18",
    type: "earned",
  },
];

export const mockEvents = [
  {
    id: "e1",
    name: "Live Jazz Night",
    date: "Friday",
    time: "7:00 PM",
    location: "Mickey's Café & Lounge",
    reservationStatus: "Reserved — Table for 2",
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "e2",
    name: "Sunday Vinyl Brunch",
    date: "Sunday",
    time: "11:00 AM",
    location: "Mickey's Café & Lounge",
    reservationStatus: null,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "e3",
    name: "Latte Art Workshop",
    date: "April 12",
    time: "6:30 PM",
    location: "Mickey's Café & Lounge",
    reservationStatus: "Waitlist",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
  },
];

export const mockOffers = [
  {
    id: "o1",
    category: "Double Points",
    title: "Double Points Weekend",
    description: "Earn 2× points on all coffee orders.",
    validUntil: "2026-04-07",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "o2",
    category: "Birthday",
    title: "Birthday Treat",
    description: "A little something special from Mickey's.",
    validUntil: "2026-06-30",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "o3",
    category: "Member Exclusive",
    title: "Chef's Table, Just for Members",
    description: "Six courses, one evening, twelve seats.",
    validUntil: "2026-05-01",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
];

export const mockGiftCards = [
  {
    id: "g1",
    name: "Mickey's Gift Card",
    balance: 4500,
    last4: "4821",
    squareGiftCardId: "SQ-GC-4821",
  },
  {
    id: "g2",
    name: "Mickey's Gift Card",
    balance: 1275,
    last4: "1109",
    squareGiftCardId: "SQ-GC-1109",
  },
];