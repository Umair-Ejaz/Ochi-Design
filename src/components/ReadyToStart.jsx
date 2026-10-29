import { useState, useEffect } from "react";

export default function ReadyToStart() {
  const [rotate, setRotate] = useState(0);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      const distance = Math.min(Math.hypot(deltaX, deltaY) / 15, 14);
      const rad = Math.atan2(deltaY, deltaX);
      setPupilOffset({
        x: Math.cos(rad) * distance,
        y: Math.sin(rad) * distance,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className="w-full bg-[#CDEA68] relative z-30 rounded-t-[3rem] overflow-hidden shadow-[0_-25px_50px_rgba(0,0,0,0.18)] -mt-24 md:-mt-32 pt-24 md:pt-36 pb-36 md:pb-48"
    >
      <div className="relative flex flex-col justify-center items-center min-h-[85vh]">
        
        {/* Main Heading Stack */}
        <div className="text-center w-full z-10 select-none">
          <h2 className="text-[13vw] leading-[0.82] font-black uppercase text-zinc-900 tracking-tighter">
            <div>Ready</div>
            <div>to start</div>
            <div>the project?</div>
          </h2>
        </div>

        {/* Eye Movement Overlay Container with Locomotive Parallax */}
        <div className="my-10 lg:my-0 lg:absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div
            data-scroll
            data-scroll-speed="0.25"
            className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px]"
          >
            <div className="grid grid-cols-2 justify-center items-center gap-6 md:gap-8">
              
              {/* Left Eye */}
              <div className="w-full aspect-square rounded-full bg-[#F4F4F4] flex items-center justify-center shadow-xl">
                <div
                  style={{
                    transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
                  }}
                  className="w-3/5 h-3/5 rounded-full bg-[#212121] relative flex items-center justify-center transition-transform duration-100 ease-out shadow-inner"
                >
                  <div
                    style={{ transform: `rotate(${rotate}deg)` }}
                    className="w-full h-full flex items-center justify-start transition-transform duration-75 ease-out"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F4F4F4] ml-2" />
                  </div>
                </div>
              </div>

              {/* Right Eye */}
              <div className="w-full aspect-square rounded-full bg-[#F4F4F4] flex items-center justify-center shadow-xl">
                <div
                  style={{
                    transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
                  }}
                  className="w-3/5 h-3/5 rounded-full bg-[#212121] relative flex items-center justify-center transition-transform duration-100 ease-out shadow-inner"
                >
                  <div
                    style={{ transform: `rotate(${rotate}deg)` }}
                    className="w-full h-full flex items-center justify-start transition-transform duration-75 ease-out"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F4F4F4] ml-2" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="grid justify-center gap-y-4 items-center text-center z-30 mt-12">
          <div>
            <a
              className="inline-flex items-center gap-4 px-8 py-5 bg-zinc-900 text-white rounded-full uppercase text-xs sm:text-sm tracking-wider font-medium hover:bg-zinc-800 transition-colors shadow-lg"
              href="https://ochi.design/contact/"
            >
              <span>Start the project</span>
              <span className="w-2.5 h-2.5 rounded-full bg-white inline-block" />
            </a>
          </div>

          <span className="text-zinc-900 font-semibold text-xs uppercase tracking-widest my-1">
            OR
          </span>

          <div>
            <a
              className="inline-flex items-center gap-4 px-8 py-5 border border-zinc-900 text-zinc-900 rounded-full uppercase text-xs sm:text-sm tracking-wider font-medium hover:bg-zinc-900 hover:text-white transition-colors group"
              href="mailto:hello@ochi.design"
            >
              <span>hello@ochi.design</span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 group-hover:bg-white inline-block transition-colors" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}