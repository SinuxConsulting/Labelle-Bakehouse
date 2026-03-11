import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  { src: "/images/interior-1.webp", alt: "Bakehouse interior", span: "col-span-2 row-span-2" },
  { src: "/images/pastry-display.webp", alt: "Pastry display counter", span: "col-span-1 row-span-1" },
  { src: "/images/food-1.webp", alt: "Fresh food from Labelle", span: "col-span-1 row-span-1" },
  { src: "/images/interior-2.webp", alt: "Cafe seating area", span: "col-span-1 row-span-1" },
  { src: "/images/cake-1.webp", alt: "Specialty cake", span: "col-span-1 row-span-1" },
];

const SpaceGallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="space" className="section-padding bg-cream" ref={ref}>
      <div className="content-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-4">
            The Space
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Step <em>inside</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px]">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`image-editorial ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceGallery;
