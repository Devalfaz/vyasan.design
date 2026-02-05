import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "../../components/AnimateOnScroll";

export const metadata = {
  title: "Dreamact Talent Discovery | Case Study - Akhilvyasan",
  description: "Building Dreamact Talent Discovery Experience — a platform connecting performers with directors through reels, portfolios, and casting opportunities.",
};

const DREAMACT_IMAGES = [
  "/dreamact/dreamact1.png",
  "/dreamact/dreamact2.png",
  "/dreamact/dreamact3.png",
  "/dreamact/dreamact4.png",
] as const;

export default function DreamactPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      <Navbar />

      {/* Hero - Light / Gradient */}
      <section className="pt-28 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: "0%",
            height: "700px",
            background:
              "radial-gradient(circle at center top, rgba(253, 133, 58, 0.12) 0%, rgba(249, 247, 244, 0.4) 50%, transparent 100%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <AnimateOnScroll animation="fade-in-down">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-17-17-17)] mb-4 leading-tight">
              Building{" "}
              <span className="text-[var(--color-primary)]">Dreamact Talent</span>{" "}
              Discovery Experience
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={100}>
            <p className="text-base sm:text-lg text-[var(--color-secondary-text)] mb-12">
              For Performers, By Directors
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="w-[140px] sm:w-[160px] md:w-[180px] aspect-[9/19] relative rounded-2xl overflow-hidden shadow-xl">
                <Image src={DREAMACT_IMAGES[0]} alt="Dreamact performer" fill className="object-cover" sizes="180px" />
              </div>
              <div className="w-[160px] sm:w-[180px] md:w-[200px] aspect-[9/19] relative rounded-2xl overflow-hidden shadow-xl">
                <Image src={DREAMACT_IMAGES[0]} alt="Dreamact discovery" fill className="object-cover" sizes="200px" />
              </div>
              <div className="w-[140px] sm:w-[160px] md:w-[180px] aspect-[9/19] relative rounded-2xl overflow-hidden shadow-xl">
                <Image src={DREAMACT_IMAGES[0]} alt="Dreamact profile" fill className="object-cover" sizes="180px" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Overview, Challenge & Quick Info - Dark */}
      <section className="py-16 sm:py-20 bg-[#2D2B2C] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2 space-y-10">
              <AnimateOnScroll animation="fade-in-right">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Overview</h2>
                  <div className="space-y-4 text-[#d0d0d0] text-base sm:text-lg leading-relaxed">
                    <p>
                      Dreamact is a talent discovery platform that connects aspiring performers with casting directors and industry professionals. It aims to bridge the gap between talent and opportunity in the entertainment industry.
                    </p>
                    <p>
                      The platform enables performers to showcase their work through video reels and portfolios while giving directors a streamlined way to discover diverse talent, post casting calls, and manage auditions.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-right" delay={100}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Challenge</h2>
                  <div className="space-y-4 text-[#d0d0d0] text-base sm:text-lg leading-relaxed">
                    <p>
                      Performers often struggle to get discovered and lack a single place to showcase their work and apply to casting calls. Directors, on the other hand, spend significant time sifting through scattered submissions and lack efficient tools to find and evaluate talent.
                    </p>
                    <p>
                      The challenge was to design an experience that serves both user types—making discovery effortless for directors and visibility and opportunity accessible for performers—while ensuring a safe, trustworthy environment.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="fade-in-left" delay={100}>
              <div className="bg-[#8B5A3C] rounded-2xl p-6 sm:p-8 text-white space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Duration</h3>
                  <p className="text-lg">—</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Role</h3>
                  <p className="text-lg">Product / UX Designer</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Deliverables</h3>
                  <p className="text-sm leading-relaxed">User Research, Wireframes, UI Design, Prototyping</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Client</h3>
                  <p className="text-lg">Dreamact</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Tools</h3>
                  <p className="text-lg">Figma</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* User Types - Light */}
      <section className="py-16 sm:py-20 bg-[#F3F1EF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-17-17-17)] mb-12 text-center">
              Dreamact has two types of users: directors & performers
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll animation="fade-in-up">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-17-17-17)] mb-4">For Performers</h3>
                <ul className="space-y-2 text-[var(--color-secondary-text)] text-sm sm:text-base">
                  <li className="flex items-start gap-2">• Showcase your talent with reels and portfolios</li>
                  <li className="flex items-start gap-2">• Discover casting calls and opportunities</li>
                  <li className="flex items-start gap-2">• Connect with directors and industry professionals</li>
                  <li className="flex items-start gap-2">• Build a visible, professional presence</li>
                </ul>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-17-17-17)] mb-4">For Directors</h3>
                <ul className="space-y-2 text-[var(--color-secondary-text)] text-sm sm:text-base">
                  <li className="flex items-start gap-2">• Find diverse talent in one place</li>
                  <li className="flex items-start gap-2">• Post and manage casting calls</li>
                  <li className="flex items-start gap-2">• Streamline auditions and shortlisting</li>
                  <li className="flex items-start gap-2">• Evaluate reels and portfolios efficiently</li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Performers - Dark */}
      <section className="py-16 sm:py-20 bg-[#2D2B2C] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Performers</h2>
            <p className="text-[#b0b0b0] mb-10">
              Showcase your performance, discover casting calls, and connect with professionals.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl bg-white/10 p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="relative aspect-[9/19] max-w-[200px] mx-auto w-full rounded-xl overflow-hidden">
                  <Image src={DREAMACT_IMAGES[1]} alt="Performer feed" fill className="object-cover" sizes="200px" />
                </div>
                <div className="relative aspect-[9/19] max-w-[200px] mx-auto w-full rounded-xl overflow-hidden">
                  <Image src={DREAMACT_IMAGES[1]} alt="Casting call" fill className="object-cover" sizes="200px" />
                </div>
                <div className="relative aspect-[9/19] max-w-[200px] mx-auto w-full rounded-xl overflow-hidden">
                  <Image src={DREAMACT_IMAGES[1]} alt="Performer profile" fill className="object-cover" sizes="200px" />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Directors - Dark */}
      <section className="py-16 sm:py-20 bg-[#2D2B2C] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Directors</h2>
            <p className="text-[#b0b0b0] mb-10">
              Discover diverse talent, create and manage casting calls, and streamline your recruitment process.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl bg-white/10 p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="relative aspect-[9/19] max-w-[200px] mx-auto w-full rounded-xl overflow-hidden">
                  <Image src={DREAMACT_IMAGES[2]} alt="Create casting call" fill className="object-cover" sizes="200px" />
                </div>
                <div className="relative aspect-[9/19] max-w-[200px] mx-auto w-full rounded-xl overflow-hidden">
                  <Image src={DREAMACT_IMAGES[2]} alt="Performer profile" fill className="object-cover" sizes="200px" />
                </div>
                <div className="relative aspect-[9/19] max-w-[200px] mx-auto w-full rounded-xl overflow-hidden">
                  <Image src={DREAMACT_IMAGES[2]} alt="Browse talent" fill className="object-cover" sizes="200px" />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Security - Dark */}
      <section className="py-16 sm:py-20 bg-[#2D2B2C] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Security</h2>
            <p className="text-[#b0b0b0] mb-10">
              Ensuring a safe and trustworthy environment for all users with robust verification.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl bg-white/10 p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="relative aspect-[9/19] max-w-[200px] mx-auto w-full rounded-xl overflow-hidden">
                  <Image src={DREAMACT_IMAGES[3]} alt="Login / signup" fill className="object-cover" sizes="200px" />
                </div>
                <div className="relative aspect-[9/19] max-w-[200px] mx-auto w-full rounded-xl overflow-hidden">
                  <Image src={DREAMACT_IMAGES[3]} alt="Identity verification" fill className="object-cover" sizes="200px" />
                </div>
                <div className="relative aspect-[9/19] max-w-[200px] mx-auto w-full rounded-xl overflow-hidden">
                  <Image src={DREAMACT_IMAGES[3]} alt="Verified profile" fill className="object-cover" sizes="200px" />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Challenge Solution - Light */}
      <section className="py-16 sm:py-20 bg-[#F3F1EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-17-17-17)] mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">✓</span>
              Challenge Solution
            </h2>
          </AnimateOnScroll>
          <div className="space-y-6 text-[var(--color-17-17-17)] text-base sm:text-lg leading-relaxed">
            <AnimateOnScroll animation="fade-in-up">
              <p>
                The Dreamact app provides a comprehensive solution: performers get a single place to build a portfolio, upload reels, and apply to casting calls, while directors can post opportunities, browse and filter talent, and manage auditions in one workflow.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <p>
                Security features—including verification and a safe environment—build trust for both sides. The result is a more efficient, transparent talent discovery experience that benefits the entire industry.
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

      {/* Footer - Dark */}
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
