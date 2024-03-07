import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollTopBehaviour() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // You can use 'auto' or 'instant' as well
    });
  }, [pathname]);

  return <></>;
}
