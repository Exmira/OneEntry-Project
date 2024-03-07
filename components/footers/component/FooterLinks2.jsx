import { links2 } from "@/data/footerlink";
import Link from "next/link";
import React from "react";

export default function FooterLinks2() {
  return (
    <>
      {links2.map((link) => (
        <li key={link.id}>
          <Link scroll={false} href={link.href}>
            <span className="link-effect">
              <span className="effect-1">{link.text}</span>
              <span className="effect-1">{link.text}</span>
            </span>
          </Link>
        </li>
      ))}
    </>
  );
}
