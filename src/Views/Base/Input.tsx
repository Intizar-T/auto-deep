import { Input } from "@material-tailwind/react";
import type { InputProps } from "@material-tailwind/react";

const DIV_CLASS = "";
const LABEL = "Input";
const SIZE = "md";

interface BaseInputProps extends InputProps {
  divClassName?: string;
  func?: () => void;
  iconName?: string;
}

export default function BaseInput({
  divClassName,
  func,
  label,
  size,
  iconName,
}: BaseInputProps) {
  return (
    <div className={`${DIV_CLASS} ${divClassName} || ''`}>
      <Input
        label={label || LABEL}
        size={size || SIZE}
        icon={<i className={iconName || "bi bi-search"} />}
        onChange={() => {
          if (func) func();
        }}
      />
    </div>
  );
}
