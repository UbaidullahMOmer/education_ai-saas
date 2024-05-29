import { Pen, PenBoxIcon, Sheet, SpeechIcon } from "lucide-react";

export const tools = [
  {
    label: "Generate Quiz",
    icon: Sheet,
    href: "/dashboard",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    label: "Summzarize Text",
    icon: PenBoxIcon,
    href: "/summarize",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: "Text Explaination",
    icon: SpeechIcon,
    href: "/explain",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    label: "Write with AI",
    icon: Pen,
    href: "/write",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];
