const Footer = () => {
  return (
    <footer className="bg-espresso border-t border-primary-foreground/10">
      <div className="content-max px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-semibold text-primary-foreground tracking-wide">
              Labelle <span className="font-light italic">Bakehouse</span>
            </p>
            <p className="font-body text-xs text-primary-foreground/40 mt-1">
              PJ New Town · Petaling Jaya
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/labelle_bakehouse/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/labellebakehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.foodpanda.my/ms/restaurant/i4jn/labelle-bakehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Foodpanda
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="font-body text-[11px] text-primary-foreground/30 tracking-wide">
            © {new Date().getFullYear()} Labelle Bakehouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
