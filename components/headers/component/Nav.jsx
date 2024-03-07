"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const isChildActive = (links) => {
    let isActive = false;
    links.forEach((element) => {
      if (
        element.link &&
        element.link?.split("/")[1] == pathname?.split("/")[1]
      ) {
        isActive = true;
      } else if (element.subMenuItems) {
        element.subMenuItems.forEach((element2) => {
          if (
            element2.link &&
            element2.link?.split("/")[1] == pathname?.split("/")[1]
          ) {
            isActive = true;
          }
        });
      }
    });

    return isActive;
  };

  return (
    <>
      {menuItems.map((elm, i) => (
        <li
          key={i}
          className={elm.subMenuItems ? " menu-item-has-children" : ""}
        >
          {elm.subMenuItems ? (
            <>
              <a
                href="#"
                className={isChildActive(elm.subMenuItems) ? "activeMenu" : ""}
              >
                <span className="link-effect">
                  <span className="effect-1">{elm.title}</span>
                  <span className="effect-1">{elm.title}</span>
                </span>
              </a>

              <ul className="sub-menu">
                {elm.subMenuItems.map((elm2, i2) => (
                  <li
                    key={i2}
                    className={
                      elm2.subMenuItems ? " menu-item-has-children" : ""
                    }
                  >
                    {elm2.subMenuItems ? (
                      <>
                        <a
                          href="#"
                          className={
                            isChildActive(elm2.subMenuItems) ? "activeMenu" : ""
                          }
                        >
                          {elm2.title}
                        </a>
                        <ul className="sub-menu">
                          {elm2.subMenuItems.map((elm3, i3) => (
                            <li key={i3}>
                              <Link
                                scroll={false}
                                className={
                                  elm3.link?.split("/")[1] ==
                                  pathname?.split("/")[1]
                                    ? "activeMenu"
                                    : ""
                                }
                                href={elm3.link}
                              >
                                {elm3.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        scroll={false}
                        className={
                          elm2.link?.split("/")[1] == pathname?.split("/")[1]
                            ? "activeMenu"
                            : ""
                        }
                        href={elm2.link}
                      >
                        {elm2.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              scroll={false}
              className={
                elm.link?.split("/")[1] == pathname?.split("/")[1]
                  ? "activeMenu"
                  : ""
              }
              href={elm.link}
            >
              <span className="link-effect">
                <span className="effect-1">{elm.title}</span>
                <span className="effect-1">{elm.title}</span>
              </span>
            </Link>
          )}
        </li>
      ))}
    </>
  );
}
