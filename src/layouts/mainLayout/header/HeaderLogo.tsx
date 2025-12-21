import CustomLogo from "@/components/custom/Logo";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <div className="flex gap-1 items-center -ms-1">
      <Link to="/" className="shrink-0">
        <CustomLogo size="lg" />
      </Link>
    </div>
  );
};

export { HeaderLogo };
