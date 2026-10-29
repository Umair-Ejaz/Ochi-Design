import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-16 relative z-10 min-h-screen flex flex-col justify-between"
    >
      {/* Big Titles */}
      <div className="mt-8">
        {["we create", "eye-opening", "presentations"].map((item, index) => (
          <div
            key={index}
            className="uppercase text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5vw] font-black leading-[0.82] tracking-tighter flex items-center gap-2 md:gap-4 overflow-hidden"
          >
            {index === 1 && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "12vw", opacity: 1 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                className="inline-block h-[7.5vw] sm:h-[6.5vw] md:h-[5.5vw] rounded-lg md:rounded-xl overflow-hidden self-center flex-shrink-0"
              >
                <img
                  src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                  alt="ochi highlight"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
            <span className="text-[#212121]">{item}</span>
          </div>
        ))}
      </div>

      {/* Subtext and Bottom Actions */}
      <div className="mt-20 ">
        <div className="border-t border-zinc-300 w-full mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm md:text-base text-zinc-800">
          <p className="font-normal">
            For innovation teams and forward-thinking brands
          </p>
          <p className="font-normal">
            Presentation and storytelling agency
          </p>
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="px-5 py-2 uppercase rounded-full border border-zinc-900 text-xs md:text-sm tracking-wider font-medium group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
              Start the project
            </span>
            <div className="w-9 h-9 rounded-full border border-zinc-900 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
              <span className="rotate-45 text-sm">↑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;