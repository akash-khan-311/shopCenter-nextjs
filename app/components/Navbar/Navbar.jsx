import Image from "next/image";
import Link from "next/link";
import Container from "../Shared/Container";

const Navbar = () => {
  return (
    <Container>
        <nav className="flex items-center justify-between py-5 lg:py-6">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            src="/menu.svg"
            className="lg:hidden"
            alt="Menu Icon"
            width={20}
            height={20}
          />
          <Link href="/">
            <Image
              src="/lws-logo-black.svg"
              alt="LWS Logo"
              width={150}
              height={150}
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src="/avatar.svg"
          className="hidden lg:block "
          alt="login acount avatar"
          width={18}
          height={18}
        />
        <Image
          src="/shopping-Cart.svg"
          className="block "
          alt="shopping cart icon"
          width={20}
          height={20}
        />
      </div>
    </nav>
    </Container>
  );
};
export default Navbar;
