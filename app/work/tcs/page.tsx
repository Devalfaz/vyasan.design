import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "../../components/AnimateOnScroll";

export const metadata = {
  title: "Total Campus Solution | Case Study - Akhilvyasan",
  description: "A comprehensive UX-focused redesign for Global Campus Management — mobile-first solution for students, faculty, and administrators.",
};

const TCS_IMAGES = [
  "/tcs/tcs1.png",
  "/tcs/tcs2.png",
  "/tcs/tcs3.png",
  "/tcs/tcs4.png",
  "/tcs/tcs5.png",
  "/tcs/tcs6.png",
  "/tcs/tcs7.png",
  "/tcs/tcs8.png",
  "/tcs/tsc9.png",
] as const;

export default function TotalCampusSolutionPage() {
  return (
    <div className="min-h-screen bg-[var(--color-light-bg)]">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: "0%",
            height: "800px",
            background:
              "radial-gradient(circle at center top, rgba(253, 133, 58, 0.15) 0%, rgba(243, 241, 239, 0.45) 50%, transparent 100%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <AnimateOnScroll animation="fade-in-down">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-17-17-17)] mb-4 tracking-tight">
              CREATING THE NEXT GEN DESIGN FOR GLOBAL CAMPUS MANAGEMENT
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={100}>
            <p className="text-base sm:text-lg text-[var(--color-secondary-text)] max-w-2xl mx-auto mb-12">
              A comprehensive solution for campus management, designed for a better future
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="w-[140px] sm:w-[160px] md:w-[180px] aspect-[9/19] relative rounded-2xl overflow-hidden shadow-xl">
                <Image src={TCS_IMAGES[0]} alt="Tasks screen" fill className="object-cover" sizes="180px" />
              </div>
              <div className="w-[160px] sm:w-[180px] md:w-[200px] aspect-[9/19] relative rounded-2xl overflow-hidden shadow-xl">
                <Image src={TCS_IMAGES[1]} alt="App overview" fill className="object-cover" sizes="200px" />
              </div>
              <div className="w-[140px] sm:w-[160px] md:w-[180px] aspect-[9/19] relative rounded-2xl overflow-hidden shadow-xl">
                <Image src={TCS_IMAGES[2]} alt="Schedule screen" fill className="object-cover" sizes="180px" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Features & Project Details - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <AnimateOnScroll animation="fade-in-right">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Features</h2>
                <div className="space-y-4 text-[#e0e0e0] text-base sm:text-lg leading-relaxed">
                  <p>
                    This project aims to solve the problem of fragmented campus management systems by creating a unified platform. Current systems often lack integration, leading to inefficient communication, manual processes, and a poor user experience for students, faculty, and administrators.
                  </p>
                  <p>
                    By designing an intuitive and comprehensive solution, we aim to streamline operations, enhance communication, and provide valuable insights for better decision-making.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="fade-in-left" delay={100}>
              <div className="bg-[#C45C2A] rounded-2xl p-6 sm:p-8 text-white space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Role</h3>
                  <p className="text-lg">Product Designer</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Deliverables</h3>
                  <p className="text-sm leading-relaxed">
                    User Research, Wireframes, UI Design, Prototyping, Usability Testing
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Timeline</h3>
                  <p className="text-lg">4 Weeks</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Research - Light */}
      <section className="py-16 sm:py-20 bg-[#F3F1EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-17-17-17)] mb-8 text-center">Research</h2>
          </AnimateOnScroll>
          <div className="space-y-6 text-[var(--color-17-17-17)] text-base sm:text-lg leading-relaxed">
            <AnimateOnScroll animation="fade-in-up">
              <p>
                Conducted extensive user research through surveys, interviews, and competitive analysis to understand the needs and pain points of various campus stakeholders.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <p>
                Identified key user groups including students, faculty, administrators, and parents, and mapped out their journey within the campus ecosystem.
              </p>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <h3 className="text-xl font-semibold mt-10 mb-4 text-[var(--color-17-17-17)]">Why mobile?</h3>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--color-17-17-17)]">
              The decision to focus on a mobile-first approach was driven by the ubiquitous use of smartphones among students and the need for on-the-go access to campus services.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* User Flows & Wireframes - Light */}
      <section className="py-16 sm:py-20 bg-[#F3F1EF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-17-17-17)] mb-8 text-center">User Flows</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <div className="rounded-2xl overflow-hidden bg-white shadow-lg mb-12">
              <div className="relative w-full aspect-[4/3] sm:aspect-video">
                <Image src={TCS_IMAGES[3]} alt="User flow diagram" fill className="object-contain p-4" sizes="(max-width: 768px) 100vw, 1024px" />
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-17-17-17)] mb-8 text-center">Wireframes</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-lg">
                <Image src={TCS_IMAGES[4]} alt="Wireframe sketches" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-lg">
                <Image src={TCS_IMAGES[5]} alt="Wireframe sketches" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* UI Design 1 - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">UI Design</h2>
            <p className="text-[#b0b0b0] text-center mb-10 max-w-2xl mx-auto">
              Clear and concise task listing with easy access to profile information.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden bg-white/5 p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-[9/19] max-w-[280px] mx-auto rounded-xl overflow-hidden shadow-2xl">
                  <Image src={TCS_IMAGES[6]} alt="Tasks screen UI" fill className="object-cover" sizes="280px" />
                </div>
                <div className="relative aspect-[9/19] max-w-[280px] mx-auto rounded-xl overflow-hidden shadow-2xl">
                  <Image src={TCS_IMAGES[7]} alt="Profile screen UI" fill className="object-cover" sizes="280px" />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Components & Typography - Dark blue */}
      <section className="py-16 sm:py-20 bg-[#1a2744] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <AnimateOnScroll animation="fade-in-right">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Components</h2>
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    <button type="button" className="px-5 py-2.5 rounded-lg bg-blue-500 text-white font-medium text-sm">
                      Primary Button
                    </button>
                    <button type="button" className="px-5 py-2.5 rounded-lg border-2 border-white text-white font-medium text-sm">
                      Secondary Button
                    </button>
                    <button type="button" className="px-5 py-2.5 rounded-lg bg-white/20 text-white/70 font-medium text-sm cursor-not-allowed" disabled>
                      Disabled
                    </button>
                  </div>
                  <div className="space-y-2">
                    <input type="text" placeholder="Default input" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm" readOnly />
                    <input type="text" placeholder="Focused state" className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-blue-400 text-white placeholder-white/50 text-sm" readOnly />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/80 text-xs font-medium">Badge</span>
                    <span className="px-3 py-1 rounded-full bg-green-500/80 text-xs font-medium">Success</span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/80 text-xs font-medium">Warning</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-left" delay={100}>
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Typography</h2>
                <div className="space-y-4 font-sans">
                  <p className="text-3xl font-bold">Heading 1</p>
                  <p className="text-2xl font-semibold">Heading 2</p>
                  <p className="text-xl font-medium">Heading 3</p>
                  <p className="text-base leading-relaxed text-white/90">
                    Body text — Inter is used throughout for clarity and readability across the application. Consistent type scale ensures hierarchy and scannability.
                  </p>
                  <p className="text-sm text-white/70">Font: Inter</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* UI Design 2 - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">UI Design</h2>
            <p className="text-[#b0b0b0] text-center mb-10 max-w-2xl mx-auto">
              Calendar and schedule views with intuitive form flows.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden bg-white/5 p-4 sm:p-6">
              <div className="relative w-full max-w-3xl mx-auto aspect-[16/10] rounded-xl overflow-hidden">
                <Image src={TCS_IMAGES[8]} alt="Calendar and form screens" fill className="object-contain" sizes="(max-width: 768px) 100vw, 768px" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Color Palette - Dark blue */}
      <section className="py-16 sm:py-20 bg-[#1a2744] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Color Palette</h2>
            <p className="text-white/80 mb-10 max-w-xl mx-auto">
              Primary, neutral, and accent colors for consistency and accessibility.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 sm:gap-4">
              {["#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a", "#172554"].map((c) => (
                <div key={c} className="aspect-square rounded-lg border border-white/20 shadow-lg" style={{ backgroundColor: c }} title={c} />
              ))}
              {["#f8fafc", "#f1f5f9", "#e2e8f0", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b"].map((c) => (
                <div key={c} className="aspect-square rounded-lg border border-white/20 shadow-lg" style={{ backgroundColor: c }} title={c} />
              ))}
              {["#dc2626", "#16a34a", "#0d9488", "#eab308", "#7c3aed"].map((c) => (
                <div key={c} className="aspect-square rounded-lg border border-white/20 shadow-lg" style={{ backgroundColor: c }} title={c} />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Impact - Light */}
      <section className="py-16 sm:py-20 bg-[#F3F1EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-17-17-17)] mb-8">Impact</h2>
          </AnimateOnScroll>
          <div className="space-y-6 text-[var(--color-17-17-17)] text-base sm:text-lg leading-relaxed">
            <AnimateOnScroll animation="fade-in-up">
              <p>
                The Total Campus Solution aims to significantly improve campus operations and the overall user experience, fostering a more connected and efficient academic environment.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <p>
                Future iterations will include advanced analytics for administrators and further personalization options for students.
              </p>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 mt-10 text-[var(--color-primary)] font-medium hover:underline"
            >
              ← Back to Work
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#272727] py-10 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">
            <Image src="/logo.svg" alt="vyasan.design" width={160} height={28} className="h-8 w-auto invert" />
          </Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[var(--color-primary)] transition-colors">About</Link>
            <Link href="/#work" className="hover:text-[var(--color-primary)] transition-colors">Work</Link>
          </nav>
        </div>
        <p className="text-center text-white/60 text-sm mt-6">© 2026 Vyasan. All rights reserved.</p>
      </footer>
    </div>
  );
}
