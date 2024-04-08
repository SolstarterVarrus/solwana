import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative w-full flex justify-center items-center">
      <div className="flex items-center justify-between bg-white w-3/4 h-20 mt-16 rounded-3xl border-4 border-purple-theme">
        <Link href="/">
          <div className="flex flex-row gap-5 items-center ">
            <img
              src="/logos/solwana_logo.svg"
              alt="Logo"
              className="h-10 ml-10 rotate-[-8deg]"
            />
            <img
              src="/logos/solwana_logo_text.svg"
              alt="Logo"
              className="h-7"
            />
          </div>
        </Link>
        <ul className="flex gap-10 mr-10">
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#how-to-buy">How to Buy</Link>
          </li>
          <li>
            <Link href="/#memenomics">Memenomics</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
