import type { PropsWithChildren } from "react";

import { chevron } from "../lib/icons";

type Props<SortMethod> = PropsWithChildren & {
  mobile?: boolean;
  onSort?: (method: SortMethod) => void;
  rigthAlign?: boolean;
  sort?: SortMethod;
  sorting?: [string, string];
};

export const HeaderTitleBase = <SortMethod extends string>({
  children,
  mobile,
  onSort,
  rigthAlign,
  sort,
  sorting,
}: Props<SortMethod>) => {
  const sortingOrder = ((sorting || []) as string[]).concat(["none"]);
  const sortingIndex = sort ? sortingOrder.indexOf(sort) : -1;

  return (
    <div
      className={[
        "flex-row text-[14px] font-normal leading-[14px] tracking-wider",
        rigthAlign ? "justify-end" : "",
        mobile ? "flex" : "hidden md:flex",
      ].join(" ")}
    >
      <button
        className={[
          "flex flex-row items-center gap-[8px] uppercase",
          onSort ? "cursor-pointer" : "cursor-default",
        ].join(" ")}
        onClick={() => {
          if (!onSort || !sort) return;

          const nextIndex =
            (1 + sortingOrder.indexOf(sort)) % (sortingOrder.length - 1); // -1 for none

          const nextSorting = sortingOrder[nextIndex];

          onSort?.(nextSorting as SortMethod);
        }}
      >
        <span>{children}</span>
        {onSort && (
          <span
            dangerouslySetInnerHTML={{ __html: chevron }}
            style={{
              rotate: (() => {
                if (sortingIndex === 0) {
                  return "180deg";
                }

                return "0deg";
              })(),
            }}
          />
        )}
      </button>
    </div>
  );
};

export const ValidatorLogo = ({ logo }: { logo: null | string }) => (
  <div className="flex items-center justify-start">
    {logo ? (
      <img
        alt="Validator logo"
        className="block w-[50px] rounded-full"
        src={logo}
        style={{ height: 50, minHeight: 50, minWidth: 50, width: 50 }}
      />
    ) : (
      <span className="block h-[50px] w-[50px] rounded-full bg-defaultLogo" />
    )}
  </div>
);
