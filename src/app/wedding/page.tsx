import type { Metadata } from "next";
import WeddingPage from "./wedding-page";

export const metadata: Metadata = {
  title: "Joan Louji & Angelene Vidhya — Holy Matrimony",
  description:
    "Together with their families, we cordially invite you to celebrate the Holy Matrimony of Joan Louji and Angelene Vidhya on Sunday, 12 July 2026.",
};

export default function Page() {
  return <WeddingPage />;
}
