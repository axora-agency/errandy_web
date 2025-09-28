import { Logo, LogoDark } from "@/assets";
import { useTheme } from "../theme-provider";
import { cn } from "@/lib/utils";

interface CustomLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "h-[30px]",
  md: "h-[40px]",
  lg: "h-[60px]",
  xl: "h-[80px]"
};

export default function CustomLogo({ size = "md", className }: CustomLogoProps) {
  const { resolvedTheme } = useTheme()
  return (
    <img
      src={resolvedTheme === "dark" ? LogoDark : Logo}
      alt="Custom Logo"
      className={cn(sizeClasses[size], "max-w-none object-contain", className)}
    />
  );
}
