import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import Link from "next/link";
import type { FC, PropsWithChildren, ReactNode } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

import { useCore } from "../context/hooks";
import { setPopupOpenId } from "../context/reducer";
import { clipboard, loader, loader2, search } from "../lib/icons";

type TypographyProps = PropsWithChildren & {
  className?: string;
  title?: string;
};

export const Title = ({ children, className = "", title }: TypographyProps) => (
  <div
    className={[
      "text-[24px] font-bold leading-[28px] text-white",
      className,
    ].join(" ")}
    title={title}
  >
    {children}
  </div>
);

export const HeroText = ({
  children,
  className = "",
  title,
}: TypographyProps) => (
  <div
    className={["text-[32px] font-light leading-[38px]", className].join(" ")}
    title={title}
  >
    {children}
  </div>
);

export const Heading2 = ({
  children,
  className = "",
  responsive = false,
  title,
}: TypographyProps & { responsive?: boolean }) => (
  <div
    className={[
      "text-white; text-[40px] font-bold leading-[36px]",
      responsive ? "&:text-[24px] &:leading-[28px]" : "",
      className,
    ].join(" ")}
    title={title}
  >
    {children}
  </div>
);

export const Heading8 = ({
  children,
  className = "",
  color = "text-[#ffffff80]",
  title,
}: TypographyProps & { color?: string }) => (
  <div
    className={["text-[14px] font-bold leading-[16px]", color, className].join(
      " ",
    )}
    title={title}
  >
    {children}
  </div>
);

export const BodyMedium = ({
  children,
  className = "",
  title,
}: TypographyProps) => (
  <div
    className={[
      "text-[16px] font-normal leading-[24px] text-[#ffffffb3]",
      className,
    ].join(" ")}
    title={title}
  >
    {children}
  </div>
);

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

export const NavLink = ({ children, href }: NavLinkProps) => (
  <Link
    className="text-left font-normal leading-[24px] underline underline-offset-[2px]"
    href={href}
  >
    {children}
  </Link>
);

type ButtonPillProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "danger" | "default";
};

export const ButtonPill = ({
  className,
  variant,
  ...props
}: ButtonPillProps) => (
  <button
    {...props}
    className={[
      "cursor-pointer rounded-full bg-bg-550 px-[16px] py-[4px] text-white hover:bg-bg-600 disabled:cursor-not-allowed disabled:bg-bg-600 disabled:text-typo-150",
      variant === "danger" ? "[&]:bg-dangerBg [&]:text-danger" : "",
      className,
    ].join(" ")}
  />
);

type ButtonLinkProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "danger" | "default" | "success";
};

export const ButtonLink = ({
  className,
  variant,
  ...props
}: ButtonLinkProps) => (
  <button
    {...props}
    className={[
      "cursor-pointer rounded-full bg-transparent px-[8px] py-[4px] text-white disabled:cursor-not-allowed disabled:bg-bg-600 disabled:text-typo-150",
      variant === "danger" ? "[&]:text-danger" : "",
      className,
    ].join(" ")}
  />
);

export const ClipboardCopy = ({ textToCopy }: { textToCopy: string }) => (
  <button
    className="cursor-pointer"
    dangerouslySetInnerHTML={{ __html: clipboard }}
    onClick={() => {
      navigator.clipboard.writeText(textToCopy);

      toast("Copied to clipboard", {
        type: "info",
      });
    }}
  />
);

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  error?: boolean;
};

export const InputBox = ({ error, ...props }: InputProps) => (
  <span className="relative block">
    <input
      {...props}
      className={[
        "h-[96px] w-full rounded-[16px] border-[1px] bg-black p-[16px] pr-[140px] text-[48px] focus:outline-none",
        error ? "border-danger" : "border-[rgba(255,255,255,0.2)]",
      ].join(" ")}
    />
    <span className="absolute bottom-0 right-[12px] top-0 flex h-full items-center text-[48px] font-bold text-[#949494]">
      XION
    </span>
  </span>
);

