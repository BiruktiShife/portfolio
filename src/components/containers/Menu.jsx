"use client";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, MotionButton } from "../ui/button";
import { MobMenu } from "./MobMenu";
import { motion } from "framer-motion";
import { transition, variants } from "@/utils/framer_variants";

export default function Menu() {
  const pathname = usePathname();
  const MotionImage = motion(Image);

  return (
    <>
      <header
        className={cn(
          "fixed z-50 left-0 right-0 top-0 h-20 flex items-center",
          pathname !== "/" &&
            "shadow-lg bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400"
        )}
      >
        <nav className="container flex justify-between items-center">
          <Link href={"/"}>
            <motion.img
              initial="initial"
              animate="animate"
              variants={variants.scale}
              transition={transition.scale}
              src="/logo.png"
              alt="logo"
              className="w-24 h-auto object-contain"
            />
          </Link>

          <ul className="hidden md:flex items-center text-[17px] gap-6 font-medium">
            {ROUTES.map((item, i) => (
              <motion.li
                key={item.id}
                initial="initial"
                animate="animate"
                variants={variants.moveDown}
                transition={{
                  ...transition.moveDown,
                  delay: 0.3 * i,
                }}
              >
                <Link
                  href={item.path}
                  className={cn(
                    "hover:text-primary transition-all",
                    pathname === item.path && "text-primary"
                  )}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          <MotionButton
            initial="initial"
            animate="animate"
            variants={variants.moveLeft}
            transition={transition.moveLeft}
            variant="outline"
            className="hidden md:inline-block"
          >
            Get in Touch
          </MotionButton>

          <MobMenu pathname={pathname} />
        </nav>
      </header>
    </>
  );
}
