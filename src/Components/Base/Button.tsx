import { Button } from "@material-tailwind/react";
import type { ButtonProps } from "@material-tailwind/react";

const CLASS = "";
const VARIANT = "text";
const SIZE = "sm";
const COLOR = undefined;
const RIPPLE = true;

interface BaseButtonProps extends ButtonProps {
  className?: string;
  func?: () => void;
}

export default function BaseButton({
  children,
  className,
  variant,
  size,
  color,
  ripple,
  func,
}: BaseButtonProps) {
  return (
    <Button
      className={`${CLASS} ${className || ""}`}
      variant={variant || VARIANT}
      size={size || SIZE}
      ripple={ripple || RIPPLE}
      color={color || COLOR}
      onClick={() => {
        if (func) func();
      }}
    >
      {children}
    </Button>
  );
}
