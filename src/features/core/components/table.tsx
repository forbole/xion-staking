import type { PropsWithChildren } from "react";

import { chevron } from "../lib/icons";

type Props<SortMethod> = PropsWithChildren & {
  onSort?: (method: SortMethod) => void;
  sort?: SortMethod;
  sorting?: [string, string];
};

export const HeaderTitleBase = <SortMethod extends string>({
  children,
  onSort,
  sort,
  sorting,
}: Props<SortMethod>) => {
  const sortingOrder = ((sorting || []) as string[]).concat(["none"]);
  const sortingIndex = sort ? sortingOrder.indexOf(sort) : -1;

  return (
    <div className="text-[14px] font-normal leading-[14px] tracking-wider">
      <span className="relative">
        {children}{" "}
        {!!onSort && !!sort && (
          <button
            className="absolute right-[-16px] top-[6px] cursor-pointer"
            dangerouslySetInnerHTML={{ __html: chevron }}
            onClick={() => {
              if (!onSort) return;

              const nextIndex =
                (1 + sortingOrder.indexOf(sort)) % sortingOrder.length;

              const nextSorting = sortingOrder[nextIndex];

              onSort?.(nextSorting as SortMethod);
            }}
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
      </span>
    </div>
  );
};
