import { CardHeader } from "@material-tailwind/react";
import type { CardHeaderProps } from "@material-tailwind/react";

const CLASS = "";

interface BaseCardHeaderProps extends CardHeaderProps {}

function BaseCardHeader({
  variant,
  color,
  shadow,
  floated,
  className,
  children,
}: BaseCardHeaderProps) {
  return (
    <CardHeader
      className={`${CLASS} ${className || ""}`}
      variant={variant}
      color={color}
      shadow={shadow}
      floated={floated}
    >
      {children}
    </CardHeader>
  );
}

export default BaseCardHeader;
