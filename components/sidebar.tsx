"use client";

import { cn } from "@/lib/utils";
import { BoxesIcon, DollarSign, Pen, PenBoxIcon, Sheet, SpeechIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FreeCounter from "./free-counter";

const monserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: BoxesIcon,
    href: "/dashboard",
    color: "text-purple-500",
  },
  {
    label: "Generate Quiz",
    icon: Sheet,
    href: "/quiz",
    color: "text-red-500",
  },
  {
    label: "Summzarize Text",
    icon: PenBoxIcon,
    href: "/summarize",
    color: "text-green-500",
  },
  {
    label: "Text Explaination",
    icon: SpeechIcon,
    href: "/explain",
    color: "text-sky-500",
  },
  {
    label: "Write with AI",
    icon: Pen,
    href: "/write",
    color: "text-orange-500",
  },
  {
    label: "Manage Subscriptions",
    icon: DollarSign,
    href: "/manage-subscriptions",
    color: "text-green-500",
  },
];

interface SideBarProps {
  apiLimitCount: number;
  isPro: boolean;
}


const Sidebar = ({ apiLimitCount = 0, isPro = false }: SideBarProps) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 p-4 flex flex-col h-full bg-[#153448] text-white drop-shadow-xl">
      <Link
        href="/dashboard"
        className="flex items-center justify-center pl-3 mb-6"
      >
        <div className="relative w-14 h-14">
          <Image fill alt="Logo" src="/next.svg" />
        </div>
        <div className="relative w-36 h-12 text-lg font-extrabold mr-4">
          <h1>Company Logo</h1>
        </div>
      </Link>
      <div className="space-y-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 hover:drop-shadow-xl hover:rounded-lg transition",
              pathname === route.href
                ? "text-white bg-white/10 rounded-lg"
                : "text-zinc-400 rounded-lg"
            )}
          >
            <div className="flex items-center flex-1">
              <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
              {route.label}
            </div>
          </Link>
        ))}
      </div>
      <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
    </div>
  );
};
export default Sidebar;
