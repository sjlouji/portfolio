import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

const tapVariants = {
  tap: { scale: 0.85, rotate: 10 },
};

export function MotionImage(props: ImageProps) {
  return (
    <motion.span
      style={{ display: "inline-block" }}
      whileTap={tapVariants.tap}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Image {...props} />
    </motion.span>
  );
}
