import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

const Visit = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="visit" className="section-padding bg-espresso" ref={ref}>
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.35em] uppercase text-butter mb-4">
              Come Visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground leading-tight mb-10">
              Find <em>us</em>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-butter flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm font-medium text-primary-foreground mb-1">Address</p>
                  <p className="font-body text-sm font-light text-primary-foreground/70 leading-relaxed">
                    No. 12, Jalan Tengah,<br />
                    PJ New Town, 46000<br />
                    Petaling Jaya, Selangor
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-butter flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm font-medium text-primary-foreground mb-1">Opening Hours</p>
                  <p className="font-body text-sm font-light text-primary-foreground/70">
                    Open daily · 8:00 am – 10:00 pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-butter flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm font-medium text-primary-foreground mb-1">Get in Touch</p>
                  <p className="font-body text-sm font-light text-primary-foreground/70">
                    Walk-ins welcome · Cake orders via Instagram
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="https://www.instagram.com/labelle_bakehouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-[0.25em] uppercase text-espresso bg-butter/90 hover:bg-butter px-6 py-3 transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://maps.google.com/?q=Labelle+Bakehouse+PJ+New+Town"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-[0.25em] uppercase text-primary-foreground/60 hover:text-primary-foreground border-b border-primary-foreground/30 hover:border-primary-foreground/60 pb-0.5 transition-all duration-300"
              >
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="image-editorial aspect-[4/5]"
          >
            <img
              src="/images/interior-3.jpg"
              alt="Inside Labelle Bakehouse"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
