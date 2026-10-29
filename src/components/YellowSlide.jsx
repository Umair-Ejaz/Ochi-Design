const YellowSlide = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      className="bg-[#CDEA68] text-zinc-900 w-full rounded-t-[3rem] overflow-hidden relative z-30 -mt-20 md:-mt-28 pt-16 md:pt-24 pb-24 shadow-[0_-25px_50px_rgba(0,0,0,0.15)]"
    >
      {/* Intro Statement */}
      <div className="px-6 md:px-12 lg:px-16 pb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] font-normal leading-tight max-w-6xl tracking-tight">
          We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.
        </h1>
      </div>

      <div className="border-b border-zinc-900/20 w-full" />

      {/* 3-Column Info Grid */}
      <div className="px-6 md:px-12 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 text-base">
        <div className="md:col-span-4 lg:col-span-5">
          <h2 className="text-lg font-medium">What you can expect:</h2>
        </div>

        <div className="md:col-span-5 lg:col-span-4 space-y-4 text-zinc-800 leading-relaxed font-normal">
          <p>
            We don&apos;t just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: &quot;I want in!&quot;
          </p>
          <p>
            Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.
          </p>
          <p>
            Since 2019, we&apos;ve been the go-to partner for Yahoo, DoorDash, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo.
          </p>
        </div>

        <div className="md:col-span-3 lg:col-span-3 md:text-right space-y-2">
          <p className="font-medium mb-3">S:</p>
          <div className="flex flex-col md:items-end space-y-1">
            {["Instagram", "Behance", "Facebook", "Linkedin"].map((social) => (
              <a
                key={social}
                href="#"
                className="hover:underline underline-offset-4 text-zinc-900 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-zinc-900/20 w-full" />

      {/* How We Can Help Section */}
      <div className="px-6 md:px-12 lg:px-16 pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
            How we can help:
          </h2>
          <a
            href="https://ochi.design/presentation-design-agency-services/"
            className="inline-flex items-center gap-3 px-7 py-4 bg-zinc-900 text-white rounded-full uppercase text-xs md:text-sm tracking-wider font-medium hover:bg-zinc-800 transition-colors group"
          >
            <span>Read More</span>
            <div className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg group">
          <img
            className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="Ochi Presentation Agency Team"
          />
        </div>
      </div>
    </div>
  );
};

export default YellowSlide;