import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
                onClick={(e) => {
                  if (window.location.pathname !== "/") {
                    e.preventDefault();
                    window.location.href = `/#about`;
                  }
                }}
              >
                About Me
              </a>
            </li>
            <li>
              <Link
                href="/purchase"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Purchase
              </Link>
            </li>
            <li>
              <Link
                href="/refinancing"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Refinancing
              </Link>
            </li>
            <li>
              <Link
                href="/prequalify"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
              >
                Prequalify
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
