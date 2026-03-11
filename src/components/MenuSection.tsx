import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

const categoryPreviews = [
  {
    title: "Pastries & Breads",
    note: "Fresh from the oven",
    items: ["Butter Croissants", "Sweet Strawberry Cromboloni", "Sourdough Loaves"],
  },
  {
    title: "Cakes & Desserts",
    note: "House favourites",
    items: ["Pandan Yammy Cake", "Classic Tiramisu", "Burnt Cheesecake"],
  },
  {
    title: "Brunch & Mains",
    note: "Comforting plates",
    items: ["Labelle’s Big Breakfast", "Classic Chicken Lasagna", "Eggs Benedict"],
  },
  {
    title: "Coffee & Drinks",
    note: "Slow sips",
    items: ["Specialty Coffee", "Matcha Latte", "Fresh Fruit Smoothies"],
  },
];

const highlights = [
  "Seasonal pastries baked fresh daily",
  "Comforting brunch plates for slow mornings",
  "Signature cakes and elegant sweet finishes",
];

const MenuSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Editorial intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-4">
              Menu Preview
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[0.95] mb-6">
              A taste of what
              <br />
              <em>awaits you.</em>
            </h2>

            <div className="editorial-divider !mx-0 mb-6" />

            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-md mb-8">
              From buttery viennoiserie to elegant cakes, hearty brunch plates, and comforting drinks,
              our menu is designed for slow mornings, lingering afternoons, and everyday indulgence.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10">
              <Link
                to="/menu"
                className="font-body text-xs tracking-[0.25em] uppercase text-espresso bg-butter/90 hover:bg-butter px-6 py-3 transition-colors duration-300 self-start"
              >
                View Full Menu
              </Link>

              <p className="font-body text-xs tracking-[0.18em] uppercase text-muted-foreground">
                Curated favourites · Bakes · Brunch · Drinks
              </p>
            </div>

            <div className="image-editorial aspect-[4/5] max-w-md">
              <img
                src="/images/big-breakfast.jpg"
                alt="Labelle Bakehouse signature brunch plate with toast, sausage, eggs, and sides"
                loading="lazy"
              />
            </div>
          </motion.div>
          
          {/* Designed preview grid */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
            >
              {categoryPreviews.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 26 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.14 + index * 0.08 }}
                  className="border border-border bg-card/60 p-6 md:px-6 md:py-7 h-full"
                >
                  <p className="font-body text-[10px] tracking-[0.28em] uppercase text-accent mb-3">
                    {category.note}
                  </p>

                  <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-5">
                    {category.title}
                  </h3>

                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-body text-sm font-light text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Filled lower section to remove dead space */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="mt-6 border border-border bg-card/40 p-6 md:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-10 items-start">
                <div>
                  <p className="font-body text-[10px] tracking-[0.28em] uppercase text-accent mb-3">
                    More to discover
                  </p>

                  <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                    Explore the full menu
                  </h3>

                  <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-xl mb-6">
                    Discover seasonal bakes, savoury plates, elegant desserts, and comforting drinks
                    curated with far more depth than shown in this preview.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <Link
                      to="/menu"
                      className="font-body text-xs tracking-[0.25em] uppercase text-foreground border-b border-foreground/20 hover:border-foreground/60 pb-1 transition-all duration-300 self-start"
                    >
                      Explore the Menu
                    </Link>

                    <p className="font-body text-xs tracking-[0.18em] uppercase text-muted-foreground">
                      Seasonal selections · House favourites
                    </p>
                  </div>
                </div>
                
                <div className="border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-6 flex flex-col justify-center text-left">
  <p className="font-body text-[10px] tracking-[0.28em] uppercase text-accent mb-4 text-left">
    House highlights
  </p>

  <ul className="space-y-4 max-w-sm">
    {highlights.map((item) => (
      <li
        key={item}
        className="flex items-start gap-3 font-body text-sm font-light text-muted-foreground leading-relaxed text-left"
      >
        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;