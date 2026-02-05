import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
import projectsData from "../schema.json" with { type: "json" };
import AnimateOnScroll from "./components/AnimateOnScroll";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-light-bg)]">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center justify-center dot-matrix-grid px-4 relative overflow-hidden" aria-label="Hero section">
        {/* Radial Gradient Background - Top Center */}
        <div 
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: '0%',
            height: '800px',
            background: 'radial-gradient(circle at center top, rgba(253, 133, 58, 0.15) 0%, rgba(243, 241, 239, 0.45) 50%, transparent 100%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <AnimateOnScroll animation="scale-in">
            <Image src="/vyasan.png" alt="Akhilvyasan - Experience Designer portrait" width={165} height={210} className="mb-4 mx-auto w-24 sm:w-32 md:w-40 h-auto" priority />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={100}>
            <Image src="/main-title.svg" alt="Akhilvyasan - Experience Designer specializing in UX/UI Design" width={705} height={214} className="mb-4 mx-auto w-full max-w-[280px] sm:max-w-[400px] md:max-w-[568px] lg:max-w-[705px] h-auto" priority />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={200}>
            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-semibold text-[var(--color-17-17-17)] text-center max-w-[568px] mx-auto mb-8 sm:mb-10 md:mb-[42px] leading-relaxed px-4">I am an Experience Designer with 3 years of expertise, enthusiastic about creating functional & interactive products with a strong aesthetic sense.</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={300}>
            <div className="flex items-center justify-center gap-[10px]">
            <div className="bg-white rounded-full p-2 sm:p-3 md:p-[14px] shadow-[-3px_-7px_4px_0px_rgba(0,0,0,0.15)] backdrop-blur-[15px] border-2 border-transparent" style={{
              background: 'linear-gradient(white, white) padding-box, radial-gradient(circle, #FFFFFF 0%, #FFFFFF00 100%) border-box'
            }}>
              <div className="flex items-center gap-3 sm:gap-4 md:gap-[20px] mr-2 sm:mr-3 md:mr-[14px]">
                <button type="button" className="bg-[var(--color-primary)] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-medium flex items-center gap-2 sm:gap-3 md:gap-[14px]" aria-label="Download Resume">
                  Resume
                  <Image src="/arrow.svg" alt="" width={19} height={19} className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </button>
                <button type="button" className="cursor-pointer" aria-label="Connect on LinkedIn">
                  <Image src="/linkedind.svg" alt="LinkedIn profile" width={39} height={38} className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                </button>
              </div>
            </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FFF7F2]" aria-label="Featured projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold mb-4 sm:mb-5 md:mb-[18px] mx-auto text-center leading-tight">
              <span className="text-[var(--color-17-17-17)]">Featured</span>{" "}
              <span className="text-[var(--color-secondary-text)]">Projects.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={100}>
            <p className="text-sm sm:text-base text-[var(--color-secondary-text)] text-center max-w-[568px] mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-4">Over 3 years, I've designed and shipped high-impact products for consumers, B2B platforms, and internal operational tools</p>
          </AnimateOnScroll>

          {/* Projects */}
          <div className="space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-32">
            {projectsData.map((project, index) => {
              const isEven = index % 2 === 0;
              const imagePath = project.image.replace("public/", "/");
              
              return (
                <AnimateOnScroll 
                  key={index}
                  animation={isEven ? "fade-in-right" : "fade-in-left"}
                  delay={100 * index}
                >
                  <article
                    className={`flex flex-col ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12`}
                    itemScope
                    itemType="https://schema.org/CreativeWork"
                  >
                  {/* Description Column */}
                  <div className="flex-1 w-full">
                    <div className="text-xs sm:text-sm text-[var(--color-17-17-17)] mb-3 sm:mb-4 md:mb-5">
                      {project.meta}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[var(--color-17-17-17)] mb-3 sm:mb-4 leading-tight" itemProp="name">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-[var(--color-secondary-text)] mb-4 sm:mb-5 md:mb-6 leading-relaxed" itemProp="description">
                      {project.description}
                    </p>
                    {"caseStudyHref" in project && project.caseStudyHref ? (
                      <Link
                        href={project.caseStudyHref}
                        className="inline-flex items-center gap-2 text-sm sm:text-base text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors"
                        aria-label={`View ${project.title} case study`}
                      >
                        <span>View case study</span>
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current w-4 h-4 sm:w-5 sm:h-5"
                          aria-hidden="true"
                        >
                          <path
                            d="M5.54175 13.4583L13.4584 5.54166"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.54175 5.54166H13.4584V13.4583"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center gap-2 text-sm sm:text-base text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
                        aria-label={`View ${project.title} case study`}
                      >
                        <span>View case study</span>
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current w-4 h-4 sm:w-5 sm:h-5"
                          aria-hidden="true"
                        >
                          <path
                            d="M5.54175 13.4583L13.4584 5.54166"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.54175 5.54166H13.4584V13.4583"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Image Column */}
                  <div className="flex-1 w-full">
                    <Image
                      src={imagePath}
                      alt={`${project.title} - ${project.description}`}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg shadow-lg"
                      itemProp="image"
                    />
                  </div>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold mb-4 sm:mb-5 md:mb-[18px] mx-auto text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 leading-tight">
              <span className="text-[var(--color-17-17-17)]">Leveling</span>{" "}
              <span className="text-[var(--color-secondary-text)]">up each day.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={100}>
            <p className="text-sm sm:text-base text-[var(--color-secondary-text)] text-center max-w-[568px] mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-4">My skills span from understanding user needs to solving complex problems, enabling well-rounded digital experiences.</p>
          </AnimateOnScroll>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6" role="list">
            {/* Product Design */}
            <AnimateOnScroll animation="fade-in-up" delay={0}>
              <article className="bg-[#FFF7F2] rounded-lg p-5 sm:p-6 shadow-[0_1px_4px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.2)]" role="listitem">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFEDDD] flex items-center justify-center mb-3 sm:mb-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <Image src="/icons/product_design.svg" alt="" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <h3 className="h4-subheading sm:text-2xl md:text-[28px] font-semibold text-[var(--color-17-17-17)] mb-2 sm:mb-3">Product Design</h3>
              <p className="small-meta sm:text-base text-[var(--color-17-17-17)] leading-relaxed">I'm continuously developing my skill set to address every stage of product design, extending beyond traditional UX/UI.</p>
              </article>
            </AnimateOnScroll>

            {/* Visual Design */}
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <article className="bg-[#FFF7F2] rounded-lg p-5 sm:p-6 shadow-[0_1px_4px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.2)]" role="listitem">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFEDDD] flex items-center justify-center mb-3 sm:mb-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <Image src="/icons/visual_design.svg" alt="" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <h3 className="h4-subheading sm:text-2xl md:text-[28px] font-semibold text-[var(--color-17-17-17)] mb-2 sm:mb-3">Visual Design</h3>
              <p className="small-meta sm:text-base text-[var(--color-17-17-17)] leading-relaxed">Creating visually appealing and well-crafted designs is what I enjoy most.</p>
              </article>
            </AnimateOnScroll>

            {/* No code development */}
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <article className="bg-[#FFF7F2] rounded-lg p-5 sm:p-6 shadow-[0_1px_4px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.2)]" role="listitem">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFEDDD] flex items-center justify-center mb-3 sm:mb-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <Image src="/icons/no_code.svg" alt="" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <h3 className="h4-subheading sm:text-2xl md:text-[28px] font-semibold text-[var(--color-17-17-17)] mb-2 sm:mb-3">No code development</h3>
              <p className="small-meta sm:text-base text-[var(--color-17-17-17)] leading-relaxed">Well-versed in web fundamentals and capable of building functional websites without writing code.</p>
              </article>
            </AnimateOnScroll>

            {/* Interaction Design */}
            <AnimateOnScroll animation="fade-in-up" delay={300}>
              <article className="bg-[#FFF7F2] rounded-lg p-5 sm:p-6 shadow-[0_1px_4px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.2)]" role="listitem">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFEDDD] flex items-center justify-center mb-3 sm:mb-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <Image src="/icons/interaction_design.svg" alt="" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <h3 className="h4-subheading sm:text-2xl md:text-[28px] font-semibold text-[var(--color-17-17-17)] mb-2 sm:mb-3">Interaction Design</h3>
              <p className="small-meta sm:text-base text-[var(--color-17-17-17)] leading-relaxed">I enjoy bringing subtle motion and interactivity into my designs.</p>
              </article>
            </AnimateOnScroll>

            {/* Design Systems */}
            <AnimateOnScroll animation="fade-in-up" delay={400}>
              <article className="bg-[#FFF7F2] rounded-lg p-5 sm:p-6 shadow-[0_1px_4px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.2)]" role="listitem">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFEDDD] flex items-center justify-center mb-3 sm:mb-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <Image src="/icons/design_systems.svg" alt="" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <h3 className="h4-subheading sm:text-2xl md:text-[28px] font-semibold text-[var(--color-17-17-17)] mb-2 sm:mb-3">Design Systems</h3>
              <p className="small-meta sm:text-base text-[var(--color-17-17-17)] leading-relaxed">Experienced in creating and effectively maintaining design systems.</p>
              </article>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="" aria-label="Contact section">
        <div className="bg-[#272727] min-h-[280px] sm:min-h-[320px] md:min-h-[380px] relative">
          {/* Shapes Container - Full Width */}
          <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] overflow-hidden">
            {/* Shape 1 - Top Left */}
            <div className="absolute top-3 left-4 sm:top-4 sm:left-6 md:top-5 md:left-12" aria-hidden="true">
              <Image src="/shapes/1.svg" alt="" width={195} height={118} className="w-20 sm:w-32 md:w-40 lg:w-[195px] h-auto" />
            </div>
          
            {/* Shape 2 - Top Right */}
            <div className="absolute top-3 right-4 sm:top-4 sm:right-6 md:top-5 md:right-10" aria-hidden="true">
              <Image src="/shapes/2.svg" alt="" width={66} height={69} className="w-10 sm:w-12 md:w-14 lg:w-[66px] h-auto" />
            </div>
          
            {/* Shape 3 - Middle Right - Hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 right-[200px] lg:right-[350px] -translate-y-1/2" aria-hidden="true">
              <Image src="/shapes/3.svg" alt="" width={99} height={125} className="w-16 md:w-20 lg:w-[99px] h-auto" />
            </div>
          
            {/* Shape 4 - Bottom Left */}
            <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 md:bottom-5 md:left-12" aria-hidden="true">
              <Image src="/shapes/4.svg" alt="" width={125} height={130} className="w-16 sm:w-20 md:w-24 lg:w-[125px] h-auto" />
            </div>
          
            {/* Shape 5 - Bottom Right */}
            <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-6 md:bottom-5 md:right-12" aria-hidden="true">
              <Image src="/shapes/5.svg" alt="" width={94} height={137} className="w-12 sm:w-16 md:w-20 lg:w-[94px] h-auto" />
            </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center px-4">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#F5F5F5] max-w-[568px] mx-auto text-center leading-tight mb-4 sm:mb-5 md:mb-6">Thanks for visiting. I'm always happy to <span className="text-[var(--color-primary)]">connect</span>.</p>
            <button type="button" className="bg-[var(--color-primary)] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium flex items-center gap-3 sm:gap-[14px]" aria-label="Contact me">Say Hi</button>
          </div>
          </div>
          
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[var(--color-light-bg)] py-8 sm:py-10 md:py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Footer Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8">
            {/* Logo */}
            <div className="mb-6 md:mb-0">
              <Image src="/logo.svg" alt="Akhilvyasan - Experience Designer logo" width={193} height={33} className="w-40 sm:w-44 md:w-48 h-auto" />
            </div>

            {/* Featured List */}
            <nav aria-label="Featured projects">
              <h3 className="text-sm sm:text-base font-medium text-[var(--color-17-17-17)] mb-3 sm:mb-4">Featured</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#work" className="text-sm sm:text-base text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors">
                    Duxbe
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="text-sm sm:text-base text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors">
                    Total Campus Solution
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="text-sm sm:text-base text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors">
                    Dreamact
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="text-sm sm:text-base text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors">
                    Nolta
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Separator Line */}
          <div className="border-t border-[var(--color-2a-2a-2e)]/20 mb-6 sm:mb-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm sm:text-base text-[var(--color-17-17-17)]">© 2026 Designed & Developed by Akhilvyasan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
