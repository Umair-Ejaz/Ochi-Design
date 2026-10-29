import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Slide from './components/Slide'
import YellowSlide from './components/YellowSlide'
import EyesPlaySection from './components/EyesPlaySection'
import FeaturedProjects from './components/FeaturedProjects'
import ReadyToStart from './components/ReadyToStart'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll v5 with smooth Lenis physics
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.08,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      },
    });

    const handleResize = () => {
      locomotiveScroll.resize();
    };

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main data-scroll-container className="w-full min-h-screen text-[#212121] bg-[#F1F1F1] selection:bg-[#CDEA68] selection:text-black">
      <Navbar />
      <HeroSection />
      <Slide />
      <YellowSlide />
      <EyesPlaySection />
      <FeaturedProjects />
      <ReadyToStart />
      <Footer />
    </main>
  );
};

export default App;