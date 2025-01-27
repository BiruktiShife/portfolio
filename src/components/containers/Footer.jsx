"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

/**
 * Footer component that displays the website's logo, slogan, and copyright information.
 * Renders only on pages other than the home page.
 *
 * @return {JSX.Element|null} The rendered Footer component or null if on the home page.
 */
export default function Footer() {
  const pathname = usePathname();

  return pathname !== "/" ? (
    <footer className="border-t">
      <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-5 py-5 justify-between container">
        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
        <h3 className="sm:text-2xl text-xl">
          Discover a <span>gateway</span> to unparalleled <br />{" "}
          <span>design</span> creativity.
        </h3>
      </div>
      <div className="bg-accent text-center py-8 text-accent-foreground">
        <p>Copyright © 2025 - All Right Reserved</p>
      </div>
    </footer>
  ) : null;
}
