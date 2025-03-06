import clsx from 'clsx';

interface InformativeProps {
  header?: string;
  className?: string;
  children?: React.ReactNode;
}

const Informative = ({ header, className, children }: InformativeProps) => (
  <div className={clsx('informative', className)}>
    {header && <h3>{header}</h3>}
    {children}
  </div>
);

export default Informative;
