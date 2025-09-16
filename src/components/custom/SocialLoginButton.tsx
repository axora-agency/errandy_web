import { Button } from "@/components/ui/button";

interface SocialLoginButtonProps {
  provider: "google" | "apple";
  onClick: () => void;
  disabled?: boolean;
}

const providerConfig = {
  google: {
    icon: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
    className: "bg-white text-gray-900 border-gray-300 hover:bg-gray-50",
  },
  apple: {
    icon: "https://img.icons8.com/?size=100&id=86009&format=png&color=000000",
    className: "bg-black text-white hover:bg-gray-900",
  },
};

export function SocialLoginButton({
  provider,
  onClick,
  disabled = false,
}: SocialLoginButtonProps) {
  const config = providerConfig[provider];

  return (
    <Button variant="outline" onClick={onClick} disabled={disabled} className="w-[40px] h-[40px] rounded-full hover:bg-transparent cursor-pointer p-1">
      <img src={config.icon} alt="" />
    </Button>
  );
}
