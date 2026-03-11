import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const categories = [
  { id: "signatures", label: "Signatures" },
  { id: "pastries", label: "Pastries & Breads" },
  { id: "cakes", label: "Cakes & Desserts" },
  { id: "mains", label: "Mains & Brunch" },
  { id: "beverages", label: "Beverages" },
];

const signatures = [
  {
    name: "Pandan Yammy Cake",
    desc: "Pandan chiffon layered with gula melaka cream and toasted coconut",
    price: "RM 14.90",
    image: "/images/cake-1.webp",
    tag: "Must Try",
  },
  {
    name: "Classic Tiramisu",
    desc: "Italian mascarpone, espresso-soaked ladyfingers, dusted cocoa",
    price: "RM 15.90",
    image: "/images/tiramisu.jpg",
    tag: "Best Seller",
  },
  {
    name: "Labelle's Big Breakfast",
    desc: "Eggs, chicken sausage, sautéed mushrooms, toast, baked beans, fresh greens",
    price: "RM 22.90",
    image: "/images/big-breakfast.jpg",
    tag: "House Favourite",
  },
];

const menuData: Record<string, { name: string; desc?: string; price: string }[]> = {
  pastries: [
    { name: "Butter Croissant", desc: "Flaky, golden, classically laminated", price: "RM 7.90" },
    { name: "Sweet Strawberry Cromboloni", desc: "Filled with strawberry cream, sugar-dusted", price: "RM 9.90" },
    { name: "Poppyseed Bagel", desc: "Chewy, dense, lightly toasted", price: "RM 6.90" },
    { name: "Danish Pastry", desc: "Seasonal fruit, vanilla custard", price: "RM 8.90" },
    { name: "Sourdough Loaf", desc: "Whole loaf, slow-fermented 24 hours", price: "RM 16.90" },
    { name: "Garlic Focaccia", desc: "Rosemary, sea salt, olive oil", price: "RM 12.90" },
    { name: "Chocolate Twist", desc: "Dark chocolate, laminated dough", price: "RM 8.50" },
    { name: "Almond Croissant", desc: "Frangipane-filled, sliced almonds", price: "RM 9.90" },
  ],
  cakes: [
    { name: "Pandan Yammy Cake", desc: "Gula melaka cream, toasted coconut", price: "RM 14.90" },
    { name: "Classic Tiramisu", desc: "Mascarpone, espresso, cocoa", price: "RM 15.90" },
    { name: "Burnt Cheesecake", desc: "Basque-style, creamy centre", price: "RM 14.90" },
    { name: "Chocolate Ganache Cake", desc: "Rich dark chocolate, layered sponge", price: "RM 16.90" },
    { name: "Seasonal Fruit Tart", desc: "Fresh fruit, pastry cream, shortcrust", price: "RM 13.90" },
    { name: "Lemon Meringue Slice", desc: "Torched meringue, tangy curd", price: "RM 12.90" },
  ],
  mains: [
    { name: "Labelle's Big Breakfast", desc: "Eggs, chicken sausage, mushrooms, toast, beans", price: "RM 22.90" },
    { name: "Classic Chicken Lasagna", desc: "Béchamel, mozzarella, slow-cooked ragù", price: "RM 21.90" },
    { name: "Aglio Olio Pasta", desc: "Garlic, chilli flakes, olive oil, prawns", price: "RM 19.90" },
    { name: "Club Sandwich", desc: "Grilled chicken, egg, lettuce, house sauce", price: "RM 18.90" },
    { name: "Eggs Benedict", desc: "Poached eggs, hollandaise, English muffin", price: "RM 20.90" },
    { name: "Mushroom Risotto", desc: "Arborio rice, mixed mushrooms, parmesan", price: "RM 22.90" },
  ],
  beverages: [
    { name: "Specialty Latte", desc: "Single-origin espresso, steamed milk", price: "RM 12.90" },
    { name: "Matcha Latte", desc: "Ceremonial-grade, oat milk option", price: "RM 14.90" },
    { name: "Artisan Hot Chocolate", desc: "Belgian chocolate, milk foam", price: "RM 13.90" },
    { name: "Fresh Fruit Smoothie", desc: "Seasonal blend, no added sugar", price: "RM 15.90" },
    { name: "Iced Lemon Tea", desc: "House-brewed, lightly sweetened", price: "RM 8.90" },
    { name: "Cold Brew", desc: "18-hour steep, smooth and bold", price: "RM 13.90" },
    { name: "Cappuccino", desc: "Double shot, velvety foam", price: "RM 11.90" },
    { name: "Fresh Orange Juice", desc: "Squeezed to order", price: "RM 12.90" },
  ],
};

