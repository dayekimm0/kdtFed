import { ReactNode } from "react";
import Link from "next/link";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header>
        <Link href={"/"}>💭 ONEBITE BOOKS</Link>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default GlobalLayout;
