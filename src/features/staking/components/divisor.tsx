export const DivisorHorizontal = ({ className }: { className?: string }) => (
  <div className={["h-[1px] w-full bg-bg-400", className || ""].join(" ")} />
);

export const DivisorVertical = () => (
  <div className="h-full w-[1px] bg-bg-400" />
);
