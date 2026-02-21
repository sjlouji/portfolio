import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedNavLinkProps {
  href: string;
  children: ReactNode;
}

export function AnimatedNavLink({ href, children }: AnimatedNavLinkProps) {
  return (
    <Link href={href} prefetch={false} className="transition-colors hover:text-primary">
      <motion.span
        style={{ display: "inline-block" }}
        whileHover={{ scale: 1.08, color: "#000", opacity: 0.85 }}
        whileTap={{ scale: 0.95, color: "#222" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={(e) => {
          e.preventDefault();
          const el = document.querySelector(href);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            history.replaceState(null, "", href);
          }
        }}
      >
        {children}
      </motion.span>
    </Link>
  );
}