const categoryToDataKey: Record<string, string> = {
  pastries: "pastries",
  cakes: "cakes",
  mains: "mains",
  beverages: "beverages",
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("signatures");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navRef = useRef<HTMLDivElement>(null);
  const [navStuck, setNavStuck] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setNavStuck(window.scrollY > 340);

      // determine active section
      const offsets = categories.map((c) => {
        const el = sectionRefs.current[c.id];
        if (!el) return { id: c.id, top: Infinity };
        return { id: c.id, top: el.getBoundingClientRect().top - 140 };
      });
      const current = offsets.reduce((closest, item) =>
        item.top <= 0 && item.top > closest.top ? item : closest,
        { id: categories[0].id, top: -Infinity }
      );
      if (current.id !== activeCategory) setActiveCategory(current.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCategory]);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Menu Hero */}
      <section className="relative pt-12 pb-8 md:pt-16 md:pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/pastry-display.webp"
            alt="Labelle Bakehouse pastry display"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="relative z-10 content-max px-6 md:px-12 lg:px-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-8 md:mb-12"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-3"
              >
                Labelle Bakehouse
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground"
              >
                Our <em>Menu</em>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-sm font-light text-muted-foreground max-w-sm leading-relaxed md:text-right"
            >
              Freshly baked every morning. All items are pork-free.
              <br className="hidden md:block" />
              Prices in RM. Dine-in &amp; takeaway available.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <div
        ref={navRef}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          navStuck
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background border-b border-border/50"
        }`}
      >
        <div className="content-max px-6 md:px-12 lg:px-20">
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-3 md:py-4 -mx-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`flex-shrink-0 px-4 py-2 font-body text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Signatures Section */}
      <section
        ref={(el) => { sectionRefs.current["signatures"] = el; }}
        id="signatures"
        className="py-12 md:py-20"
      >
        <div className="content-max px-6 md:px-12 lg:px-20">
          <SectionHeader label="Must Try" title="Signatures" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {signatures.map((item, i) => (
              <SignatureCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider image */}
      <div className="content-max px-6 md:px-12 lg:px-20">
        <div className="relative h-48 md:h-72 overflow-hidden rounded-sm">
          <img
            src="/images/pastry-counter.jpg"
            alt="Labelle pastry counter"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-espresso/20" />
        </div>
      </div>

      {/* Category Sections */}
      {categories.filter((c) => c.id !== "signatures").map((cat) => (
        <section
          key={cat.id}
          ref={(el) => { sectionRefs.current[cat.id] = el; }}
          id={cat.id}
          className="py-12 md:py-20"
        >
          <div className="content-max px-6 md:px-12 lg:px-20">
            <SectionHeader label={cat.label} title={cat.label} />
            <div className="mt-8 md:mt-10">
              <MenuList items={menuData[categoryToDataKey[cat.id]] || []} />
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="content-max px-6 md:px-12 lg:px-20 text-center">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-4">
            Come Visit
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-4">
            We'd love to see you
          </h2>
          <p className="font-body text-sm font-light text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
            40, Jalan 52/18, PJ New Town, 46200 Petaling Jaya.
            <br />
            Open daily 8 AM – 10 PM.
          </p>
          <div className="flex items-center justify-center gap-5">
            <a
              href="https://maps.app.goo.gl/LabellebakehousePJ"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase bg-accent text-accent-foreground px-6 py-3 hover:bg-accent/90 transition-colors"
            >
              Get Directions
            </a>
            <Link
              to="/"
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground border-b border-muted-foreground/40 hover:border-foreground pb-0.5 transition-all"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* ── Sub-components ── */

const SectionHeader = ({ label, title }: { label: string; title: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-2">{label}</p>
      <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">{title}</h2>
      <div className="editorial-divider !mx-0 mt-4" />
    </motion.div>
  );
};

const SignatureCard = ({
  item,
  index,
}: {
  item: (typeof signatures)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="image-editorial aspect-[4/5] mb-4 rounded-sm">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-block font-body text-[10px] tracking-[0.2em] uppercase text-accent mb-1.5">
            {item.tag}
          </span>
          <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-1">
            {item.name}
          </h3>
          <p className="font-body text-xs font-light text-muted-foreground leading-relaxed">
            {item.desc}
          </p>
        </div>
        <span className="font-body text-sm font-light text-foreground/70 flex-shrink-0 mt-6">
          {item.price}
        </span>
      </div>
    </motion.div>
  );
};

const MenuList = ({ items }: { items: { name: string; desc?: string; price: string }[] }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="divide-y divide-border/60">
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          className="flex items-baseline justify-between gap-4 py-4 md:py-5 group"
        >
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg md:text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
              {item.name}
            </h3>
            {item.desc && (
              <p className="font-body text-xs font-light text-muted-foreground mt-0.5 leading-relaxed">
                {item.desc}
              </p>
            )}
          </div>
          <span className="font-body text-sm font-light text-foreground/60 flex-shrink-0 tabular-nums">
            {item.price}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default MenuPage;
