
export default function Footer() {
  const menuLinks = [
    { name: "Home", href: "https://ochi.design/" },
    { name: "Services", href: "https://ochi.design/presentation-design-agency-services/" },
    { name: "Our work", href: "https://ochi.design/clients-success-stories-presentation-design/" },
    { name: "About us", href: "https://ochi.design/ochi-team/" },
    { name: "Insights", href: "https://ochi.design/insights-presentation-design-agency/" },
    { name: "Contact us", href: "https://ochi.design/contact/" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/ochi_design/" },
    { name: "Behance", href: "https://www.behance.net/ochi_design" },
    { name: "Facebook", href: "https://www.facebook.com/OCHI-presentation-design-103605044779378/" },
    { name: "Linkedin", href: "https://www.linkedin.com/company/56403597" },
  ];

  return (
    <footer
      data-scroll
      data-scroll-section
      className="footer bg-[#F1F1F1] text-zinc-900 relative z-40 rounded-t-[3rem] -mt-24 md:-mt-32 shadow-[0_-25px_50px_rgba(0,0,0,0.18)] pt-20 pb-12 lg:pt-28 lg:pb-16 w-full font-sans"
    >
      {/* Curved top edge background element */}
      <span className="absolute w-full left-0 bottom-full -mb-1 h-4 rounded-t-[100%] bg-inherit" />

      <div className="container mx-auto px-5 lg:px-10">
        {/* Main Grid Section */}
        <div className="grid md:grid-cols-12 md:gap-y-4 mb-16">
          
          {/* Left Column Big Heading */}
          <div className="md:col-span-5 lg:col-span-6">
            <h3 className="text-5xl md:text-5xl lg:text-[6vw] uppercase font-bold leading-none tracking-tighter mb-0">
              eye- <br />
              opening
            </h3>
          </div>

          {/* Right Column Content */}
          <div className="md:col-span-7 lg:col-span-6 mt-8 md:mt-0">
            <h3 className="text-5xl md:text-5xl lg:text-[6vw] uppercase font-bold leading-none tracking-tighter mb-10">
              presentations
            </h3>

            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              
              {/* Menu Nav Links */}
              <div className="md:order-last md:flex md:justify-end lg:pr-10">
                <div>
                  <p className="mb-4 text-sm font-medium text-zinc-500">M:</p>
                  <ul className="space-y-2 leading-relaxed text-sm lg:text-base">
                    {menuLinks.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          className="hover:underline underline-offset-4 transition-all"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <p className="mb-4 text-sm font-medium text-zinc-500">S:</p>
                <ul className="space-y-2 leading-relaxed text-sm lg:text-base">
                  {socialLinks.map((social, idx) => (
                    <li key={idx}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline underline-offset-4 transition-all"
                      >
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Locations & Email */}
              <div className="grid gap-8 col-span-2 md:col-span-1">
                <div className="leading-relaxed text-sm lg:text-base">
                  <p className="mb-4 font-medium text-zinc-500">L:</p>
                  <address className="not-italic space-y-1">
                    <span className="block hover:underline cursor-pointer">
                      202-1965 W 4th Ave
                    </span>
                    <span className="block hover:underline cursor-pointer">
                      Vancouver, Canada
                    </span>
                    <br />
                    <span className="block hover:underline cursor-pointer">
                      30 Chukarina St
                    </span>
                    <span className="block hover:underline cursor-pointer">
                      Lviv, Ukraine
                    </span>
                  </address>
                </div>

                <div className="leading-relaxed text-sm lg:text-base">
                  <p className="mb-4 font-medium text-zinc-500">E:</p>
                  <a
                    className="hover:underline underline-offset-4"
                    href="mailto:hello@ochi.design"
                  >
                    hello@ochi.design
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Legal / Logo Row */}
        <div className="grid md:grid-cols-12 gap-y-6 md:items-end pt-8 border-t border-zinc-300/60">
          
          {/* Logo */}
          <div className="mb-6 md:mb-0 md:col-span-5 lg:col-span-6">
            <a className="inline-flex text-zinc-900" href="https://ochi.design">
              <svg
                width="72"
                height="30"
                viewBox="0 0 72 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
                  fill="currentColor"
                />
                <path
                  d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
                  fill="currentColor"
                />
                <path
                  d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
                  fill="currentColor"
                />
                <path
                  d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
                  fill="currentColor"
                />
                <path
                  d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="opacity-40 text-sm md:col-span-4 lg:col-span-4">
            © ochi design 2026.{" "}
            <a
              className="hover:underline"
              href="https://ochi.design/privacy/"
            >
              Legal Terms
            </a>
          </div>

          {/* Credit */}
          <div className="md:text-right opacity-40 text-sm md:col-span-3 lg:col-span-2">
            <a className="hover:underline" href="#" target="_blank" rel="noreferrer">
              Website by Obys
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}