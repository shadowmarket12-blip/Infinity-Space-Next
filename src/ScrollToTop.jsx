"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Only scroll to top if pathname actually changed
    if (prevPathname.current !== pathname) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}
