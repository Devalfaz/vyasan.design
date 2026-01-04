import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
import projectsData from "../schema.json" with { type: "json" };

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-light-bg)]">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center justify-center dot-matrix-grid" aria-label="Hero section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image src="/vyasan.png" alt="Akhilvyasan - Experience Designer portrait" width={165} height={210} className="mb-4 mx-auto" priority />
          <Image src="/main-title.svg" alt="Akhilvyasan - Experience Designer specializing in UX/UI Design" width={705} height={214} className="mb-4 mx-auto" priority />
          <p className="h4-subheading text-[var(--color-17-17-17)] text-center max-w-[568px] mx-auto mb-[42px]">I am an Experience Designer with 3 years of expertise, enthusiastic about creating functional & interactive products with a strong aesthetic sense.</p>
          {/* a container with white bg, corner rounded, padding all of 14px, (storke radial, position inside, weight 2px, stops [0%, 100%] #FFFFFF, #FFFFFF00), drop shadow -3x -7y blur 4px spread 0px color black with 15% opacity and background blur of unifrom 15px */}
          {/* inside this is two columns, first column is an orange button with text "Resume" and a small arrow icon on right with in between 10px space, arrow icon is provided in public/arrow.svg and the next column is a linkedin icon with in between 10px space, linkedin icon is provided in public/linkedind.svg */}
          <div className="flex items-center justify-center gap-[10px]">
            <div className="bg-white rounded-full p-[14px] shadow-[-3px_-7px_4px_0px_rgba(0,0,0,0.15)] backdrop-blur-[15px] border-2 border-transparent" style={{
              background: 'linear-gradient(white, white) padding-box, radial-gradient(circle, #FFFFFF 0%, #FFFFFF00 100%) border-box'
            }}>
              <div className="flex items-center gap-[20px] mr-[14px]">
                <button type="button" className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-full button-text flex items-center gap-[14px]" aria-label="Download Resume">
                  Resume
                  <Image src="/arrow.svg" alt="" width={19} height={19} aria-hidden="true" />
                </button>
                <button type="button" className="cursor-pointer" aria-label="Connect on LinkedIn">
                  <Image src="/linkedind.svg" alt="LinkedIn profile" width={39} height={38} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen py-24" aria-label="Featured projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="h2-section mb-[18px] mx-auto text-center">
            <span className="text-[var(--color-17-17-17)]">Featured</span>{" "}
            <span className="text-[var(--color-secondary-text)]">Projects.</span>
          </h2>
          <p className="body-default text-[var(--color-secondary-text)] text-center max-w-[568px] mx-auto mb-24">Over 3 years, I've designed and shipped high-impact products for consumers, B2B platforms, and internal operational tools</p>

          {/* Projects */}
          <div className="space-y-32">
            {projectsData.map((project, index) => {
              const isEven = index % 2 === 0;
              const imagePath = project.image.replace("public/", "/");
              
              return (
                <article
                  key={index}
                  className={`flex items-center gap-12 ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                  itemScope
                  itemType="https://schema.org/CreativeWork"
                >
                  {/* Description Column */}
                  <div className="flex-1">
                    <div className="small-meta text-[var(--color-17-17-17)] mb-5">
                      {project.meta}
                    </div>
                    <h3 className="h3-card-title text-[var(--color-17-17-17)] mb-4" itemProp="name">
                      {project.title}
                    </h3>
                    <p className="body-large text-[var(--color-secondary-text)] mb-4" itemProp="description">
                      {project.description}
                    </p>
                    <button
                      type="button"
                      className="flex items-center gap-2 text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
                      aria-label={`View ${project.title} case study`}
                    >
                      <span>View case study</span>
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current"
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
                  </div>

                  {/* Image Column */}
                  <div className="flex-1">
                    <Image
                      src={imagePath}
                      alt={`${project.title} - ${project.description}`}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                      itemProp="image"
                    />
                  </div>
                </article>
              );
            })}
          </div>
          <h2 className="h2-section mb-[18px] mx-auto text-center mt-24">
            <span className="text-[var(--color-17-17-17)]">Leveling</span>{" "}
            <span className="text-[var(--color-secondary-text)]">up each day.</span>
          </h2>
          <p className="body-default text-[var(--color-secondary-text)] text-center max-w-[568px] mx-auto mb-24">My skills span from understanding user needs to solving complex problems, enabling well-rounded digital experiences.</p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {/* Product Design */}
            <article className="bg-[#FFEDDD] rounded-lg p-6 shadow-[0_1px_4px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.2)]" role="listitem">
              <div className="w-12 h-12 rounded-full bg-[var(--color-2a-2a-2e)] flex items-center justify-center mb-4">
                <Image src="/icons/product_design.svg" alt="" width={24} height={24} aria-hidden="true" />
              </div>
              <h3 className="h3-card-title text-[var(--color-17-17-17)] mb-3">Product Design</h3>
              <p className="body-default text-[var(--color-17-17-17)]">I'm continuously developing my skill set to address every stage of product design, extending beyond traditional UX/UI.</p>
            </article>

            {/* Visual Design */}
            <article className="bg-[#FFEDDD] rounded-lg p-6 shadow-[0_1px_4px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.2)]" role="listitem">
              <div className="w-12 h-12 rounded-full bg-[var(--color-2a-2a-2e)] flex items-center justify-center mb-4">
                <Image src="/icons/visual_design.svg" alt="" width={24} height={24} aria-hidden="true" />
              </div>
              <h3 className="h3-card-title text-[var(--color-17-17-17)] mb-3">Visual Design</h3>
              <p className="body-default text-[var(--color-17-17-17)]">Creating visually appealing and well-crafted designs is what I enjoy most.</p>
            </article>

            {/* No code development */}
            <article className="bg-[#FFEDDD] rounded-lg p-6 shadow-[0_1px_4px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.2)]" role="listitem">
              <div className="w-12 h-12 rounded-full bg-[var(--color-2a-2a-2e)] flex items-center justify-center mb-4">
                <Image src="/icons/no_code.svg" alt="" width={24} height={24} aria-hidden="true" />
              </div>
              <h3 className="h3-card-title text-[var(--color-17-17-17)] mb-3">No code development</h3>
              <p className="body-default text-[var(--color-17-17-17)]">Well-versed in web fundamentals and capable of building functional websites without writing code.</p>
            </article>

            {/* Interaction Design */}
            <article className="bg-[#FFEDDD] rounded-lg p-6 shadow-[0_1px_4px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.2)]" role="listitem">
              <div className="w-12 h-12 rounded-full bg-[var(--color-2a-2a-2e)] flex items-center justify-center mb-4">
                <Image src="/icons/interaction_design.svg" alt="" width={24} height={24} aria-hidden="true" />
              </div>
              <h3 className="h3-card-title text-[var(--color-17-17-17)] mb-3">Interaction Design</h3>
              <p className="body-default text-[var(--color-17-17-17)]">I enjoy bringing subtle motion and interactivity into my designs.</p>
            </article>

            {/* Design Systems */}
            <article className="bg-[#FFEDDD] rounded-lg p-6 shadow-[0_1px_4px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.2)]" role="listitem">
              <div className="w-12 h-12 rounded-full bg-[var(--color-2a-2a-2e)] flex items-center justify-center mb-4">
                <Image src="/icons/design_systems.svg" alt="" width={24} height={24} aria-hidden="true" />
              </div>
              <h3 className="h3-card-title text-[var(--color-17-17-17)] mb-3">Design Systems</h3>
              <p className="body-default text-[var(--color-17-17-17)]">Experienced in creating and effectively maintaining design systems.</p>
            </article>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24" aria-label="Contact section">
        <div className="bg-[#FFF8F2] max-h-[380px] relative">
          {/* Shapes Container - Full Width */}
          <div className="relative w-full h-[380px] overflow-hidden">
            {/* Shape 1 - Top Left */}
            <div className="absolute top-5 left-12" aria-hidden="true">
              <Image src="/shapes/1.svg" alt="" width={195} height={118} />
            </div>
          
            {/* Shape 2 - Top Right */}
            <div className="absolute top-5 right-10" aria-hidden="true">
              <Image src="/shapes/2.svg" alt="" width={66} height={69} />
            </div>
          
            {/* Shape 3 - Middle Right */}
            <div className="absolute top-1/2 right-[350px] -translate-y-1/2" aria-hidden="true">
              <Image src="/shapes/3.svg" alt="" width={99} height={125} />
            </div>
          
            {/* Shape 4 - Bottom Left */}
            <div className="absolute bottom-5 left-12" aria-hidden="true">
              <Image src="/shapes/4.svg" alt="" width={125} height={130} />
            </div>
          
            {/* Shape 5 - Bottom Right */}
            <div className="absolute bottom-5 right-12" aria-hidden="true">
              <Image src="/shapes/5.svg" alt="" width={94} height={137} />
            </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center h2-section">
            <p className="text-[var(--color-17-17-17)] max-w-[568px] mx-auto text-center">Thanks for visiting. I'm always happy to <span className="text-[var(--color-primary)]">connect</span>.</p>
            <button type="button" className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-full button-text flex items-center gap-[14px] mt-4" aria-label="Contact me">Say Hi</button>
          </div>
          </div>
          
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[var(--color-light-bg)] py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Footer Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            {/* Logo */}
            <div className="mb-6 md:mb-0">
              <Image src="/logo.svg" alt="Akhilvyasan - Experience Designer logo" width={193} height={33} />
            </div>

            {/* Featured List */}
            <nav aria-label="Featured projects">
              <h3 className="body-default text-[var(--color-17-17-17)] mb-4">Featured</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#work" className="body-default text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors">
                    Duxbe
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="body-default text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors">
                    Total Campus Solution
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="body-default text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors">
                    Dreamact
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="body-default text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors">
                    Nolta
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Separator Line */}
          <div className="border-t border-[var(--color-2a-2a-2e)]/20 mb-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="body-default text-[var(--color-17-17-17)]">© 2026 Designed & Developed by Akhilvyasan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
