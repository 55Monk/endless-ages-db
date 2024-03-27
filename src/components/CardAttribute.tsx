import { PropsWithChildren, ReactNode } from "react";

type AttributeRowProps = {
  name: string;
  icon: ReactNode;
};

export function AttributeRow(props: PropsWithChildren<AttributeRowProps>) {
  const { name, icon, children } = props;
  return (
    <div className="flex items-center gap-2">
      <div className="mx-[6px] h-5 w-5" title={name}>
        {icon}
      </div>
      <span className="flex flex-wrap gap-1 text-sm">{children}</span>
    </div>
  );
}

type AttributeProps = {
  qualifiers?: ReactNode;
  value: ReactNode;
  faded?: boolean;
};
export function Attribute(props: AttributeProps) {
  const { qualifiers, value, faded } = props;
  return (
    <span className="flex items-center gap-1 rounded border border-neutral-300 px-0.5">
      {qualifiers}
      <strong className={faded ? "opacity-70" : ""}>{value}</strong>
    </span>
  );
}
