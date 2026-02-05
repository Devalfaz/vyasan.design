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
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll animation="fade-in-down">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[var(--color-17-17-17)]">A bit about </span>
              <span className="text-[var(--color-secondary-text)]">me.</span>
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={100}>
            <p className="text-base sm:text-lg text-[var(--color-secondary-text)] max-w-2xl mx-auto mb-12">
              A LIFELONG FAN OF DISNEY AND MISCHIEF. STORYTELLER.
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
                Back when I was 13-14 I accidentally came across <span className="text-[var(--color-primary)]">digital graphics</span>, I was on the idea of 'hey, this is really cool.. I wanna do lots of it', looking at so many logo designs. I was super interested, I took up the chance online to make stencils for clients and brands. We learn a lot by exposing ourself to how the real world works.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <p>
                As time moved forward, I didn't just stay at UI/UX anymore, I wanted to make sure that every user experience I create resonates with the end users and meets the business goals. I delve into psychology regularly to understand how we can build things that people love to use/buy. I didn't want to just design, I wanted to shape experiences.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in-up" delay={300}>
              <p>
                I have always been intrigued about bringing creative approaches to design and storytelling in every work that I do.
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
              My college journey as MD (Multidisciplinary Design) - It became starting ground for taking the leap and decided to design thinking, UX Research and Design as I felt my skills fitting into the right space.
            </p>
            
            <p>
              This foundational work set up leads into my main core journey focused on design thinking and UX. This helped to learn a lot from industry standard mentorship. Any design product project includes 2 dimensions: a design challenge, one that I love and a team (not to be taken lightly, choose wisely!).
            </p>
            
            <p>
              Successfully, I ran the pinnacle of a number of impactful student-led initiatives and personal product experience. Really just tried a lot, it was a Roark, love it, learn more!
            </p>
            
            <p>
              Also I had the freedom to develop strategic solutions that can be pivotal for the actual client's and impact, and succeeded in helping product innovation and startup in various industries.
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
              To deeply know the big <span className="text-[var(--color-primary)]">picture of Product</span> - I took basic UI which mostly goes into the idea about product marketing, design systems, feature development in Design process, and it's in the new context about how we define the DESIGN GOALS.
            </p>
            
            <p>
              Now I am a working member for creating frameworks that let us make better product decisions.
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
              When I'm not behind a real work - either the meaning (especially about is designing deeply really matter?) or obsessing over <span className="text-[var(--color-primary)]">Star-lord's jacket</span> (got to be love it), you can find me:
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
            On the Tunes front which isn't darkness (I say to be the most); <span className="text-[var(--color-primary)]">We always learn from mistakes</span>.
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

      {/* Contact Section */}
      <section className="py-16 bg-[#272727]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Thanks for visiting. I'm always<br />
            happy to <span className="text-[var(--color-primary)]">connect</span>.
          </h2>
          <button 
            type="button" 
            className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Say Hi
          </button>
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

