import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import Link from "next/link";
import type { FC, PropsWithChildren, ReactNode } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

import { clipboard, loader, search } from "@/features/staking/lib/core/icons";

import { useCore } from "../context/hooks";
import { setPopupOpenId } from "../context/reducer";

type TypographyProps = PropsWithChildren & {
  className?: string;
};

export const Title = ({ children, className = "" }: TypographyProps) => (
  <div className={["typo-title", className].join(" ")}>{children}</div>
);

export const HeroText = ({ children, className = "" }: TypographyProps) => (
  <div className={["typo-hero", className].join(" ")}>{children}</div>
);

export const Heading2 = ({ children, className = "" }: TypographyProps) => (
  <div className={["heading2", className].join(" ")}>{children}</div>
);

export const Heading8 = ({
  children,
  className = "",
  color = "text-typo-150",
}: TypographyProps & { color?: string }) => (
  <div className={["heading8", color, className].join(" ")}>{children}</div>
);

export const BodyMedium = ({ children, className = "" }: TypographyProps) => (
  <div className={["typo-body-medium", className].join(" ")}>{children}</div>
);

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

export const NavLink = ({ children, href }: NavLinkProps) => (
  <Link className="text-left font-normal leading-[24px] underline" href={href}>
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
      "cursor-pointer rounded-full bg-bg-550 px-[8px] py-[4px] text-white hover:bg-bg-600 disabled:cursor-not-allowed disabled:bg-bg-600 disabled:text-typo-150",
      variant === "danger" ? "[&]:text-danger" : "",
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
        error ? "border-danger" : "border-white",
      ].join(" ")}
    />
    <span className="absolute bottom-0 right-[12px] top-0 flex h-full items-center  text-[48px] text-typo-300">
      XION
    </span>
  </span>
);

export const FormError = ({ children }: PropsWithChildren) => (
  <div className="text-danger">{children}</div>
);

export const OpenInput = (props: InputProps) => (
  <input
    {...props}
    className="h-[50px] w-full bg-black py-[8px] focus:outline-none"
    style={{
      border: "none",
      borderBottom: "1px solid white",
    }}
  />
);

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  isLoading?: boolean;
  variant?: "danger" | "default" | "success";
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
    <div className="z-5 absolute bottom-[5px] left-0">
      <div dangerouslySetInnerHTML={{ __html: search }} />
    </div>
    <input
      {...props}
      className="border-b-[1px] border-b-transparent bg-transparent pl-[24px] text-white outline-none hover:border-b-white focus:border-b-white"
    />
  </div>
);