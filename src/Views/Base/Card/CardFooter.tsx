import { CardFooter } from "@material-tailwind/react";
import type { CardFooterProps } from "@material-tailwind/react";

const CLASS = "";

interface BaseCardFooterProps extends CardFooterProps {}

function BaseCardFooter({ divider, className, children }: BaseCardFooterProps) {
  return (
    <CardFooter divider={divider} className={`${CLASS} ${className || ""}`}>
      {children}
    </CardFooter>
  );
}

export default BaseCardFooter;
