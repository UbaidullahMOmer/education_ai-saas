import Image from "next/image"

export const LoaderStripe = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
        <div className="w-6 h-6 realtive animate-spin">
            <Image
            alt="Logo"
            fill
            src="/logo.png"
            />
        </div>
        <p className="text-sm text-muted-foreground">Please wait...</p>
    </div>
  )
}

