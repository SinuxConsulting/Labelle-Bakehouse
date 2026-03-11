import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const Visit = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const addressLine1 = "No. 12, Jalan Tengah";
  const addressLine2 = "PJ New Town, 46000";
  const addressLine3 = "Petaling Jaya, Selangor";
  const fullAddress = `${addressLine1}, ${addressLine2}, ${addressLine3}`;

  const phoneDisplay = "014-291 6921";
  const phoneHref = "tel:+60142916921";

  const mapsQuery = encodeURIComponent(fullAddress);
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <section id="visit" className="section-padding bg-cream" ref={ref}>
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="font-body text-xs tracking-[0.35em] uppercase text-butter mb-4">
              Come Visit
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-espresso leading-[1.05] mb-8">
              Find <em>us</em>
            </h2>

            <p className="max-w-xl font-body text-base md:text-lg font-light text-espresso/70 leading-relaxed mb-10">
              Stop by Labelle Bakehouse for fresh bakes, coffee, and a warm space to unwind.
              Whether you are dropping in for a quick takeaway or a slower afternoon, we would
              love to have you.
            </p>

            <div className="space-y-5">
              <div className="rounded-[2rem] border border-espresso/15 bg-white/45 shadow-[0_10px_30px_rgba(60,35,20,0.06)] backdrop-blur-sm p-6">
                <div className="flex items-start gap-5">
                  <div className="mt-0.5 flex h-12 w-12 items-center justify-center rounded-full bg-butter/15 border border-butter/35 shrink-0">
                    <MapPin className="w-5 h-5 text-butter" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-espresso mb-2">
                      Address
                    </p>
                    <p className="font-body text-base md:text-[17px] font-light text-espresso/80 leading-relaxed">
                      {addressLine1}
                      <br />
                      {addressLine2}
                      <br />
                      {addressLine3}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-espresso/15 bg-white/45 shadow-[0_10px_30px_rgba(60,35,20,0.06)] backdrop-blur-sm p-6">
                <div className="flex items-start gap-5">
                  <div className="mt-0.5 flex h-12 w-12 items-center justify-center rounded-full bg-butter/15 border border-butter/35 shrink-0">
                    <Clock className="w-5 h-5 text-butter" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-espresso mb-2">
                      Opening Hours
                    </p>
                    <p className="font-body text-base md:text-[17px] font-light text-espresso/80 leading-relaxed">
                      Open daily · 8:00 am – 10:00 pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-espresso/15 bg-white/45 shadow-[0_10px_30px_rgba(60,35,20,0.06)] backdrop-blur-sm p-6">
                <div className="flex items-start gap-5">
                  <div className="mt-0.5 flex h-12 w-12 items-center justify-center rounded-full bg-butter/15 border border-butter/35 shrink-0">
                    <Phone className="w-5 h-5 text-butter" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-espresso mb-2">
                      Get in Touch
                    </p>
                    <p className="font-body text-base md:text-[17px] font-light text-espresso/80 leading-relaxed">
                      Walk-ins welcome · Call for enquiries and cake orders
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 md:gap-6">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.25em] uppercase text-espresso bg-butter hover:bg-butter/90 px-7 py-3.5 transition-colors duration-300"
                aria-label={`Call ${phoneDisplay}`}
              >
                <Phone className="w-4 h-4" />
                Call {phoneDisplay}
              </a>

              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-xs tracking-[0.22em] uppercase text-espresso/70 hover:text-espresso border-b border-espresso/20 hover:border-espresso/50 pb-1 transition-all duration-300"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </motion.div>
          
          {/* Right Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative min-h-[520px] lg:min-h-[680px]"
          >
            <div className="h-full w-full overflow-hidden rounded-[1.25rem] lg:rounded-[1.5rem] border border-espresso/10 bg-white shadow-[0_20px_60px_rgba(60,35,20,0.12)]">
              <iframe
                src="https://www.google.com/maps?q=Labelle+Bakehouse+PJ+New+Town&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "520px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Labelle Bakehouse location map"
                className="h-full w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Visit;