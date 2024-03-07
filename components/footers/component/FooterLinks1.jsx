import { links } from "@/data/footerlink";
import Link from "next/link";
import React from "react";

export default function FooterLinks1() {
  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
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
