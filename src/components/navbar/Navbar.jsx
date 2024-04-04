import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-foreground text-white p-4 h-screen">
      <div>
        <Link href="/" className="flex gap-1 items-center">
          <Image
            src="/crypto.jpeg"
            width={60}
            height={60}
            alt="Cryptomatics"
            className="rounded-full border-2 border-primary"
          />
          <h1 className="font-bold text-2xl text-primary">Cryptomatics</h1>
        </Link>
      </div>

      <div className="mt-40">
        <ul>
          <NavLink />
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
