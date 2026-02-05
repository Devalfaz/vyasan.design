import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "../../components/AnimateOnScroll";

export const metadata = {
  title: "Duxbe POS System Redesign | Case Study - Akhilvyasan",
  description: "Product designing for better user experience of Duxbe System — UX/UI redesign for visual clarity and workflow efficiency.",
};

const DUXBE_IMAGES = [
  "/duxbe/duxbe1.png",
  "/duxbe/duxbe2.png",
  "/duxbe/duxbe3.png",
  "/duxbe/duxbe4.png",
  "/duxbe/duxbe5.png",
  "/duxbe/duxbe6.png",
  "/duxbe/duxbe7.png",
] as const;

export default function DuxbePage() {
  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      <Navbar />

      {/* Hero - Light */}
      <section className="pt-28 pb-20 px-4 relative overflow-hidden bg-[#F9F7F4]">
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimateOnScroll animation="fade-in-down">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-17-17-17)] mb-6 leading-tight max-w-3xl">
              Product designing for{" "}
              <span className="text-[#6366f1]">better user experience</span>{" "}
              Of Duxbe System
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={100}>
            <p className="text-base sm:text-lg text-[var(--color-secondary-text)] max-w-2xl mb-12 leading-relaxed">
              A UX/UI redesign focused on improving information hierarchy, grouping, and visual clarity for Duxbe&apos;s POS and management experience.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className="flex justify-center">
              <div className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[9/19] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80">
                <Image
                  src={DUXBE_IMAGES[0]}
                  alt="Duxbe app dashboard"
                  fill
                  className="object-cover"
                  sizes="360px"
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Overview, Goal, Core Redesign - Dark */}
      <section className="py-16 sm:py-20 bg-[#2D2B2C] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2 space-y-10">
              <AnimateOnScroll animation="fade-in-right">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Overview</h2>
                  <p className="text-[#d0d0d0] text-base sm:text-lg leading-relaxed">
                    The Duxbe system required a comprehensive redesign to address usability and clarity issues across its POS and management interfaces. The project focused on establishing clear information hierarchy, logical grouping, and a consistent visual language.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-right" delay={100}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Goal</h2>
                  <p className="text-[#d0d0d0] text-base sm:text-lg leading-relaxed">
                    To enhance visual clarity, improve workflow efficiency, and align the interface with modern design standards—enabling users to complete tasks faster and with fewer errors.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-right" delay={200}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Core of the Redesign</h2>
                  <p className="text-[#d0d0d0] text-base sm:text-lg leading-relaxed">
                    Restructuring content with clear headings and sections, grouping related information into cards and modules, and applying consistent typography, spacing, and color to create a clear visual hierarchy.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="fade-in-left" delay={100}>
              <div className="bg-[#8B5A3C] rounded-2xl p-6 sm:p-8 text-white space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Client</h3>
                  <p className="text-lg">Duxbe</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Role</h3>
                  <p className="text-lg">UX Designer, UI Designer</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Timeline</h3>
                  <p className="text-lg">2 Months</p>
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

      {/* Information Hierarchy Issues - Light */}
      <section className="py-16 sm:py-20 bg-[#F9F7F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-17-17-17)] mb-12 text-center">
              Information Hierarchy Issues
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: DUXBE_IMAGES[1],
                title: "Information Hierarchy",
                text: "The original interface presented menus and profiles with unclear structure, making it difficult for users to scan and find key actions or settings.",
              },
              {
                img: DUXBE_IMAGES[2],
                title: "Lack of proper Information Grouping",
                text: "Data and statistics were displayed without clear grouping, leading to cognitive overload and slower decision-making for users.",
              },
              {
                img: DUXBE_IMAGES[3],
                title: "Lack of proper Visual Hierarchy",
                text: "Names, statuses, and key elements lacked clear visual distinction, reducing scannability and increasing the chance of misreading information.",
              },
            ].map((card, i) => (
              <AnimateOnScroll key={card.title} animation="fade-in-up" delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col h-full">
                  <div className="relative aspect-[9/16] max-h-[280px] mx-auto w-full rounded-xl overflow-hidden mb-4">
                    <Image src={card.img} alt={card.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-17-17-17)] mb-2">{card.title}</h3>
                  <p className="text-sm text-[var(--color-secondary-text)] leading-relaxed flex-1 mb-4">{card.text}</p>
                  <Link
                    href="#solutions"
                    className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-[#1e3a8a] text-white text-sm font-medium hover:bg-[#1e40af] transition-colors"
                  >
                    View Case Study
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Information Hierarchy Solutions - Light */}
      <section id="solutions" className="py-16 sm:py-20 bg-[#F9F7F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-17-17-17)] mb-12 text-center">
              Information Hierarchy Solutions
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: DUXBE_IMAGES[4],
                title: "Information Hierarchy",
                text: "Redesigned menus and profile screens with clear categories such as Personal Info, Payment, Settings, and Help Center—each with consistent icons and spacing.",
              },
              {
                img: DUXBE_IMAGES[5],
                title: "Information Grouping",
                text: "Grouped related metrics into cards and sections (e.g. Total Profit, Sales, Expenses) so users can quickly compare and act on data.",
              },
              {
                img: DUXBE_IMAGES[6],
                title: "Visual Hierarchy",
                text: "Applied distinct typography, weight, and color to product names, prices, and quantities so key information stands out at a glance.",
              },
            ].map((card, i) => (
              <AnimateOnScroll key={card.title} animation="fade-in-up" delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col h-full">
                  <div className="relative aspect-[9/16] max-h-[280px] mx-auto w-full rounded-xl overflow-hidden mb-4">
                    <Image src={card.img} alt={card.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-17-17-17)] mb-2">{card.title}</h3>
                  <p className="text-sm text-[var(--color-secondary-text)] leading-relaxed flex-1 mb-4">{card.text}</p>
                  <Link
                    href="/#work"
                    className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-[#1e3a8a] text-white text-sm font-medium hover:bg-[#1e40af] transition-colors"
                  >
                    View Case Study
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Takeaways - Dark */}
      <section className="py-16 sm:py-20 bg-[#2D2B2C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Takeaways</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="text-[#d0d0d0] text-base sm:text-lg leading-relaxed">
              The redesign reinforced how critical information hierarchy and visual grouping are for complex systems. Clear sections, consistent patterns, and a focused visual hierarchy not only improved usability but also reduced training time and support needs. Iterating with real user feedback ensured the solutions matched actual workflows.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={100}>
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">
              <Image src="/logo.svg" alt="vyasan.design" width={160} height={28} className="h-8 w-auto invert" />
            </Link>
            <div className="flex flex-wrap justify-center gap-12 sm:gap-16">
              <nav className="flex flex-col gap-2 text-sm">
                <span className="font-semibold text-white/80 mb-1">Navigate</span>
                <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
                <Link href="/about" className="hover:text-[var(--color-primary)] transition-colors">About</Link>
                <Link href="/#work" className="hover:text-[var(--color-primary)] transition-colors">Work</Link>
                <Link href="/about" className="hover:text-[var(--color-primary)] transition-colors">Contact</Link>
              </nav>
              <nav className="flex flex-col gap-2 text-sm">
                <span className="font-semibold text-white/80 mb-1">Connect</span>
                <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[var(--color-primary)] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Twitter</a>
              </nav>
              <nav className="flex flex-col gap-2 text-sm">
                <span className="font-semibold text-white/80 mb-1">Legal</span>
                <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</a>
              </nav>
            </div>
          </div>
          <p className="text-center text-white/50 text-sm mt-10">© 2026 vyasan.design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
