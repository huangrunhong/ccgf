import clsx from 'clsx';

const DropdownMenu = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx('dropdown-menu', className)} {...props} />
);

const Dropdown = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx('dropdown', className)} tabIndex={0} {...props} />
);

Dropdown.Menu = DropdownMenu;

export default Dropdown;
