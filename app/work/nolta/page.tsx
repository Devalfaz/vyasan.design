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
              "radial-gradient(circle at center top, rgba(253, 133, 58, 0.08) 0%, rgba(253, 248, 245, 0.3) 50%, transparent 100%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <AnimateOnScroll animation="fade-in-down">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-17-17-17)] mb-4 leading-tight">
              Enhancing the digital presence of{" "}
              <span className="text-[var(--color-primary)]">Nolta</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={100}>
            <p className="text-base sm:text-lg text-[var(--color-secondary-text)] max-w-2xl mx-auto mb-12">
              A modern, responsive website that clearly communicates Nolta&apos;s brand, services, and digital presence
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
              <div className="relative w-full aspect-video">
                <Image
                  src={NOLTA_IMAGES[0]}
                  alt="Nolta website"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Overview & Project Details - Dark */}
      <section className="py-16 sm:py-20 bg-[#2D2B2C] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <AnimateOnScroll animation="fade-in-right">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Overview</h2>
                <div className="space-y-4 text-[#d0d0d0] text-base sm:text-lg leading-relaxed">
                  <p>
                    Nolta Cookware needed a refreshed digital presence to reflect the quality and warmth of their brand. The goal was to create a website that speaks to home cooks and families—emphasizing craftsmanship, ease of use, and the role of cooking in bringing people together.
                  </p>
                  <p>
                    The new site showcases Nolta&apos;s product range, communicates their values, and provides a clear path for customers to explore collections and get in touch—all with a responsive, accessible experience.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="fade-in-left" delay={100}>
              <div className="bg-[#8B5A3C] rounded-2xl p-6 sm:p-8 text-white space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Role</h3>
                  <p className="text-lg">Brand & Web Design</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Deliverables</h3>
                  <p className="text-sm leading-relaxed">Visual identity, Web design, Responsive UI</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Client</h3>
                  <p className="text-lg">Nolta Cookware</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* A Message from Us - Two columns, light peach */}
      <section className="py-16 sm:py-20 bg-[#FDF0E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimateOnScroll animation="fade-in-right">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--color-17-17-17)] mb-8 italic">
                  A Message from Us
                </h2>
                <div className="space-y-6 text-[var(--color-17-17-17)] text-base sm:text-lg leading-relaxed">
                  <p>
                    At Nolta Cookware, we believe cooking is more than a daily task—it&apos;s an art and a way to connect with the people you love. Our products are designed to help you create moments and memories around the table, from everyday meals to special celebrations.
                  </p>
                  <p>
                    We believe in the magic of the kitchen and are committed to making your cooking experience effortless and enjoyable. Every piece we create is crafted with care so you can focus on what matters: the food, the conversation, and the joy of sharing.
                  </p>
                  <p>
                    Thank you for choosing Nolta Cookware. We&apos;re honored to be part of your kitchen—here&apos;s to creating something extraordinary.
                  </p>
                </div>
                <p className="mt-8 font-bold text-[var(--color-17-17-17)]">Happy Cooking,</p>
                <p className="font-bold text-[var(--color-17-17-17)]">The Nolta Cookware Team</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-left" delay={100}>
              <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#d4edda] to-white shadow-lg">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={NOLTA_IMAGES[1]}
                    alt="Nolta cookware"
                    fill
                    className="object-contain object-center p-6"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Visual / Product section */}
      <section className="py-16 sm:py-20 bg-[#FDF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-17-17-17)] mb-10 text-center">
              Brand & digital experience
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={NOLTA_IMAGES[2]}
                  alt="Nolta brand and website"
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
              className="inline-flex items-center gap-2 mt-10 text-[var(--color-primary)] font-medium hover:underline"
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
