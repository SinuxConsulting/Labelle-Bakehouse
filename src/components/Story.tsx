import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Story = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="section-padding bg-background" ref={ref}>
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="image-editorial aspect-[4/5] lg:aspect-[3/4]"
          >
            <img
              src="/images/storefront.webp"
              alt="Labelle Bakehouse storefront in PJ New Town"
              loading="lazy"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-8">
              A neighbourhood
              <br />
              <em className="font-light">bakehouse</em>
            </h2>
            <div className="editorial-divider !mx-0 mb-8" />
            <div className="space-y-5 font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-lg">
              <p>
                Tucked into the heart of PJ New Town, Labelle Bakehouse is where mornings begin with the scent of butter and flour. Every pastry is shaped by hand, every cake layered with intention.
              </p>
              <p>
                From golden croissants to our signature Pandan Yammy Cake, we bake what we believe in — honest, flavourful, and always fresh. Whether you're here for a quiet coffee, a weekend brunch, or a box of treats to take home, this is your neighbourhood bakehouse.
              </p>
              <p className="text-foreground font-normal">
                Pork-free · Open daily, 8am – 10pm
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
