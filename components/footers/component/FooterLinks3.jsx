import { links3 } from "@/data/footerlink";
import Link from "next/link";
import React from "react";

export default function FooterLinks3() {
  return (
    <>
      {links3.map((link) => (
        <li key={link.id}>
          <Link scroll={false} href={link.href}>
            {link.text}
          </Link>
        </li>
      ))}
    </>
  );
}
