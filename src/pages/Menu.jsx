
import { useMemo, useState } from "react";
import {
  Plus,
  ArrowRight,
  CalendarDays,
  Gift,
  MapPin,
  ShoppingBag,
} from "lucide-react";

import espresso from "../assets/espresso.webp";
import latte from "../assets/espresso.webp";
import croissant from "../assets/espresso.webp";
import avocadoToast from "../assets/espresso.webp";
import cheesecake from "../assets/espresso.webp";
import martini from "../assets/espresso.webp";

import Header from "../components/Header";

const categories = [
  "All",
  "Breakfast",
  "Sandwiches",
  "Bakery",
  "Coffee",
  "Mains",
  "Desserts",
  "Cocktails",
  "Beer & Wine",
];

const menuItems = [
  {
    id: 1,
    name: "Avocado Toast",
    category: "Breakfast",
    description: "Sourdough, avocado, fresh herbs and chilli oil.",
    price: "$14",
    image: avocadoToast,
  },
  {
    id: 2,
    name: "Honey Cinnamon Latte",
    category: "Coffee",
    description: "Espresso, steamed milk, honey and cinnamon.",
    price: "$6",
    image: latte,
  },
  {
    id: 3,
    name: "Almond Croissant",
    category: "Bakery",
    description: "Flaky pastry filled with almond cream.",
    price: "$5",
    image: croissant,
  },
  {
    id: 4,
    name: "Espresso Martini",
    category: "Cocktails",
    description: "A smooth evening classic with coffee liqueur.",
    price: "$14",
    image: martini,
  },
  {
    id: 5,
    name: "Signature Espresso",
    category: "Coffee",
    description: "Rich espresso with chocolate and caramel notes.",
    price: "$4.50",
    image: espresso,
  },
  {
    id: 6,
    name: "Summer Berry Cheesecake",
    category: "Desserts",
    description: "Creamy cheesecake with fresh seasonal berries.",
    price: "$9",
    image: cheesecake,
  },
  {
    id: 7,
    name: "Signature Sandwich",
    category: "Sandwiches",
    description: "A freshly prepared sandwich with delicious fillings.",
    price: "$15",
    image: avocadoToast,
  },
  {
    id: 8,
    name: "Chef's Special",
    category: "Mains",
    description: "A satisfying dish made for a relaxed meal.",
    price: "$21",
    image: cheesecake,
  },
  {
    id: 9,
    name: "Beer & Wine Selection",
    category: "Beer & Wine",
    description: "Explore our selection of beers and wines.",
    price: "View menu",
    image: martini,
  },
];

