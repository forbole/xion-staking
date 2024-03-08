export const DivisorHorizontal = ({ className }: { className?: string }) => (
  <div
    className={["h-[1px] w-full bg-[#ffffff33]", className || ""].join(" ")}
  />
);

export const DivisorVertical = () => (
  <div className="h-full w-[1px] bg-[#ffffff33]" />
);
