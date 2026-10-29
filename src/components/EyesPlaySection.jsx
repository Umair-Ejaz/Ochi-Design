import { useState, useEffect } from "react";

export default function EyesPlaySection() {
  const [rotate, setRotate] = useState(0);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      // Calculate rotation angle
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      // Subtle pupil shift towards cursor for realistic 3D depth
      const distance = Math.min(Math.hypot(deltaX, deltaY) / 15, 18);
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
      className="eyes-section relative w-full h-screen overflow-hidden bg-[#F1F1F1] z-20"
    >
      {/* Background with Locomotive Scroll Parallax */}
      <div
        data-scroll
        data-scroll-speed="-0.7"
        className="absolute top-0 left-0 w-full h-full scale-125"
      >
        <img
          src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg"
          alt="Ochi Table Top View"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Floating Eyes with Locomotive Parallax Speed */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div data-scroll data-scroll-speed="0.3">
          <div className="flex items-center justify-center gap-6 sm:gap-10">
          
          {/* Left Eye */}
          <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-[#F4F4F4] flex items-center justify-center shadow-2xl relative">
            <div
              style={{
                transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
              }}
              className="w-3/5 h-3/5 rounded-full bg-[#212121] relative flex items-center justify-center transition-transform duration-100 ease-out shadow-inner"
            >
              {/* Rotating Pupil Ray / Reflection Container */}
              <div
                style={{ transform: `rotate(${rotate}deg)` }}
                className="w-full h-full flex items-center justify-start absolute top-0 left-0 transition-transform duration-75 ease-out"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F4F4F4] ml-2 shadow-sm" />
              </div>

              {/* Center PLAY Text */}
              <span className="uppercase text-white font-semibold text-sm sm:text-base tracking-widest z-10 select-none">
                Play
              </span>
            </div>
          </div>

          {/* Right Eye */}
          <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-[#F4F4F4] flex items-center justify-center shadow-2xl relative">
            <div
              style={{
                transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
              }}
              className="w-3/5 h-3/5 rounded-full bg-[#212121] relative flex items-center justify-center transition-transform duration-100 ease-out shadow-inner"
            >
              {/* Rotating Pupil Ray / Reflection Container */}
              <div
                style={{ transform: `rotate(${rotate}deg)` }}
                className="w-full h-full flex items-center justify-start absolute top-0 left-0 transition-transform duration-75 ease-out"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F4F4F4] ml-2 shadow-sm" />
              </div>

              {/* Center PLAY Text */}
              <span className="uppercase text-white font-semibold text-sm sm:text-base tracking-widest z-10 select-none">
                Play
              </span>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}