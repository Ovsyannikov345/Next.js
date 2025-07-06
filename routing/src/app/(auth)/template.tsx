"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navlinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const [input, setInput] = useState("");

  return (
    <>
      <div>
        <div>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        {navlinks.map((link) => {
          const isActive =
            pathName === link.href ||
            (pathName.startsWith(link.href) && link.href !== "/");

          return (
            <Link
              key={link.name}
              href={link.href}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </>
  );
}
