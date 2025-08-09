"use client";
import Image from "next/image";

export default function Creative() {
  return (
    <section id="creative" className="py-24 bg-gradient-to-br from-primary via-primary-600 to-primary-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Creative in Action
        </h2>
        <p className="text-white/70 text-center mt-3 max-w-2xl mx-auto">
          We create the ad-style creatives that make theme pages perform. Here are two examples we've run.
        </p>

        {/* Stage */}
        <div className="mt-12 relative mx-auto max-w-5xl h-[600px] md:h-[500px]">
          <div className="relative grid grid-cols-1 gap-6 md:block h-full">

            {/* Left poster */}
            <figure
              className="
                relative mx-auto w-full max-w-sm aspect-[3/4]
                rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden
                shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]
                transition-transform duration-300
                md:absolute md:left-1/2 md:-translate-x-[95%] md:rotate-[-1deg] md:translate-y-4 md:z-10
                hover:md:scale-[1.02] hover:md:-translate-y-1
              "
            >
              <div className="relative w-full h-full">
                <Image
                  src="/creative/Fragrance_Finder_Slide_4_V2.png"
                  alt="FragranceFinder.ai creative — quiz promotion"
                  fill
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                />
                {/* Overlay to hide any text/filenames */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
              </div>
              <figcaption className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] text-center text-white/70 text-sm md:static md:translate-x-0 md:w-auto md:mt-3">
                FragranceFinder.ai — quiz ad
              </figcaption>
            </figure>

            {/* Right poster */}
            <figure
              className="
                relative mx-auto w-full max-w-sm aspect-[3/4]
                rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden
                shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]
                transition-transform duration-300
                md:absolute md:left-1/2 md:-translate-x-[5%] md:rotate-[1deg] md:-translate-y-2 md:z-20
                hover:md:scale-[1.02] hover:md:-translate-y-2
              "
            >
              <div className="relative w-full h-full">
                <Image
                  src="/creative/CTA 3.png"
                  alt="AppAdvisor creative — college chances promo"
                  fill
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                />
                {/* Overlay to hide any text/filenames */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
              </div>
              <figcaption className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] text-center text-white/70 text-sm md:static md:translate-x-0 md:w-auto md:mt-3">
                AppAdvisor — feed post
              </figcaption>
            </figure>

          </div>
        </div>

        <p className="text-white/50 text-xs mt-14 text-center">
          Representative examples; creative is tailored per niche and platform.
        </p>
      </div>
    </section>
  );
} 