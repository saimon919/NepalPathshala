import type { Metadata } from "next";
import ToolsClient from "./ToolsClient";

export const metadata: Metadata = {
  title: "Free Tools — GPA Calculator, BS to AD Converter",
  description: "Free online tools for Nepali students including SEE/NEB GPA Calculator and Bikram Sambat to Anno Domini date converter.",
};

export default function ToolsPage() {
  return <ToolsClient />;
}
