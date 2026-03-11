import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bakery.jpg"
          alt="Labelle Bakehouse pastry display"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-espresso/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 content-max w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-xs md:text-sm tracking-[0.35em] uppercase text-butter mb-4 md:mb-6">
              PJ New Town · Petaling Jaya
            </p>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-[0.95] mb-6"
            >
              Freshly baked,
              <br />
              <span className="italic font-light">beautifully made.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            className="font-body text-sm md:text-base font-light text-primary-foreground/80 max-w-md leading-relaxed mb-8"
          >
            Artisan pastries, specialty cakes, and heartfelt food — made fresh every morning in our bakehouse kitchen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center gap-6"
          >
            <Link
              to="/menu"
              className="font-body text-xs tracking-[0.25em] uppercase text-espresso bg-butter/90 hover:bg-butter px-6 py-3 transition-colors duration-300"
            >
              View Menu
            </Link>
            <a
              href="#visit"
              className="font-body text-xs tracking-[0.25em] uppercase text-primary-foreground/70 hover:text-primary-foreground border-b border-primary-foreground/30 hover:border-primary-foreground/60 pb-0.5 transition-all duration-300"
            >
              Find Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 right-6 md:right-12 lg:right-20 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40 [writing-mode:vertical-lr]">
            Scroll
          </span>
          <div className="w-px h-8 bg-primary-foreground/20" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
