import Cart from "@/components/cart";
import NavProfile from "@/components/nav-profile";
import { ModeToggle } from "@/components/theme-toggle";
import { Container } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import Link from "next/link";
import authOption from "./api/auth/auth-option";

const Navbar = async () => {
  const session = await getServerSession(authOption);
  return (
    <div className="shadow-md px-4">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link href="/">Next-Store</Link>
          <ul className="flex items-center gap-4 md:gap-8">
            {session ? (
              <NavProfile />
            ) : (
              <Link href="/api/auth/signin">Signin</Link>
            )}
            <Cart />
            <ModeToggle />
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
