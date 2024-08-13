import { cn } from "../../lib/utils";

export default function MaxWidthWrapper({
  className,
  children,
  large = false,
}: any) {
  return (
    <div
      className={cn(
        "container",
        large ? "max-w-screen-2xl" : "max-w-6xl",
        className
      )}
    >
      {children}
    </div>
  );
}
