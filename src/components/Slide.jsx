import { motion } from "framer-motion";

const Slide = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className="bg-[#004D43] w-full rounded-t-[3rem] -mt-16 md:-mt-24 uppercase overflow-hidden tracking-tighter whitespace-nowrap pt-16 pb-28 lg:pt-24 lg:pb-36 relative z-20 shadow-[0_-25px_50px_rgba(0,0,0,0.2)]"
    >
      <div className="border-t border-b border-white/20 flex overflow-hidden py-4">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 12,
          }}
          className="flex shrink-0 items-center"
        >
          <h1 className="text-white font-black text-[22vw] leading-none tracking-tighter pr-10 select-none">
            we are ochi
          </h1>
          <h1 className="text-white font-black text-[22vw] leading-none tracking-tighter pr-10 select-none">
            we are ochi
          </h1>
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 12,
          }}
          className="flex shrink-0 items-center"
        >
          <h1 className="text-white font-black text-[22vw] leading-none tracking-tighter pr-10 select-none">
            we are ochi
          </h1>
          <h1 className="text-white font-black text-[22vw] leading-none tracking-tighter pr-10 select-none">
            we are ochi
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide;