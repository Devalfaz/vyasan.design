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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-17-17-17)] mb-6 leading-tight">
              Building <span className="text-[#FF4D4D]">Dreamact</span> Talent
              <br className="hidden sm:block" />
              Discovery Experience
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={100}>
            <p className="body-default text-[var(--color-secondary-text)] mb-12">
              Talent Discovery App* Jan 2024 - Dec 2025
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl aspect-[16/9]">
                <Image
                  src={DREAMACT_IMAGES[0]}
                  alt="Dreamact app showcase"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Overview, Challenge & Quick Info - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <div className="flex-1">
            <AnimateOnScroll animation="fade-in-right">
              <h2 className="h2-section mb-6">Overview</h2>
              <div className="space-y-5 text-[#e0e0e0] body-large leading-relaxed">
                <p>
                  Dreamact is a global casting platform that helps actors, models, singers, and dancers showcase their profiles, reels, and portfolios while connecting with agencies and casting professionals worldwide with confidence.
                </p>
                <p>
                  The platform makes it easy for casting teams to search, filter, and discover talent, while built-in privacy controls allow performers to manage their visibility and opportunities.
                </p>

                <h2 className="h2-section mt-12 mb-6">Challenge</h2>
                <p>
                  The main challenge was building a platform that supports global talent discovery while keeping user privacy and security intact. The app needed to enable smooth connections between performers and casting professionals, along with timely updates in an industry where speed matters.
                </p>
                <p>
                  Balancing intuitive navigation with advanced search and notification features was a key focus.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Side card */}
          <AnimateOnScroll animation="fade-in-left" delay={100}>
            <aside className="w-full max-w-sm bg-[#8B4513] rounded-2xl p-6 sm:p-8 text-white flex flex-col space-y-6 shadow-lg self-start border border-white/10">
              <div>
                <h3 className="h4-subheading uppercase tracking-wider opacity-90 mb-2">Duration</h3>
                <p className="nav-menu">3 Months</p>
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
                <p className="nav-menu underlined"><a href="#" className="hover:text-white/80 transition-colors underline">Hancod</a></p>
              </div>
            </aside>
          </AnimateOnScroll>
        </div>
      </section>

      {/* User Types - Light */}
      <section className="py-20 sm:py-28 bg-[#F9F7F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-17-17-17)] mb-16 text-center leading-tight">
              Dreamact has two types of users:
              <br />
              <span className="text-[var(--color-secondary-text)]">directors & performers</span>
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimateOnScroll animation="fade-in-up">
              <div className="bg-[#F2F2F2] rounded-3xl p-8 sm:p-12 shadow-sm h-full">
                <div className="w-16 h-16 rounded-full bg-[#FFDCC2] flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-[#C45F28]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-17-17-17)] mb-6">For Performers:</h3>
                <ul className="space-y-4 text-[var(--color-17-17-17)] text-base sm:text-lg leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    Upload videos showcasing your talent.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    Get noticed by directors and casting agents.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    Gain visibility, whether you&apos;re new or experienced in the industry.
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <div className="bg-[#F2F2F2] rounded-3xl p-8 sm:p-12 shadow-sm h-full">
                <div className="w-16 h-16 rounded-full bg-[#FFDCC2] flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-[#C45F28]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-17-17-17)] mb-6">Directors:</h3>
                <ul className="space-y-4 text-[var(--color-17-17-17)] text-base sm:text-lg leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    Discover raw talent.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    View portfolios and videos of potential actors.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    Directly connect and book the perfect cast for your next project.
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Performers - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] text-white rounded-t-2xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-white">Performers</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-b3-b3-b3)] max-w-2xl mx-auto text-center mb-10">
              Dreamact helps performers share their talent through video reels, apply for auditions, and get noticed by directors.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden bg-[#F2F2F2] shadow-lg">
              <div className="relative w-full aspect-video">
                <Image
                  src={DREAMACT_IMAGES[1]}
                  alt="Performers Feature"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Directors - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] text-white border-t border-[#B3B3B3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-white">Directors</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-b3-b3-b3)] max-w-2xl mx-auto text-center mb-10">
              Dreamact helps directors discover raw talent by exploring performer portfolios and video reels. It allows them to directly connect with and cast the right performers for their projects.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden bg-[#F2F2F2] shadow-lg">
              <div className="relative w-full aspect-video">
                <Image
                  src={DREAMACT_IMAGES[2]}
                  alt="Directors Feature"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Security - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] text-white border-t border-[#B3B3B3] rounded-b-2xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-white">Security</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-b3-b3-b3)] max-w-2xl mx-auto text-center mb-10">
              The core security of Dreamact focuses on trust, privacy, and authenticity for both performers and directors. This is achieved through strict identity verification and secure data handling.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden bg-[#F2F2F2] shadow-lg">
              <div className="relative w-full aspect-video">
                <Image
                  src={DREAMACT_IMAGES[3]}
                  alt="Security Feature"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Challenge Solution - Light */}
      <section className="py-16 sm:py-20 bg-[#F9F7F4] border-t border-[#B3B3B3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-17-17-17)] mb-10 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl">✅</span> Challenge Solution
            </h2>
          </AnimateOnScroll>
          <div className="space-y-8 text-[var(--color-secondary-text)] body-large">
            <AnimateOnScroll animation="fade-in-up">
              <p>Two-factor authentication (2FA) to strengthen account security and protect user data.</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={50}>
              <p>Live camera photo verification to ensure genuine profiles and reduce fake accounts.</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <p>User reporting system that allows the community to flag inappropriate or suspicious activity.</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={150}>
              <p>Secure profile access controls to balance visibility with user privacy.</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <p>Optimized search and notifications to help directors and performers connect quickly in time-sensitive casting scenarios.</p>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fade-in-up" delay={250}>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 mt-12 text-[var(--color-primary)] font-medium hover:underline body-large"
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
