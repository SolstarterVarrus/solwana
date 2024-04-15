import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative w-full flex justify-center items-center">
      <div className="flex items-center justify-between bg-white  mt-16 rounded-3xl border-4 border-purple-theme md:w-3/4 sm:w-full md:h-20 sm:h-14">
        <Link href="/">
          <div className="flex flex-row items-center lg:gap-5 md:gap-2 sm:gap-1">
            <img
              src="/logos/solwana_logo.svg"
              alt="Logo"
              className="rotate-[-8deg] lg:h-10 md:h-8 sm:h-3 lg:ml-10 md:ml-5 sm:ml-2"
            />
            <img
              src="/logos/solwana_logo_text.svg"
              alt="Logo"
              className="lg:h-7 md:h-5 sm:h-3"
            />
          </div>
        </Link>
        <ul className="flex lg:gap-10 md:gap-5 sm:gap-3 lg:mr-10 sm:mr-1">
          <li>
            <Link
              className="lg:text-base sm:text-xs md:tracking-normal  sm:tracking-tighter"
              href="/#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="lg:text-base sm:text-xs md:tracking-normal  sm:tracking-tighter"
              href="/#how-to-buy"
            >
              How to Buy
            </Link>
          </li>
          <li>
            <Link
              className="lg:text-base sm:text-xs md:tracking-normal sm:tracking-tighter"
              href="/#memenomics"
            >
              Memenomics
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
