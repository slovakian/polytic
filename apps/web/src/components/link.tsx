import { cn } from "@polytik/ui/lib/utils";

type LinkProps = React.ComponentProps<"a">;

export function Link({ className, target = "_blank", rel = "noreferrer", ...props }: LinkProps) {
  return (
    <a
      target={target}
      rel={rel}
      className={cn("text-foreground underline-offset-4 hover:underline", className)}
      {...props}
    />
  );
}
