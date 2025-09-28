import * as React from "react";
import { cn } from "@/lib/utils";

type DropdownContext = {
  open: boolean;
  setOpen: (v: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  timerRef: React.MutableRefObject<number | null>;
};

const Ctx = React.createContext<DropdownContext | null>(null);

function useDropdown() {
  const ctx = React.useContext(Ctx);
  if (!ctx)
    throw new Error("Dropdown components must be used within <DropdownMenu>");
  return ctx;
}

function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const timerRef = React.useRef<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <Ctx.Provider value={{ open, setOpen, triggerRef, timerRef }}>
      <div ref={containerRef} className="relative inline-block">
        {children}
      </div>
    </Ctx.Provider>
  );
}

const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ className, onClick, onMouseEnter, onMouseLeave, ...props }, ref) => {
  const { open, setOpen, triggerRef, timerRef } = useDropdown();
  return (
    <button
      type="button"
      aria-haspopup="menu"
      aria-expanded={open}
      data-open={open ? "" : undefined}
      ref={(node) => {
        // @ts-ignore
        if (typeof ref === "function") ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
            node;
        triggerRef.current = node ?? null;
      }}
      className={className}
      onClick={(e) => {
        setOpen(!open);
        onClick?.(e);
      }}
      onMouseEnter={(e) => {
        if (timerRef.current) window.clearTimeout(timerRef.current);
        setOpen(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        if (timerRef.current) window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => setOpen(false), 150);
        onMouseLeave?.(e);
      }}
      {...props}
    />
  );
});
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, style, onMouseEnter, onMouseLeave, ...props }, ref) => {
  const { open, setOpen, timerRef } = useDropdown();
  if (!open) return null;
  return (
    <div
      role="menu"
      ref={ref}
      className={cn(
        "bg-popover text-popover-foreground absolute left-1/2 transform -translate-x-1/2 top-full z-50 mt-2 min-w-[10rem] overflow-hidden rounded-md border p-1 shadow-md dark:shadow-xl dark:shadow-primary/20 dark:border-primary/30",
        className
      )}
      style={style}
      onMouseEnter={(e) => {
        if (timerRef.current) window.clearTimeout(timerRef.current);
        setOpen(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        if (timerRef.current) window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => setOpen(false), 150);
        onMouseLeave?.(e);
      }}
      {...props}
    />
  );
});
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    inset?: boolean;
    asChild?: boolean;
    onClick?: () => void;
    disabled?: boolean;
  }
>(
  (
    { className, inset, asChild, children, disabled, onClick, ...props },
    ref
  ) => {
    const cls = cn(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none",
      inset && "pl-8",
      className
    );
    if (asChild) {
      return <div className={cls}>{children}</div>;
    }
    return (
      <div
        ref={ref}
        className={cls}
        role="menuitem"
        aria-disabled={disabled}
        data-disabled={disabled ? "" : undefined}
        onClick={disabled ? undefined : onClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DropdownMenuItem.displayName = "DropdownMenuItem";

const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-muted -mx-1 my-1 h-px", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

// No-ops to keep API parity
const DropdownMenuGroup = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
const DropdownMenuPortal = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
const DropdownMenuSub = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
const DropdownMenuSubContent = ({
  children,
}: {
  children: React.ReactNode;
}) => <>{children}</>;
const DropdownMenuSubTrigger = ({
  children,
}: {
  children: React.ReactNode;
}) => <>{children}</>;
const DropdownMenuRadioGroup = ({
  children,
}: {
  children: React.ReactNode;
}) => <>{children}</>;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
