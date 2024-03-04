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

export const InputBox = () => <input />;
