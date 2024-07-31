import clsx from "clsx";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
}

const Section = ({ className, heading, children, ...props }: SectionProps) => (
  <section className={clsx("mb-8", className)} {...props}>
    <hr />
    <h2 className="mt-4 mb-8">{heading}</h2>
    {children}
  </section>
);

export default Section;
