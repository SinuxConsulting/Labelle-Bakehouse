import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const bakes = [
  {
    name: "Pandan Yammy Cake",
    description: "Fluffy pandan sponge, fragrant and softly creamy — our most-loved cake.",
    image: "/images/cake-slice.jpg",
  },
  {
    name: "Classic Tiramisu",
    description: "Rich mascarpone layers with subtle cocoa and a smooth, delicate finish.",
    image: "/images/tiramisu.jpg",
  },
  {
    name: "Freshly Baked Pastries",
    description: "Crombolonis, bagels, croissants — golden from the oven each morning.",
    image: "/images/pastry-counter.jpg",
  },
];

const SignatureBakes = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="bakes" className="section-padding bg-cream" ref={ref}>
      <div className="content-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-4">
            From Our Bakehouse
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Signature <em>bakes</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8">
          {bakes.map((bake, i) => (
            <motion.div
              key={bake.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group"
            >
              <div className="image-editorial aspect-[4/5] mb-5">
                <img
                  src={bake.image}
                  alt={bake.name}
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-2">
                {bake.name}
              </h3>
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                {bake.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureBakes;
