import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative w-full flex justify-center items-center">
      <div className="flex items-center justify-between bg-white w-3/4 h-20 mt-16 rounded-3xl border-4 border-purple-theme">
        <div>
          <img src="/logos/solwana_logo_full.svg" alt="Logo" className="h-10 ml-10" />
        </div>
        <ul className="flex gap-10 mr-10">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">How to Buy</Link>
          </li>
          <li>
            <Link href="/">Memes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
