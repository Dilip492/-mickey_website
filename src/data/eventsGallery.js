export const eventsData = [
    {
        id: "e1",
        name: "Live Jazz Night",
        tagline: "An evening of smooth standards and smoked old fashioneds.",
        description:
            "Every Friday, the lounge comes alive with live jazz from Kitchener's finest musicians. Tables fill quickly — reserve yours early and settle in for an evening of standards, slow tempos, and small-batch cocktails.",
        category: "Live Music",
        date: "2026-04-10",
        dayLabel: "Friday",
        time: "7:00 PM – 10:00 PM",
        location: "Mickey's Café & Lounge — Downtown Kitchener",
        price: "Free entry · Reservations recommended",
        seats: "24 seats remaining",
        image:
            "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "e2",
        name: "Sunday Vinyl Brunch",
        tagline: "Slow mornings, warm records, and a menu worth lingering over.",
        description:
            "A rotating vinyl set spins all morning while the kitchen serves a special brunch menu. Bring friends, bring a book, bring an appetite. No set schedule — just settle in and stay as long as you like.",
        category: "Brunch",
        date: "2026-04-12",
        dayLabel: "Sunday",
        time: "10:00 AM – 2:00 PM",
        location: "Mickey's Café & Lounge — Downtown Kitchener",
        price: "À la carte menu",
        seats: "Walk-ins welcome",
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "e3",
        name: "Latte Art Workshop",
        tagline: "Pour beautiful rosettas — with your hands, not just your eyes.",
        description:
            "A hands-on evening with our head barista. Learn milk texturing, pour technique, and the little details that make a great latte. Small groups, plenty of practice, and a free drink on the house.",
        category: "Workshop",
        date: "2026-04-17",
        dayLabel: "Friday",
        time: "6:30 PM – 8:30 PM",
        location: "Mickey's Café & Lounge — Downtown Kitchener",
        price: "$45 per guest",
        seats: "12 seats · Almost full",
        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "e4",
        name: "Chef's Table: Spring Menu",
        tagline: "Six courses. One table. One evening to remember.",
        description:
            "An intimate tasting evening with our chef. Six seasonal courses, paired thoughtfully, served at a single communal table. Conversation encouraged. Spaces are extremely limited.",
        category: "Dining",
        date: "2026-04-24",
        dayLabel: "Friday",
        time: "7:00 PM – 10:30 PM",
        location: "Mickey's Café & Lounge — Downtown Kitchener",
        price: "$95 per guest",
        seats: "8 seats · By reservation",
        image:
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "e5",
        name: "Wine & Vinyl Pairing",
        tagline: "Four wines, four records, one very good evening.",
        description:
            "A guided tasting evening where each wine is paired with a record. Pour, listen, talk, repeat. Limited to 20 guests, so the room stays warm and conversational.",
        category: "Tasting",
        date: "2026-05-02",
        dayLabel: "Saturday",
        time: "7:30 PM – 10:00 PM",
        location: "Mickey's Café & Lounge — Downtown Kitchener",
        price: "$65 per guest",
        seats: "20 seats available",
        image:
            "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "e6",
        name: "Mother's Day Tea",
        tagline: "A gentle afternoon for the people who raised us.",
        description:
            "A slow, curated afternoon tea service with finger sandwiches, scones, pastries, and a bottomless pot of our house blend. Three seatings throughout the day.",
        category: "Seasonal",
        date: "2026-05-10",
        dayLabel: "Sunday",
        time: "11:00 AM, 1:00 PM, 3:00 PM",
        location: "Mickey's Café & Lounge — Downtown Kitchener",
        price: "$38 per guest",
        seats: "Three seatings · Booking open",
        image:
            "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1600&q=80",
    },
];

export const EVENT_CATEGORIES = [
    "All",
    "Live Music",
    "Brunch",
    "Workshop",
    "Dining",
    "Tasting",
    "Seasonal",
];

export const galleryData = [
    // The Lounge
    { id: "g1", category: "Lounge", caption: "Evening light in the main room", src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80", tall: true },
    { id: "g2", category: "Lounge", caption: "Corner tables for two", src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80" },
    { id: "g3", category: "Lounge", caption: "The reading nook", src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80" },
    { id: "g4", category: "Lounge", caption: "Warm wood, warm welcome", src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80" },

    // Coffee
    { id: "g5", category: "Coffee", caption: "Morning espresso", src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80" },
    { id: "g6", category: "Coffee", caption: "Iced vanilla latte", src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80", tall: true },
    { id: "g7", category: "Coffee", caption: "Latte art in progress", src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80" },
    { id: "g8", category: "Coffee", caption: "Slow pour", src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80" },

    // Food
    { id: "g9", category: "Food", caption: "Signature burger", src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80" },
    { id: "g10", category: "Food", caption: "Weekend croissants", src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80" },
    { id: "g11", category: "Food", caption: "Chocolate cake, slice one", src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80", tall: true },
    { id: "g12", category: "Food", caption: "Chef's table, mid-course", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80" },

    // People & Moments
    { id: "g13", category: "Moments", caption: "Friday jazz night", src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80" },
    { id: "g14", category: "Moments", caption: "Brunch, unhurried", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" },
    { id: "g15", category: "Moments", caption: "Friends, late evening", src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80" },

    // Details
    { id: "g16", category: "Details", caption: "The brass spoon", src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80" },
    { id: "g17", category: "Details", caption: "Cup on the saucer", src: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=1200&q=80" },
    { id: "g18", category: "Details", caption: "Beans, morning sun", src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=1200&q=80", tall: true },
];

export const GALLERY_CATEGORIES = ["All", "Lounge", "Coffee", "Food", "Moments", "Details"];