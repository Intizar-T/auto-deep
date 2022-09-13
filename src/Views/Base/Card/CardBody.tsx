import { CardBody } from "@material-tailwind/react";
import type { CardBodyProps } from "@material-tailwind/react";

const CLASS = "";

interface BaseCardBodyProps extends CardBodyProps {}

function BaseCardBody({ className, children }: BaseCardBodyProps) {
  return (
    <CardBody className={`${CLASS} ${className || ""}`}>{children}</CardBody>
  );
}

export default BaseCardBody;
