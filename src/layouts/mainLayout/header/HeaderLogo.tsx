import { Link } from "react-router-dom";

const HeaderLogo = () => {

  return (
    <div className="flex gap-1 items-center -ms-1">
      <Link to="/" className="shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">Errandy</span>
        </div>
      </Link>

      <div className="flex items-center">

      </div>
    </div>
  );
};

export { HeaderLogo };
