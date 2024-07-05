import Link from "next/link";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import NavLink from "@/components/ui/NavLink";
import MobileNavMenu from "@/components/layout/MobileNavMenu";
import ThemeToggler from "@/components/ThemeToggler";

const Header = () => {
  return (
    <header className="w-full max-w-7xl mx-auto px-4 lg:px-8 z-10 py-4 lg:py-10 text-stone-400">
      <nav className="flex items-center justify-between">
        {/* mobile menu */}
        <MobileNavMenu />

        {/* Logo */}
        <div className="hidden sm:block">
          <Link
            href="/"
            className="text-xl uppercase tracking-widest font-extralight"
          >
            Lux<span className="font-bold">Picks</span>
          </Link>
        </div>

        {/* Nav links */}
        <ul className="hidden items-center gap-10 sm:flex">
          <li className="text-sm font-medium uppercase tracking-wider">
            <NavLink href="/products">Products</NavLink>
          </li>
          <SignedIn>
            <li className="text-sm font-medium uppercase tracking-wider">
              <NavLink href="/dashboard">Dashboard</NavLink>
            </li>
          </SignedIn>
        </ul>

        {/* Theme Button */}
        <div className="flex items-center justify-between gap-1">
          <ThemeToggler />
          <div className="flex items-center justify-center min-w-14 min-h-6">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
