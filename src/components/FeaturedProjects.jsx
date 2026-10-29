import { useState } from "react";
import { projectsData, reviewsData } from "./projectsData";

export default function FeaturedProjects() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full bg-[#F1F1F1] relative z-20 rounded-t-[3rem] -mt-20 md:-mt-24 shadow-[0_-25px_50px_rgba(0,0,0,0.15)] pt-16 pb-32 md:pb-44 font-sans overflow-hidden"
    >
      <div className="container mx-auto px-5">
        {/* Featured Projects Section Header */}
        <h2 className="text-4xl font-semibold mb-10">Featured projects</h2>

        {/* Grid for Projects */}
        <div className="mb-20">
          <div className="border-t border-gray-300 gap-y-10 gap-x-6 grid md:grid-cols-2 py-10">
            {projectsData.map((project) => (
              <div key={project.id} className="featured-project relative group">
                <div className="text-sm uppercase mb-4 flex items-center">
                  <span className="w-2 h-2.5 flex-shrink-0 rounded-full bg-current mr-2" />
                  <span>{project.title}</span>
                </div>

                <a
                  className="overflow-hidden md:overflow-visible relative mb-4 block rounded-lg"
                  href={project.link}
                >
                  <div className="rounded-lg transition-transform duration-500 group-hover:scale-95 overflow-hidden">
                    <img
                      className="w-full h-auto object-cover rounded transition-transform duration-700 group-hover:scale-110"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>

                  <h2 className="text-5xl lg:text-7xl text-emerald-500 m-0 z-10 uppercase font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.title.split("").map((char, index) => (
                      <span key={index} className="inline-block">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </h2>
                </a>

                <div className="flex flex-wrap items-start gap-2">
                  {project.tags.map((tag, idx) => (
                    <a
                      key={idx}
                      className="px-4 py-1.5 border border-gray-400 rounded-full text-xs uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
                      href="#"
                    >
                      <span>{tag}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full uppercase text-sm tracking-wider hover:bg-gray-800 transition"
              href="https://ochi.design/clients-success-stories-presentation-design/"
            >
              <span>View all case studies</span>
              <span className="w-2 h-2 rounded-full bg-white inline-block" />
            </a>
          </div>
        </div>

        {/* Clients' Reviews Section */}
        <h2 className="text-4xl font-semibold mb-10">Clients’ reviews</h2>

        <div className="border-b border-gray-300 mb-20">
          {reviewsData.map((review, index) => (
            <div key={review.id} className="border-t border-gray-300">
              <div className="py-4 grid grid-cols-12 gap-x-4 items-center">
                <div className="col-span-6 lg:col-span-3">
                  <a className="hover:underline transition duration-300" href="#">
                    {review.company}
                  </a>
                </div>
                <div className="lg:col-span-3 hidden lg:block text-gray-500">
                  <span>Services:</span>
                </div>
                <div className="lg:col-span-3 hidden lg:block">
                  <span>{review.client}</span>
                </div>
                <div className="col-span-6 lg:col-span-3 text-right">
                  <button
                    className="uppercase hover:underline font-medium text-sm"
                    type="button"
                    onClick={() => toggleAccordion(index)}
                  >
                    {openAccordion === index ? "Close" : "Read"}
                  </button>
                </div>
              </div>

              {openAccordion === index && (
                <div className="grid gap-y-6 gap-x-4 lg:grid-cols-12 py-8">
                  <div className="lg:col-span-3 lg:col-start-4">
                    <p className="mb-4 lg:hidden text-gray-500">Services:</p>
                    <div className="flex flex-wrap lg:flex-col items-start gap-2">
                      {review.services.map((service, idx) => (
                        <a
                          key={idx}
                          className="px-3 py-1 border border-gray-400 rounded-full text-xs uppercase hover:bg-black hover:text-white transition"
                          href="#"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 lg:col-start-7">
                    <p className="mb-4 lg:hidden font-medium">{review.client}</p>
                    <div className="w-24 h-24 rounded-lg overflow-hidden mb-5">
                      <img
                        className="w-full h-full object-cover"
                        src={review.image}
                        alt={review.client}
                      />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Banner Cards Section */}
        <div className="grid gap-4 sm:grid-cols-12 pb-20">
          <div className="h-80 rounded-xl relative bg-[#004D43] text-emerald-300 sm:col-span-12 lg:col-span-4 flex flex-col justify-between p-6">
            <div className="flex-1 flex items-center justify-center">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                alt="Ochi Logo"
                className="h-20"
              />
            </div>
            <div>
              <span className="border border-emerald-400/40 text-xs px-3 py-1 rounded-full">
                ©2019–2025
              </span>
            </div>
          </div>

          <a
            className="h-80 rounded-xl relative bg-zinc-900 text-white sm:col-span-6 lg:col-span-4 flex flex-col justify-between p-6 hover:opacity-95 transition"
            href="https://clutch.co/profile/ochi-presentation-design"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                alt="Clutch Logo"
                className="h-20"
              />
            </div>
            <div>
              <span className="border border-white/30 text-xs px-3 py-1 rounded-full">
                Rating 5.0 on Clutch
              </span>
            </div>
          </a>

          <a
            className="h-80 rounded-xl relative bg-zinc-900 text-white sm:col-span-6 lg:col-span-4 flex flex-col justify-between p-6 hover:opacity-95 transition"
            href="https://thefutur.com/alumni"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                alt="Futur Logo"
                className="h-20"
              />
            </div>
            <div>
              <span className="border border-white/30 text-xs px-3 py-1 rounded-full">
                Business Bootcamp Alumni
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}