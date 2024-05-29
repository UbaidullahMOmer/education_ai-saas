"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";

import {
  Pen, PenBoxIcon, Sheet, SpeechIcon,
  Zap, Check
} from "lucide-react";

import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useProModal } from "@/hooks/user-pro-modal";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { LoaderStripe } from "./loader-stripe";

const tools = [
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


export const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.log("STRIPE_CLIENT_ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to Rachel
              <Badge className=" uppercase text-sm py-1 bg-black">
                Pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            <div className="grid grid-cols-1 gap-x-2">
              {tools.map((tool, index) => (
                <div key={index}>
                  <Card
                    key={tool.label}
                    className="p-3 border-black/5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-x-4">
                      <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                        <tool.icon className={cn("w-6 h-6", tool.color)} />
                      </div>
                      <div className="font-semibold text-[0.75rem]">{tool.label}</div>
                    </div>
                    <Check />
                  </Card>
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {!loading ? (
            <Button  className="w-full bg-black" onClick={onSubscribe}>
              Upgrade
              <Zap className="w-4 h-4 ml-2 fill-white" />
            </Button>
          ) : (
            <LoaderStripe />
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
