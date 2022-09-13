import { Card } from "@material-tailwind/react";
import type { CardProps } from "@material-tailwind/react";

const CLASS = "";

interface BaseCardProps extends CardProps {}

function BaseCard({
  variant,
  color,
  shadow,
  className,
  children,
}: BaseCardProps) {
  return (
    <Card
      className={`${CLASS} ${className || ""}`}
      variant={variant}
      shadow={shadow}
      color={color}
    >
      {children}
    </Card>
  );
}

export default BaseCard;
