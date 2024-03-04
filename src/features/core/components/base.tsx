import Link from "next/link";
import type { PropsWithChildren } from "react";
import { toast } from "react-toastify";

import { clipboard } from "@/features/staking/lib/core/icons";

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
  <Link
    className="text-left font-[14px] font-normal leading-[24px] underline"
    href={href}
  >
    {children}
  </Link>
);

type ButtonPillProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const ButtonPill = ({ className, ...props }: ButtonPillProps) => (
  <button {...props} className={["button-pill", className].join(" ")} />
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
>;

export const InputBox = (props: InputProps) => (
  <span className="relative block">
    <input
      {...props}
      className="h-[96px] w-full bg-black p-[16px] pl-[52px] focus:outline-none"
      style={{
        border: "1px solid white",
        borderRadius: "16px",
        fontSize: "48px",
      }}
    />
    <span className="absolute bottom-0 left-[12px] top-0 flex h-full items-center text-[24px] text-[48px]">
      $
    </span>
  </span>
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
  variant?: "danger" | "default" | "success";
};

export const Button = ({ variant, ...props }: ButtonProps) => {
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
      ].join(" ")}
    />
  );
};
