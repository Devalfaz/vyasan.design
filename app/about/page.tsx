import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "../components/AnimateOnScroll";

export const metadata = {
  title: "About - Akhilvyasan | Experience Designer",
  description: "Learn more about Akhilvyasan, an Experience Designer with 3 years of expertise in creating functional & interactive products.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--color-light-bg)]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll animation="fade-in-down">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[var(--color-17-17-17)]">A bit about </span>
              <span className="text-[var(--color-secondary-text)]">me.</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay={100}>
            <p className="text-base sm:text-lg text-[var(--color-secondary-text)] max-w-2xl mx-auto mb-12">
              A brief look into my journey and what drives me.
            </p>
          </AnimateOnScroll>

          {/* Profile Image */}
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className="flex justify-center mb-16">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden">
                <Image
                  src="/vysn.png"
                  alt="Akhilvyasan"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* How it all started */}
      <section className="py-16 bg-[#272727] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
              How it all started.
            </h2>
          </AnimateOnScroll>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed">
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <p>
                Back when I was 13, I discovered my passion for digital creativity. It started with photo editing on early social platforms, focusing on perfecting visuals through filters, color grading, and basic graphic design to create engaging content like small event posters. This early interest was my introduction to visual communication and attention to detail.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <p>
                Turning 18, I found a love for creating high-impact Instagram ad posts and event promotions. This work honed my ability to understand a target audience, communicate a clear message, and design visually compelling content that drives action
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="scale-in" delay={400}>
            <div className="w-full h-full mt-12">
              <Image src="/works.png" alt="Project 4" width={200} height={200} className="w-full h-full object-cover" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* College Journey */}
      <section className="py-16 bg-[var(--color-light-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-[var(--color-17-17-17)]">
            How college kickstarted my UX career.
          </h2>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[var(--color-17-17-17)]">
            <p>
              My college journey kicked off with Computer Science. Although coding didn't click for me, but my passion for <strong>digital products</strong> led me to explore UX/UI design and its impact on users and businesses.
            </p>

            <p>
              This foundational work led to an internship opportunity given by my college principal, involving the redesign of a product for his tech startup. I was able to successfully ship the product with good feedback from end users, and this internship eventually evolved into a full-time position as a Product Designer at <strong>Meshilogic, Kinfra Park</strong>
            </p>

            <p>
              And I had the privilege of successfully improving another premiere product and achieved positive outcomes. And the best part is, it was a mobile app I used during my college days to manage attendance, results, and more.
            </p>

          </div>
        </div>
      </section>

      {/* Leveling Up */}
      <section className="py-16 bg-[var(--color-light-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-[var(--color-17-17-17)]">
            Leveling up.
          </h2>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[var(--color-17-17-17)]">
            <p>
              I'm currently working as a UI UX at <strong>Hancod</strong> -  . My main goal is making sure our brand looks great and connects better with people. I've been busy revamping all our marketing materials—things like webpages, webinar slides, and data sheets—to boost engagement
            </p>
          </div>
        </div>
      </section>

      {/* Winding Down */}
      <section className="py-16 bg-[var(--color-light-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-[var(--color-17-17-17)]">
            Winding down.
          </h2>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[var(--color-17-17-17)] mb-12">
            <p>
              Besides that, I'm a big fan of movies—always ready to settle in for a long film session
            </p>
            <p>
              When work takes a back seat, I enjoy traveling, especially when it involves hunting down the best local food spots. I also love to spend time cooking, experimenting with new recipes in the kitchen
            </p>
          </div>

          {/* Hobby Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200">
              {/* Add your hobby images here */}
              <Image src="/food1.png" alt="Hobby 1" width={200} height={200} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200">
              <Image src="/food2.png" alt="Hobby 2" width={200} height={200} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200">
              <Image src="/food3.png" alt="Hobby 3" width={200} height={200} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Oh wait */}
      <section className="py-16 bg-[var(--color-light-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-[var(--color-17-17-17)]">
            Oh wait
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-[var(--color-17-17-17)] mb-12">
            My hero is Iron Man, and he's my getaway. I live by his words <strong>We always learn from mistakes</strong>
          </p>

          {/* Movie Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800">
              {/* Iron Man image placeholder */}
              <Image src="/iron_man.png" alt="Iron Man" width={200} height={200} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800">
              {/* Tony Stark image placeholder */}
              <Image src="/tony_stark.png" alt="Tony Stark" width={200} height={200} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="" aria-label="Contact section">
        <div className="bg-[#272727] min-h-[350px] sm:min-h-[400px] md:min-h-[460px] relative flex items-center justify-center">
          {/* Shapes Container - Full Width */}
          <div className="relative w-full h-[350px] sm:h-[400px] md:h-[460px] overflow-hidden flex items-center justify-center">
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
            {/* Centered text and button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#F5F5F5] max-w-[568px] mx-auto leading-tight mb-4 sm:mb-5 md:mb-6">Thanks for visiting. I'm always happy to <span className="text-[var(--color-primary)]">connect</span>.</p>
              <div className="relative group flex justify-center">
                {/* Ripple Effect Background */}
                <span className="absolute inset-0 rounded-full bg-[var(--color-primary)] opacity-30 blur-lg scale-110 group-hover:scale-125 transition-all duration-300 pointer-events-none"></span>
                <a
                  href="https://www.linkedin.com/in/akhil-vyasan-4986492a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact me via LinkedIn"
                  className="group flex items-center justify-start relative z-[3] h-[52px] px-7 py-5 gap-2 rounded-full flex-[0_1_auto] text-[16px] font-normal leading-7 font-montserrat no-underline transition-all duration-300 bg-[#FFF7F2] text-[rgb(26,27,31)] shadow-[inset_0_2px_rgba(255,255,255,0.18)] hover:bg-[var(--color-primary)]"
                  style={{
                    boxSizing: "border-box",
                    textSizeAdjust: "100%",
                  }}
                >
                  <div className="logo-3 font-semibold" style={{ color: "white" }}>
                    <span className="group-hover:text-white group-hover:drop-shadow transition-colors duration-300 text-[var(--color-primary)]">Say hi</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-light-bg)] py-8 sm:py-10 md:py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8">
            <div className="mb-6 md:mb-0">
              <Image src="/logo.svg" alt="Akhilvyasan - Experience Designer logo" width={193} height={33} className="w-40 sm:w-44 md:w-48 h-auto" />
            </div>

            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm sm:text-base text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className="text-sm sm:text-base text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm sm:text-base text-[var(--color-17-17-17)] hover:text-[var(--color-primary)] transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="border-t border-[var(--color-2a-2a-2e)]/20 mb-6 sm:mb-8"></div>

          <div className="text-center">
            <p className="text-sm sm:text-base text-[var(--color-17-17-17)]">© 2026 Designed & Developed by Akhilvyasan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

