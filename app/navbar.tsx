import Carts from "@/components/carts";
import NavProfile from "@/components/nav-profile";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Container } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import Link from "next/link";
import authOption from "./api/auth/auth-option";

const Navbar = async () => {
  const session = await getServerSession(authOption);
  return (
    <div className="border-b px-4">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link href="/products">Next-Store</Link>
          <div className="flex items-center gap-4 md:gap-8">
            {session ? (
              <NavProfile />
            ) : (
              <Link href="/api/auth/signin">
                <Button size="sm">Signin</Button>
              </Link>
            )}
            <Carts />
            <ModeToggle />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
