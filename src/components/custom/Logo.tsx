import { cn } from "@/lib/utils";

interface CustomLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon";
  className?: string;
}

const sizeMap = {
  sm: { height: 28, iconSize: 28, fontSize: "text-lg" },
  md: { height: 36, iconSize: 36, fontSize: "text-xl" },
  lg: { height: 44, iconSize: 44, fontSize: "text-2xl" },
  xl: { height: 52, iconSize: 52, fontSize: "text-3xl" },
};

export default function CustomLogo({
  size = "md",
  variant = "full",
  className,
}: CustomLogoProps) {
  const { iconSize, fontSize } = sizeMap[size];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 select-none",
        className
      )}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-label="Errandy Trust Shield Logo"
      >
        <defs>
          <linearGradient
            id="errandyTealRibbon"
            x1="8"
            y1="6"
            x2="46"
            y2="26"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#0F766E" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
          <linearGradient
            id="errandyIndigoRibbon"
            x1="10"
            y1="24"
            x2="44"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#312E81" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
          <linearGradient
            id="errandyAmberRibbon"
            x1="16"
            y1="12"
            x2="54"
            y2="58"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
        </defs>

        {/* Right Shield Pillar & Bottom Swift Ribbon (Warm Amber) */}
        <path
          d="M45 11.5L52.8 15.2C53.5 15.6 54 16.3 54 17.1V29.5C54 43.2 44.6 53.1 32 58C24.8 55.2 19.1 50.6 15.6 44.5C18.2 41.2 22.8 38.8 29.2 36.8L46.5 31.2V19.5L45 11.5Z"
          fill="url(#errandyAmberRibbon)"
        />

        {/* Middle Swift E Ribbon (Royal Indigo) */}
        <path
          d="M10.5 27.5C10.5 34.8 12.9 41.2 16.8 46.2C16.2 41.5 19.2 37.8 25.2 35.6L41.5 29.8V21.8L18.2 29.8C14.1 31.2 11.2 29.8 10.5 27.5Z"
          fill="url(#errandyIndigoRibbon)"
        />

        {/* Top Shield Crown & Upper E Ribbon (Deep Teal) */}
        <path
          d="M32 6L42.5 10.8V18.2L17.8 26.8C13.4 28.3 10 26.5 10 22.4V17.1C10 16.1 10.6 15.2 11.5 14.8L32 6Z"
          fill="url(#errandyTealRibbon)"
        />
      </svg>

      {variant === "full" && (
        <span
          className={cn(
            fontSize,
            "font-extrabold tracking-tight text-slate-900 dark:text-white leading-none"
          )}
        >
          Errandy
        </span>
      )}
    </div>
  );
}
