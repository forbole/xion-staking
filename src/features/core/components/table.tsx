import type { PropsWithChildren } from "react";

import { chevron } from "../lib/icons";

type Props<SortMethod> = PropsWithChildren & {
  onSort?: (method: SortMethod) => void;
  rigthAlign?: boolean;
  sort?: SortMethod;
  sorting?: [string, string];
};

export const HeaderTitleBase = <SortMethod extends string>({
  children,
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
        "flex flex-row text-[14px] font-normal leading-[14px] tracking-wider",
        rigthAlign ? "justify-end" : "",
      ].join(" ")}
    >
      <button
        className={[
          "flex flex-row items-center gap-[8px]",
          onSort ? "cursor-pointer" : "",
        ].join(" ")}
        onClick={() => {
          if (!onSort || !sort) return;

          const nextIndex =
            (1 + sortingOrder.indexOf(sort)) % sortingOrder.length;

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
