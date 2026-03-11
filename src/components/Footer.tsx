import { Instagram, Facebook, ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-espresso border-t border-primary-foreground/10">
      <div className="content-max px-6 md:px-12 lg:px-20 py-12 md:py-16">
        {/* Top row kept, with social/platform icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-semibold text-primary-foreground tracking-wide">
              Labelle <span className="font-light italic">Bakehouse</span>
            </p>
            <p className="font-body text-xs text-primary-foreground/40 mt-1">
              PJ New Town · Petaling Jaya
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/labelle_bakehouse/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/10 text-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground/25 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href="https://www.facebook.com/labellebakehouse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/10 text-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground/25 transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href="https://www.foodpanda.my/ms/restaurant/i4jn/labelle-bakehouse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Foodpanda"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/10 text-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground/25 transition-colors"
            >
              <ShoppingBag className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom row updated to premium 3-part layout */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/10">
          <div className="flex flex-col items-center gap-3 text-center md:grid md:grid-cols-3 md:items-center md:gap-6">
            <p className="font-body text-[11px] md:text-xs tracking-[0.04em] text-primary-foreground/45 md:text-left">
              © {new Date().getFullYear()} Labelle Bakehouse, Petaling Jaya
            </p>

            <div className="font-body text-[11px] md:text-xs tracking-[0.04em] text-primary-foreground/45 md:text-center">
              Designed by{" "}
              <a
                href="https://sinuxconsulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-butter transition-colors underline-offset-4 hover:underline"
              >
                Sinux Consulting
              </a>
            </div>

            <p className="font-body text-[11px] md:text-xs tracking-[0.04em] text-primary-foreground/45 md:text-right">
              Freshly baked indulgence, served with warmth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;