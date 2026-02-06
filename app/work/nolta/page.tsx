import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "../../components/AnimateOnScroll";

export const metadata = {
  title: "Nolta Cookware | Brand Website - Akhilvyasan",
  description: "Enhancing the digital presence of Nolta — a modern, responsive website that clearly communicates Nolta's brand, services, and digital presence.",
};

const NOLTA_IMAGES = [
  "/nolta/nolta1.png",
  "/nolta/nolta2.png",
  "/nolta/nolta3.png",
] as const;

export default function NoltaPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      <Navbar />

      {/* Hero - Light */}
      <section className="pt-28 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: "0%",
            height: "600px",
            background:
              "radial-gradient(circle at center top, rgba(20, 195, 163, 0.1) 0%, rgba(253, 248, 245, 0.3) 50%, transparent 100%)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <AnimateOnScroll animation="fade-in-down">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-17-17-17)] mb-6 leading-tight">
              Designing a Clean, Sustainable
              <br className="hidden sm:block" />
              Website for <span className="text-[#00D2B4]">Nolta</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={100}>
            <p className="body-default text-[var(--color-secondary-text)] mb-12">
              Brand Website* 2024
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={NOLTA_IMAGES[0]}
                  alt="Nolta website hero"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Overview & Project Details - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <div className="flex-1">
            <AnimateOnScroll animation="fade-in-right">
              <h2 className="h2-section mb-6">Overview</h2>
              <div className="space-y-5 text-[#e0e0e0] body-large leading-relaxed">
                <p>
                  Nolta is a premium cookware and homeware brand offering non-toxic, PFOA-free products for healthier everyday cooking. For this project, I handled the complete website experience—from discovery and content structure to visual design and final build—ensuring the brand’s quality and sustainability were clearly reflected online.
                </p>
                <h2 className="h2-section mt-12 mb-6">Challenge</h2>
                <p>
                  The main challenge was creating a website that clearly reflects Nolta’s focus on healthy, sustainable, and high-quality products while still feeling modern and approachable. The site needed to communicate Nolta’s premium values and innovation, while presenting technical and environmental details in a simple, engaging way for everyday users.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Side card */}
          <AnimateOnScroll animation="fade-in-left" delay={100}>
            <aside className="w-full max-w-sm bg-[#8B4513] rounded-2xl p-6 sm:p-8 text-white flex flex-col space-y-6 shadow-lg self-start border border-white/10">
              <div>
                <h3 className="h4-subheading uppercase tracking-wider opacity-90 mb-2">Duration</h3>
                <p className="nav-menu">1 Week</p>
              </div>
              <div>
                <h3 className="h4-subheading uppercase tracking-wider opacity-90 mb-2">My Role</h3>
                <p className="nav-menu">UX/UI Designer</p>
              </div>
              <div>
                <h3 className="h4-subheading uppercase tracking-wider opacity-90 mb-2">Deliverables</h3>
                <p className="nav-menu">
                  Workflows, Wireframes, Visual and Interaction design
                </p>
              </div>
              <div>
                <h3 className="h4-subheading uppercase tracking-wider opacity-90 mb-2">Client</h3>
                <p className="nav-menu">Kottaram Agency</p>
              </div>
            </aside>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Design Process - Light */}
      <section className="py-16 sm:py-20 bg-[#F9F7F4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] mb-8">
              Design Process
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-secondary-text)] leading-relaxed text-lg">
              The design process focused on creating a clear and intuitive user experience that reflects Nolta’s eco-conscious values and premium quality. Strong information hierarchy and simple navigation were used to help users quickly understand the product range and key benefits. Technical and sustainability details were broken down into easy-to-digest sections to reduce cognitive load. Consistent color, typography, and spacing were applied to build trust and reinforce a sense of quality. High-quality imagery supported decision-making by clearly showcasing product design, materials, and ergonomic features.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Process - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] text-white rounded-t-2xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-white">Process</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-b3-b3-b3)] max-w-2xl mx-auto text-center mb-10">
              The design process centered on creating a clear and intuitive experience that communicates Nolta&apos;s eco-conscious values.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative w-full aspect-video">
                <Image
                  src={NOLTA_IMAGES[1]}
                  alt="Process - One Story, One Mission"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Goals - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] text-white border-t border-[#B3B3B3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-white">Goals</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-b3-b3-b3)] max-w-2xl mx-auto text-center mb-10">
              The goal was to create a simple, intuitive experience that clearly represents Nolta&apos;s commitment to sustainability.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative w-full aspect-video">
                <Image
                  src={NOLTA_IMAGES[2]}
                  alt="Goals - A Message from Us"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={100}>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 mt-12 text-white font-medium hover:text-[var(--color-primary)] transition-colors body-large"
            >
              ← Back to Work
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2B2C] py-12 text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">
            <Image src="/logo.svg" alt="vyasan.design" width={160} height={28} className="h-8 w-auto invert" />
          </Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <Link href="/#work" className="hover:text-[var(--color-primary)] transition-colors">Work</Link>
            <Link href="/about" className="hover:text-[var(--color-primary)] transition-colors">About</Link>
            <Link href="/about" className="hover:text-[var(--color-primary)] transition-colors">Contact</Link>
          </nav>
        </div>
        <p className="text-center text-white/50 text-sm mt-8">© 2026 Vyasan Design. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
