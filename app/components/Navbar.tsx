import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-light-bg)]/80 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={193}
                height={33}
                priority
                className="w-32 sm:w-40 md:w-48 h-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
            <Link
              href="/"
              className="nav-menu text-[#171717] hover:text-[var(--color-primary)] transition-colors text-sm sm:text-base"
            >
              Home
            </Link>
            <Link
              href="/#work"
              className="nav-menu text-[#171717] hover:text-[var(--color-primary)] transition-colors text-sm sm:text-base"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="nav-menu text-[#171717] hover:text-[var(--color-primary)] transition-colors text-sm sm:text-base"
            >
              About
            </Link>
          </div>
        </div>
      </div>
      {/* Gradient fade at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[var(--color-light-bg)]/0 pointer-events-none" />
    </nav>
  );
}

