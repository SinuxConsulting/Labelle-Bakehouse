import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Pastries & Breads",
    items: [
      "Poppyseed Bagels",
      "Sweet Strawberry Cromboloni",
      "Butter Croissants",
      "Danish Pastries",
      "Sourdough Loaves",
    ],
  },
  {
    title: "Cakes & Desserts",
    items: [
      "Pandan Yammy Cake",
      "Classic Tiramisu",
      "Burnt Cheesecake",
      "Chocolate Ganache Cake",
      "Seasonal Fruit Tarts",
    ],
  },
  {
    title: "Mains & Brunch",
    items: [
      "Labelle's Big Breakfast",
      "Classic Chicken Lasagna",
      "Aglio Olio Pasta",
      "Club Sandwiches",
      "Eggs Benedict",
    ],
  },
  {
    title: "Beverages",
    items: [
      "Specialty Coffee",
      "Matcha Latte",
      "Fresh Fruit Smoothies",
      "Artisan Hot Chocolate",
      "Iced Lemon Tea",
    ],
  },
];

const MenuSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-4">
              What We Serve
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6">
              The <em>menu</em>
            </h2>
            <div className="editorial-divider !mx-0 mb-6" />
            <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-sm">
              Beyond bakes — our kitchen serves hearty breakfasts, savoury mains, and afternoon treats, all pork-free and made fresh daily.
            </p>

            <div className="mt-8 image-editorial aspect-[3/4] hidden lg:block">
              <img
                src="/images/big-breakfast.jpg"
                alt="Labelle's Big Breakfast"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Menu grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                >
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-5">
                    {cat.title}
                  </h3>
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="font-body text-sm font-light text-muted-foreground flex items-center gap-3"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
