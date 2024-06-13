import clsx from "clsx";

const DropdownMenu = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx("dropdown-menu", className)} {...props} />
);

const Dropdown = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx("dropdown", className)} {...props} />
);

Dropdown.Menu = DropdownMenu;

export default Dropdown;
