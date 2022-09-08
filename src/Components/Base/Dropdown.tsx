import { HTMLProps, PropsWithChildren, useEffect } from "react";

type BaseDropdownProps = PropsWithChildren<HTMLProps<HTMLDivElement>> & {
  onClose: () => void;
  id: string;
};

export default function BaseDropdown({
  children,
  className,
  onClose,
  id,
}: BaseDropdownProps) {
  useEffect(() => {
    const hideDropdown: EventListener = ({ target }) => {
      if ((target as HTMLElement).closest(`#${id}`)) return;
      onClose();
    };
    document.addEventListener("mousedown", hideDropdown);

    return () => {
      document.removeEventListener("mousedown", hideDropdown);
    };
  }, []);

  return (
    <div className={`${className} || '`} id={id}>
      {children}
    </div>
  );
}
