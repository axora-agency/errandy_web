import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Settings, LogOut, Monitor } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserStore } from "@/store/userStore";
import { useTheme } from "@/components/theme-provider";
import { auth } from "@/lib/auth";

const UserMenu = () => {
  const { user, setUser } = useUserStore();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const getInitials = (name?: string | null) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getThemeLabel = () => {
    switch (theme) {
      case "dark":
        return "Dark";
      case "light":
        return "Light";
      case "system":
        return "System";
      default:
        return "System";
    }
  };

  const cycleTheme = () => {
    const themes = ["light", "dark", "system"] as const;
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      console.error("Logout error:", e);
    }
    setUser(null);
    setIsOpen(false);
    navigate("/auth/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!user) return null;

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <Avatar className="size-9">
          <AvatarImage
            src={user.image || undefined}
            alt={user.name || "User"}
          />
          <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">
            {getInitials(user.name)}
          </AvatarFallback>
        </Avatar>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-popover text-popover-foreground overflow-hidden rounded-md border p-1 shadow-md dark:shadow-xl dark:shadow-primary/20 dark:border-primary/30 z-50">
          {/* User Info Section */}
          <div className="px-3 py-2">
            <div className="flex items-center space-x-3">
              <Avatar className="size-10">
                <AvatarImage
                  src={user.image || undefined}
                  alt={user.name || "User"}
                />
                <AvatarFallback className="bg-primary/10 text-primary font-medium">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{user.name}</div>
                <div className="text-xs text-muted-foreground truncate">
                  {user.email}
                </div>
                {user.activeRole && (
                  <div className="text-xs text-muted-foreground capitalize">
                    {user.activeRole.toLowerCase()}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-muted -mx-1 my-1 h-px" />

          {/* Menu Items */}
          <Link
            to="/profile"
            className="flex items-center space-x-2 w-full px-2 py-2 text-sm rounded-sm hover:bg-muted focus:bg-muted outline-none"
            onClick={() => setIsOpen(false)}
          >
            <User className="size-4" />
            <span>Your Profile</span>
          </Link>

          <button
            onClick={() => {
              cycleTheme();
              setIsOpen(false);
            }}
            className="flex items-center space-x-2 w-full px-2 py-2 text-sm rounded-sm hover:bg-muted focus:bg-muted outline-none"
          >
            <Monitor className="size-4" />
            <span>Theme: {getThemeLabel()}</span>
          </button>

          <div className="bg-muted -mx-1 my-1 h-px" />

          <Link
            to="/settings"
            className="flex items-center space-x-2 w-full px-2 py-2 text-sm rounded-sm hover:bg-muted focus:bg-muted outline-none"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="size-4" />
            <span>Account Settings</span>
          </Link>

          <div className="bg-muted -mx-1 my-1 h-px" />

          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 w-full px-2 py-2 text-sm rounded-sm hover:bg-muted focus:bg-muted outline-none text-destructive"
          >
            <LogOut className="size-4" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export { UserMenu };
