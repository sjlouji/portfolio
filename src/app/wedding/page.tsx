import type { Metadata } from "next";
import WeddingPage from "./wedding-page";

export const metadata: Metadata = {
  title: "Joan Louji & Angeline Vidhya — Wedding Celebrations",
  description:
    "Join us as we celebrate the wedding of Joan Louji and Angeline Vidhya on July 11–12, 2026.",
};

export default function Page() {
  return <WeddingPage />;
}
