import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link href={"/home"}>Home</Link> | <Link href={"/login"}>Login</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
