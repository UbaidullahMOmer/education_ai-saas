import { ShieldQuestion } from "lucide-react";
// import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="relative h-52 w-52">
        <ShieldQuestion className="w-full h-full text-[#153448]" />
      </div>
      <p className="text-muted-foreground text-sm text-[#153448] text-center">
        {label}
      </p>
    </div>
  );
};