function ProductCard({ item, onAdd }) {
  return (
    <article className="group min-w-0">
      <div className="relative overflow-hidden rounded-xl bg-cream-200">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <button
          type="button"
          onClick={() => onAdd(item)}
          aria-label={`Select ${item.name}`}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream-50 text-roast transition hover:bg-terracotta hover:text-white"
        >
          <Plus size={17} />
        </button>
      </div>

      <div className="pt-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-terracotta">
          {item.category}
        </p>

        <div className="mt-1 flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl text-roast">
            {item.name}
          </h3>
          <span className="pt-1 text-sm font-semibold text-roast">
            {item.price}
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-roast/60">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return menuItems;

    return menuItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const visibleItems =
    activeCategory === "All" && !showAll
      ? menuItems.slice(0, 4)
      : filteredItems;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <>
      <Header />

      <main className="main-container bg-cream-50 text-roast">
        {/* HERO */}
        <section className="px-5 py-12 sm:px-8 md:px-12 md:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-9 md:grid-cols-2 md:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
                All day café & lounge
              </p>

              <h1 className="mt-5 font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Great food.
                <br />
                Good company.
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-roast/65 sm:text-base">
                From fresh coffee and breakfast to delicious bites
                and evening cocktails, find your favourite at Mickey's.
              </p>

              <a
                href="#menu"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-terracotta transition hover:text-roast"
              >
                Explore our menu
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src={latte}
                alt="A favourite from Mickey's Café & Lounge"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CATEGORY FILTERS */}
        <section
          id="menu"
          className="scroll-mt-24 border-y border-roast/10"
        >
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 md:px-12">
            <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  aria-pressed={activeCategory === category}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-medium transition ${
                    activeCategory === category
                      ? "bg-terracotta text-white"
                      : "text-roast/65 hover:bg-cream-200 hover:text-roast"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* MENU ITEMS */}
        <section className="px-5 py-12 sm:px-8 md:px-12 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                  Made with love
                </p>

                <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                  {activeCategory === "All"
                    ? "Featured favourites"
                    : activeCategory}
                </h2>
              </div>

              {activeCategory === "All" && (
                <button
                  type="button"
                  onClick={() => setShowAll((value) => !value)}
                  className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-terracotta sm:text-sm"
                >
                  {showAll ? "Show less" : "View full menu"}
                  <ArrowRight size={15} />
                </button>
              )}
            </div>

            {visibleItems.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-7 sm:gap-y-10 lg:grid-cols-4">
                {visibleItems.map((item) => (
                  <ProductCard
                    key={item.id}
                    item={item}
                    onAdd={setSelectedItem}
                  />
                ))}
              </div>
            ) : (
              <p className="py-12 text-center text-sm text-roast/60">
                No items available in this category yet.
              </p>
            )}
          </div>
        </section>

        {/* SEASONAL FEATURE */}
        <section className="bg-cream-100 px-5 py-10 sm:px-8 md:px-12 md:py-14">
          <div className="mx-auto grid max-w-7xl items-center gap-7 md:grid-cols-2 md:gap-12">
            <div className="order-2 md:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                Seasonal special
              </p>

              <h2 className="mt-3 max-w-sm font-serif text-3xl leading-tight sm:text-4xl">
                A little sweetness in every season.
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-6 text-roast/65">
                Discover fresh seasonal flavours and special treats
                selected for your next visit.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory("Desserts");
                  setShowAll(true);
                  document.getElementById("menu")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:text-roast"
              >
                Discover desserts
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="order-1 overflow-hidden rounded-2xl md:order-2">
              <img
                src={cheesecake}
                alt="Seasonal dessert selection"
                loading="lazy"
                className="aspect-[5/3] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* QUICK LINKS */}
        <section className="px-5 py-10 sm:px-8 md:px-12 md:py-14 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 md:grid-cols-4">
            {[
              {
                title: "Order Online",
                text: "Your favourites, made easy.",
                link: "/order-online",
                label: "Order now",
                icon: ShoppingBag,
              },
              {
                title: "Private Events",
                text: "Gather for something special.",
                link: "/private-events-catering",
                label: "Learn more",
                icon: CalendarDays,
              },
              {
                title: "My Mickey's",
                text: "Discover your rewards.",
                link: "/my-mickeys",
                label: "Explore rewards",
                icon: Gift,
              },
              {
                title: "Find Us",
                text: "Plan your next visit.",
                link: "/contact",
                label: "Get directions",
                icon: MapPin,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.link}
                  className={`group px-4 text-center sm:px-6 ${
                    index % 2 === 1 ? "border-l border-roast/10" : ""
                  } md:border-l md:border-roast/10 md:first:border-l-0`}
                >
                  <Icon
                    size={21}
                    strokeWidth={1.5}
                    className="mx-auto text-roast transition-colors group-hover:text-terracotta"
                  />

                  <h3 className="mt-3 font-serif text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-roast/55">
                    {item.text}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-terracotta">
                    {item.label}
                    <ArrowRight size={13} />
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* MINIMAL FOOTER */}
        <footer className="border-t border-roast/10 px-5 py-6 text-center">
          <p className="font-serif text-lg">Mickey's Café & Lounge</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-roast/50">
            Good food. Good company.
          </p>
        </footer>
      </main>

      {/* DEMO SELECTION NOTICE */}
      {selectedItem && (
        <div
          role="status"
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm rounded-xl bg-roast p-4 text-sm text-white shadow-xl"
        >
          <p className="font-semibold">{selectedItem.name}</p>
          <p className="mt-1 text-xs text-white/70">
            Connect your ordering system to add this item to the cart.
          </p>
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            className="mt-3 text-xs font-semibold text-terracotta-light"
          >
            Dismiss
          </button>
        </div>
      )}
    </>
  );
}
