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
  "/tcs/tcs10.png",
  "/tcs/tcs11.png",
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
            <h1 className="h2-section text-[var(--color-17-17-17)] mb-4 text-center">
              Enhancing the User Experience of{" "}
              <span className="text-[var(--color-primary)]">Total Campus Solution</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={100}>
            <p className="body-default text-[var(--color-secondary-text)] max-w-2xl mx-auto mb-12 text-center">
              First UX project * Aug 2022 - Dec 2023
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className=" overflow-hidden">
                <Image
                  src={TCS_IMAGES[0]}
                  alt="Tasks screen"
                  width={556}
                  height={560}
                  className="w-[320px] sm:w-[400px] md:w-[556px] h-auto object-cover "
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Features & Project Details - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <div className="flex-1">
            <AnimateOnScroll animation="fade-in-right">
              <h2 className="h2-section mb-6">Introduction</h2>
              <div className="space-y-5 text-[#e0e0e0] body-large leading-relaxed">
                <p>
                  Total Campus Solution is a flagship product by Meshbright that streamlines higher education operations through an integrated web and mobile platform,
                  <span className="text-[var(--color-primary)] italic"> managing features such as attendance, examination, and leave requests.</span>
                </p>
                <p>
                  Designed with three distinct gateways, the software provides tailored access for students, parents, staff, managers, and administrators to manage information and view reports.
                </p>
                <h3 className="h2-section mt-10 mb-2">My role</h3>
                <p>
                  As the project’s only designer, I directed the experience and interface design from research through delivery.
                </p>
                <p>
                  I first analyzed the existing mobile app to understand its shortcomings and user challenges, then moved through wireframing and low-fidelity design before finalizing the solution.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
          {/* Side card */}
          <AnimateOnScroll animation="fade-in-left" delay={100}>
            <aside className="w-full max-w-sm bg-[var(--color-primary-900)] rounded-2xl p-6 sm:p-8 text-white flex flex-col space-y-6 shadow-lg self-start">
              <div>
                <h3 className="h4-subheading uppercase tracking-wider opacity-90 mb-2">Duration</h3>
                <p className="nav-menu">4 Months</p>
              </div>
              <div>
                <h3 className="h4-subheading uppercase tracking-wider opacity-90 mb-2">My Role</h3>
                <p className="nav-menu">Product Designer</p>
              </div>
              <div>
                <h3 className="h4-subheading uppercase tracking-wider opacity-90 mb-2">Deliverables</h3>
                <p className="nav-menu">
                  Services, Wireframes, Creative direction and Product management
                </p>
              </div>
              <div>
                <h3 className="h4-subheading uppercase tracking-wider opacity-90 mb-2">Client</h3>
                <p className="nav-menu">Meshilogic</p>
              </div>
            </aside>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Research - Light */}
      <section className="py-16 sm:py-20 bg-[#F3F1EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section mb-8">Research</h2>
          </AnimateOnScroll>
          <div className="space-y-6 body-large text-[var(--color-17-17-17)]">
            <AnimateOnScroll animation="fade-in-up">
              <p>
                I delved into our archive of client reviews and conducted face-to-face user interviews to pinpoint the primary challenges our users were encountering.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <p>
                This process provided valuable insights into the issues users faced and enabled me to identify opportunities for improving usability.
              </p>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <h2 className="h2-section mt-12 mb-4">Why redesign?</h2>
            <p className="body-large text-[var(--color-17-17-17)]">
              The TCS Mobile app has maintained a consistent experience since 2016. Upon analyzing the research findings, the key issues with the overall user experience are identified as follows.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="flex justify-center mt-12">
          <div className="relative w-full" style={{ height: 1363 }}>
            <Image
              src={TCS_IMAGES[1]}
              alt="Research Findings"
              fill
              className=""
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#FABE9815]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-[var(--text-color)]">Sketches</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--text-color)] mb-10 max-w-2xl mx-auto text-center">
              I started with hand-drawn sketches to rapidly explore ideas and iterate on layouts. These early sketches of the homepage and attendance screen helped define the structure and flow of the final design.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="w-full min-h-0">
              <Image
                src={TCS_IMAGES[2]}
                alt="Hand-drawn homepage sketches"
                width={600}
                height={800}
                className="w-full h-auto rounded-lg shadow"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="w-full min-h-0">
              <Image
                src={TCS_IMAGES[3]}
                alt="Hand-drawn attendance screen sketches"
                width={600}
                height={800}
                className="w-full h-auto rounded-lg shadow"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="h2-section mt-16 mb-4 text-[var(--text-color)] text-center">Final designs</h2>
            <p className="body-large text-[var(--text-color)] max-w-2xl mx-auto text-center mb-8">
              Building on the sketches and wireframes, I created several visual design iterations. The final designs shown below were shaped through continuous reviews and user feedback.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Homepage - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] rounded-t-2xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-white">Homepage</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-b3-b3-b3)] max-w-2xl mx-auto text-center mb-10">
              Users wanted quick access to key app features directly on the homepage, without any extra steps. After multiple iterations, I refined the design to meet this need.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden bg-white shadow-lg">
              <div className="relative w-full">
                <Image
                  src={TCS_IMAGES[4]}
                  alt="Homepage design with annotated mobile mockups"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Attendance - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] border-t border-[#B3B3B3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-white">Attendance</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-b3-b3-b3)] max-w-2xl mx-auto text-center mb-10">
              The core purpose of the mobile app was daily attendance, and the design focused on delivering the most efficient and intuitive user experience.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden bg-[#e8e8e8] shadow-lg">
              <div className="relative w-full">
                <Image
                  src={TCS_IMAGES[5]}
                  alt="Attendance design with Mark Attendance and Absentees screens"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Typography - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] border-t border-[#B3B3B3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-white">Typography</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-b3-b3-b3)] max-w-2xl mx-auto text-center mb-10">
              I selected a clean, highly legible typeface to ensure clarity during frequent daily use. Font sizes, weights, and spacing were carefully balanced to improve scannability and reduce cognitive load.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden bg-[#e8e8e8] shadow-lg">
              <div className="relative w-full">
                <Image
                  src={TCS_IMAGES[6]}
                  alt="Typography and components design system"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Color system - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] border-t border-[#B3B3B3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-white">Color system</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-b3-b3-b3)] max-w-2xl mx-auto text-center mb-10">
              A balanced and minimal colour palette was used to maintain visual clarity and consistency. Primary and accent colours guide user attention, reinforce hierarchy, and support key actions without overwhelming the interface.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden bg-[#e8e8e8] shadow-lg">
              <div className="relative w-full">
                <Image
                  src={TCS_IMAGES[7]}
                  alt="Color system palette - Primary, Secondary, Text Color, Grey"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Miscellaneous - Dark */}
      <section className="py-16 sm:py-20 bg-[#272727] rounded-b-2xl border-t border-[#B3B3B3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-center mb-6 text-white">Miscellaneous</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <p className="body-large text-[var(--color-b3-b3-b3)] max-w-2xl mx-auto text-center mb-10">
              In addition to the core features, the app includes screens like Contacts, News Feed, and Campus Calendar, offering users a wider range of useful functionalities.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-2xl overflow-hidden bg-white shadow-lg">
              <div className="relative w-full">
                <Image
                  src={TCS_IMAGES[8]}
                  alt="Miscellaneous screens - Student Profile, Contact Guardian, Chat, Login"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Learnings - Light */}
      <section className="py-16 sm:py-20 bg-[#f8f8f8] border-t border-[#B3B3B3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-down">
            <h2 className="h2-section text-[var(--text-color)] mb-8">Learnings</h2>
          </AnimateOnScroll>
          <div className="space-y-6 max-w-2xl">
            <AnimateOnScroll animation="fade-in-up">
              <p className="body-large text-[var(--text-color)] leading-relaxed">
                This was one of my most meaningful projects at Meshilogic. I worked as the sole designer, handling everything from research and user interviews to the final design. It was challenging at times, but also very engaging, and I gave it my best to deliver a quality product.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <p className="body-large text-[var(--text-color)] leading-relaxed">
                I&apos;m always open to learning and improving, so if you notice anything that could be done better or have alternative ideas, I&apos;d truly appreciate your feedback.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 mt-4 text-[var(--color-primary)] font-medium hover:underline"
              >
                ← Back to Work
              </Link>
            </AnimateOnScroll>
          </div>
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
