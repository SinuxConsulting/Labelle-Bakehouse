import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Star } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Review = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
};

const curatedReviews: Review[] = [
  {
    author: "Aina S.",
    rating: 5,
    relativeTime: "2 weeks ago",
    text:
      "Lovely bakehouse with a calm atmosphere. The croissants were beautifully flaky, and the coffee was balanced and smooth. It feels like the kind of place you’ll want to return to often.",
  },
  {
    author: "Melissa T.",
    rating: 5,
    relativeTime: "1 month ago",
    text:
      "The pandan cake was soft, fragrant, and not overly sweet. Everything looked thoughtfully made, and the space itself feels warm and polished without trying too hard.",
  },
  {
    author: "Jason K.",
    rating: 5,
    relativeTime: "3 weeks ago",
    text:
      "Came in for brunch and ended up staying longer than expected. Great coffee, generous portions, and pastries that felt genuinely fresh. One of the better cafe-bakehouse experiences in PJ.",
  },
  {
    author: "Farah N.",
    rating: 4,
    relativeTime: "1 month ago",
    text:
      "Really enjoyed the tiramisu and the specialty coffee pairing. The interior is elegant and comfortable, and the menu gives you enough variety without feeling overwhelming.",
  },
  {
    author: "Daniel L.",
    rating: 5,
    relativeTime: "2 weeks ago",
    text:
      "The big breakfast was hearty, well plated, and satisfying. Service felt warm and attentive, and the pastries at the counter made the whole place feel especially inviting.",
  },
  {
    author: "Shalini P.",
    rating: 5,
    relativeTime: "3 weeks ago",
    text:
      "A beautiful little place for pastries and quiet catchups. The cake selection was excellent, and everything from the food to the mood felt refined and consistent.",
  },
];

const Reviews = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 5200);

    return () => window.clearInterval(interval);
  }, [api]);

  const googleReviewsUrl =
    "https://www.reviewflow.my/#/r/labelle-bakehouse";

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-accent text-accent" : "text-espresso/15"
        }`}
      />
    ));

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <section className="section-padding bg-cream">
      <div className="content-max">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-4">
            Reviews
          </p>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-espresso mb-4">
            What <em>Guests Say</em>
          </h2>

          <p className="font-body text-sm md:text-base font-light text-espresso/70 leading-relaxed">
            Warm words from guests who return for our pastries, cakes, coffee, and slow bakehouse moments.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.22em] uppercase text-cream bg-espresso hover:bg-espresso/90 px-6 py-3 transition-colors duration-300"
          >
            Drop us a review!
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous reviews"
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full border border-espresso/15 bg-espresso/5 text-espresso/75 hover:bg-espresso/10 hover:text-espresso transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Next reviews"
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full border border-espresso/15 bg-espresso/5 text-espresso/75 hover:bg-espresso/10 hover:text-espresso transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
          </button>

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-5">
              {curatedReviews.map((review, index) => (
                <CarouselItem
                  key={`${review.author}-${index}`}
                  className="pl-5 basis-[88%] sm:basis-[70%] md:basis-1/2 xl:basis-1/3"
                >
                  <article className="h-full min-h-[320px] border border-espresso/12 bg-espresso/[0.03] p-6 md:p-7 flex flex-col">
                    <div className="mb-5 flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>

                    <p className="font-body text-sm md:text-[15px] leading-7 text-espresso/88 flex-1">
                      “{review.text}”
                    </p>

                    <div className="mt-8 pt-5 border-t border-espresso/10 flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full border border-espresso/12 bg-espresso/[0.04] flex items-center justify-center font-body text-xs tracking-[0.15em] text-espresso/80">
                        {getInitials(review.author)}
                      </div>

                      <div>
                        <p className="font-body text-sm font-medium text-espresso">
                          {review.author}
                        </p>
                        <p className="font-body text-xs text-espresso/45">
                          {review.relativeTime}
                        </p>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex md:hidden items-center justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous reviews"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 bg-espresso/5 text-espresso/75"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => api?.scrollNext()}
              aria-label="Next reviews"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 bg-espresso/5 text-espresso/75"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;