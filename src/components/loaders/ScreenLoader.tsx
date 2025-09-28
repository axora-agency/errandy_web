import CustomLogo from "../custom/Logo";

const ScreenLoader = () => {
  return (
    <div className="flex flex-col items-center gap-6 justify-center fixed inset-0 z-50 bg-background transition-opacity duration-700 ease-in-out">
      <CustomLogo size="lg" />
      <div className="flex flex-col items-center gap-3">
        <div className="text-muted-foreground font-medium text-lg">Loading...</div>
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

export { ScreenLoader };
