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
  "/duxbe/duxbe8.png",
] as const;

export default function DuxbePage() {
  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      <Navbar />

      {/* Hero - Light */}
      {/* Hero - Light */}
      <section className="pt-28 px-4 relative overflow-hidden bg-[#F9F7F4]">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-[var(--color-17-17-17)] mb-6">
              Reimagining the <span className="text-[var(--color-blue-primary)]">Duxbe</span> Point-
              <br className="hidden sm:block" />
              of-Sale System
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={100}>
            <p className="body-default text-[var(--color-secondary-text)] mb-12">
              ERP Redesign* Jan 2024 - Dec 2025
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className="flex justify-center">
              <div className="relative w-full overflow-hidden">
                <Image
                  src={DUXBE_IMAGES[0]}
                  alt="Duxbe app dashboard"
                  
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                  width={1024}
                  height={1024}
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Overview & Goal - Dark */}
      <section className="py-16 sm:py-20 bg-[#2A2A2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-12 py-[120px]">
          {/* Main content */}
          <div className="flex-1">
            <AnimateOnScroll animation="fade-in-right">
              <h2 className="h2-section mb-[36px]">Overview</h2>
              <div className="space-y-5 text-[#e0e0e0] body-large leading-relaxed">
                <p>
                  Duxbe is a billing solution designed to make everyday billing tasks simpler and easier for businesses. The focus was on creating a clean, user-friendly experience that helps users manage invoices, transactions, and routine billing work without unnecessary complexity.
                </p>
                <h3 className="h2-section mt-10 mb-[36px]">Goal</h3>
                <p>
                  While working on this project, the goal was to build a system that feels intuitive and reliable, even for first-time users. By prioritizing usability and clarity,
                </p>
                <p>
                  Duxbe aims to reduce errors, speed up workflows, and make billing feel less like a chore and more like a smooth, manageable process.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
          {/* Side card */}
          <AnimateOnScroll animation="fade-in-left" delay={100}>
            <aside className="w-full max-w-sm bg-[var(--color-primary-900)] rounded-2xl p-6 sm:p-8 text-white flex flex-col space-y-6 shadow-lg self-start">
              <div>
                <h3 className="h4-subheading tracking-wider opacity-90 mb-2">Duration</h3>
                <p className="nav-menu">12 Months</p>
              </div>
              <div>
                <h3 className="h4-subheading tracking-wider opacity-90 mb-2">My Role</h3>
                <p className="nav-menu">UX/UI Designer</p>
              </div>
              <div>
                <h3 className="h4-subheading tracking-wider opacity-90 mb-2">Deliverables</h3>
                <p className="nav-menu">
                  Workflows, Wireframes, Visual and Interaction design
                </p>
              </div>
              <div>
                <h3 className="h4-subheading tracking-wider opacity-90 mb-2">Client</h3>
                <p className="nav-menu underlined"><a href="#" className="hover:text-[var(--color-primary)] transition-colors underline">Hancod</a></p>
              </div>
            </aside>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Information Hierarchy Issues - Light */}
      <section className="py-16 sm:py-20 bg-[var(--color-light-bg)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-[var(--color-17-17-17)] mb-12 text-center">
              Information Hierarchy Issues
            </h2>
          </AnimateOnScroll>
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={DUXBE_IMAGES[1]}
              alt="Information Hierarchy Issues"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Detailed Issues Breakdown */}
      <section className="py-16 sm:py-20 bg-[#F9F7F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-[var(--color-17-17-17)] mb-12 text-center">
              Information Hierarchy Issues
            </h2>
          </AnimateOnScroll>
          <div className="space-y-16">
            {[
              {
                number: "1",
                title: "ITEM LIST",
                img: DUXBE_IMAGES[2],
                desc: "Making it difficult to quickly scan and understand inventory status. Important details and key actions lack visual priority, slowing down item management.",
                functions: [
                  "View all inventory items in a list.",
                  "Check item details such as category, price, and stock.",
                  "Access additional actions through item controls.",
                ],
                problems:
                  "Too much information is shown at once, making the list difficult to scan. Important details like stock status and key actions lack visual priority, slowing down item management.",
              },
              {
                number: "2",
                title: "POS",
                img: DUXBE_IMAGES[3],
                desc: "Allows users to browse products and add items to the cart efficiently.",
                functions: [
                  "Browse available products in a grid layout.",
                  "Search and filter products by category.",
                  "View product details such as name, size, and price.",
                  "Add items directly to the cart.",
                ],
                problems:
                  "Clearly communicated, and prices visually overpower product details. Search and filter options feel cluttered, making browsing less intuitive.",
              },
              {
                number: "3",
                title: "Cart",
                img: DUXBE_IMAGES[7],
                desc: "This screen helps users review selected items, manage quantities, and prepare for checkout in one place.",
                functions: [
                  "Display all added items in the cart.",
                  "Adjust item quantities using increment and decrement controls.",
                  "Remove unwanted items from the cart.",
                  "View the total price before checkout.",
                ],
                problems:
                  "The cart layout lacks clear visual hierarchy, making it hard to scan items and prices quickly. Quantity and delete actions are not intuitive enough, increasing the chance of mistakes and slowing down checkout.",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} animation="fade-in-up" delay={i * 100}>
                <div className="bg-[#F2F2F2] rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-10 items-center">
                  {/* Image */}
                  <div className="flex-1 w-full relative aspect-[9/16] max-w-xs mx-auto rounded-2xl overflow-hidden bg-gray-50">
                    <Image
                      src={item.img}
                      alt={item.title}
                      
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 320px"
                      width={320}
                      height={320}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-xs font-bold">
                        {item.number}
                      </span>
                      <h3 className="h4-subheading uppercase">{item.title}</h3>
                    </div>

                    <p className="body-default text-[var(--color-secondary-text)]">
                      {item.desc}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold text-[var(--color-b3-b3-b3)] tracking-wider uppercase mb-3">
                        FUNCTIONS
                      </h4>
                      <ul className="space-y-2">
                        {item.functions.map((func, idx) => (
                          <li key={idx} className="body-default text-[var(--color-secondary-text)] flex items-start gap-2">
                            <span className="mt-2 w-1 h-1 rounded-full bg-[var(--color-secondary-text)] shrink-0" />
                            {func}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-[var(--color-b3-b3-b3)] tracking-wider uppercase mb-3">
                        PROBLEMS
                      </h4>
                      <p className="body-default text-[var(--color-secondary-text)]">
                        {item.problems}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Goals of the Redesign */}
      <section className="py-16 sm:py-20 bg-[#F2F2F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-17-17-17)] mb-10 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl">🎯</span> Goals of the Redesign
            </h2>
          </AnimateOnScroll>
          <div className="space-y-6">
            {[
              "Improve visual hierarchy to help users quickly scan content and identify key information.",
              "Simplify interactions to reduce effort when adding items, adjusting quantities, and managing inventory.",
              "Create clear and consistent action patterns across all screens for a smoother experience.",
              "Reduce on-screen clutter by prioritizing essential information and hiding secondary details.",
              "Make the overall experience faster, more intuitive, and easier to use on mobile devices.",
            ].map((goal, i) => (
              <AnimateOnScroll key={i} animation="fade-in-up" delay={i * 50}>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary-text)] mt-2.5 shrink-0" />
                  <p className="body-default text-[var(--color-secondary-text)]">{goal}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Item List - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] rounded-t-2xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-white">Item List</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-b3-b3-b3)] max-w-2xl mx-auto text-center mb-10">
              The item list redesign improves scannability by clearly highlighting stock status and pricing. Better filters and search make it faster and easier to find items.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden bg-[#F2F2F2] shadow-lg">
              <div className="relative w-full aspect-video">
                <Image
                  src={DUXBE_IMAGES[4]}
                  alt="Item List Redesign"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Solutions - Cart - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] border-t border-[#B3B3B3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-white">Cart</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-b3-b3-b3)] max-w-2xl mx-auto text-center mb-10">
              Improved structure makes it easier to review items and totals before completing payment.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden bg-[#F2F2F2] shadow-lg">
              <div className="relative w-full aspect-video">
                <Image
                  src={DUXBE_IMAGES[5]}
                  alt="Cart Redesign"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Solutions - POS - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] rounded-b-2xl border-t border-[#B3B3B3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-white">POS</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-b3-b3-b3)] max-w-2xl mx-auto text-center mb-10">
              Quantity controls are placed intuitively, allowing users to add items faster and with less effort.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden bg-[#F2F2F2] shadow-lg">
              <div className="relative w-full aspect-video">
                <Image
                  src={DUXBE_IMAGES[6]}
                  alt="POS Redesign"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Key Learnings - Light */}
      <section className="py-16 sm:py-20 bg-[#f8f8f8] border-t border-[#B3B3B3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-[var(--color-17-17-17)] mb-8 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl">📚</span> Key Learnings
            </h2>
          </AnimateOnScroll>
          <div className="space-y-6 max-w-2xl">
            <AnimateOnScroll animation="fade-in-up">
              <p className="body-large text-[var(--color-17-17-17)] leading-relaxed">
                Through these redesigns, I learned that <span className="font-bold">simplifying content</span> and improving visual hierarchy greatly enhances usability. Clear placement of actions and consistent patterns help users move faster with fewer errors, especially in real-world, high-use scenarios like billing and inventory management.
              </p>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fade-in-up" delay={100}>
            <div className="flex justify-between items-center w-full mt-4">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:underline"
              >
                ← Back to Work
              </Link>
              <Link
                href="/work/tcs"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:underline"
              >
                Next Work →
              </Link>
            </div>
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
              {/* <nav className="flex flex-col gap-2 text-sm">
                <span className="font-semibold text-white/80 mb-1">Connect</span>
                <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[var(--color-primary)] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Twitter</a>
              </nav>
              <nav className="flex flex-col gap-2 text-sm">
                <span className="font-semibold text-white/80 mb-1">Legal</span>
                <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</a>
              </nav> */}
            </div>
          </div>
          <p className="text-center text-white/50 text-sm mt-10">© 2026 vyasan.design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