export const FormError = ({ children }: PropsWithChildren) => (
  <div className="mt-[8px] text-danger">{children}</div>
);

export const OpenInput = ({ className, ...props }: InputProps) => (
  <input
    {...props}
    className={[
      "h-[50px] w-full border-b-[1px] border-b-bg-400 bg-black py-[8px] focus:outline-none",
      className,
    ].join(" ")}
  />
);

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  isLoading?: boolean;
  variant?: "danger-naked" | "danger" | "default" | "success";
};

export const Button = ({
  className,
  isLoading,
  variant,
  ...props
}: ButtonProps) => {
  const colors = (() => {
    if (variant === "danger")
      return "text-danger disabled:text-typo-150 bg-[#D745061A]";

    if (variant === "danger-naked")
      return "text-danger disabled:text-typo-150 bg-transparent border-[1px] border-danger disabled:border-typo-150";

    if (variant === "success")
      return "bg-success text-black disabled:bg-green-400";

    return "bg-white text-black disabled:bg-bg-400";
  })();

  return (
    <button
      {...props}
      className={[
        "w-full rounded-[8px] px-[12px] py-[16px] text-black disabled:cursor-not-allowed",
        colors,
        className || "",
      ].join(" ")}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <span
            className="animate-spin"
            dangerouslySetInnerHTML={{ __html: loader }}
          />
        </span>
      ) : (
        props.children
      )}
    </button>
  );
};

type FloatingDropdownProps = {
  children: ReactNode;
  className?: string;
  id: string;
  modalClass?: string;
  offset?: number;
  placement?: "bottom-end" | "bottom-start" | "bottom" | "right" | "top";
  Trigger: FC<{ id?: string }>;
};

export const FloatingDropdown = ({
  children,
  className,
  id,
  modalClass,
  offset,
  placement,
  Trigger,
}: FloatingDropdownProps) => {
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  const { core } = useCore();
  const isOpen = core.state.popupOpenId === id;

  return (
    <div className={[className].join(" ")}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          core.dispatch(setPopupOpenId(id));
        }}
        ref={setAnchor}
      >
        <Trigger id={id} />
      </button>
      {isOpen && (
        <ClickAwayListener
          onClickAway={() => {
            if (isOpen) {
              core.dispatch(setPopupOpenId(null));
            }
          }}
        >
          <BasePopup
            anchor={anchor}
            className={[modalClass].join(" ")}
            offset={offset}
            open={isOpen}
            placement={placement}
            withTransition
          >
            {children}
          </BasePopup>
        </ClickAwayListener>
      )}
    </div>
  );
};

type SearchInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const SearchInput = (props: SearchInputProps) => (
  <div className="relative">
    <div className="z-5 absolute bottom-[10px] left-0">
      <div dangerouslySetInnerHTML={{ __html: search }} />
    </div>
    <input
      {...props}
      className="border-b-[1px] border-b-transparent bg-transparent pb-[8px] pl-[24px] text-white outline-none hover:border-b-bg-400 focus:border-b-bg-400"
    />
  </div>
);

type TabButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  active?: boolean;
};

export const TabButton = ({ active, ...props }: TabButtonProps) => (
  <button
    {...props}
    className={[
      "border-b-[1px] pb-[4px] text-[12px] uppercase leading-[12px] tracking-[1.5px]",
      active ? "border-b-white" : "border-b-transparent",
    ].join(" ")}
  />
);

export const LoadingBanner = () => (
  <div className="flex flex-col items-center justify-center gap-[28px]">
    <div className="mt-[80px] text-typo-100 opacity-50">
      Loading the data...{" "}
    </div>
    <div className="mb-[80px] flex w-[80px] items-center justify-center">
      <span
        className="animate-spin"
        dangerouslySetInnerHTML={{ __html: loader2 }}
      />
    </div>
  </div>
);
