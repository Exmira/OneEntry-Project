import { links4 } from "@/data/footerlink";
import Link from "next/link";
import React from "react";

export default function FooterLinks4() {
  return (
    <>
      {links4.map((link) => (
        <li key={link.id}>
          <Link scroll={false} href={link.href}>
            {link.text}
          </Link>
        </li>
      ))}
    </>
  );
}
