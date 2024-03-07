import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import Modal from "react-modal";

import { cross } from "@/features/staking/lib/core/icons";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onRequestClose: () => void;
};

if (typeof window !== "undefined") {
  Modal.setAppElement(document.body);
}

const CommonModal = ({ children, ...props }: Props) => {
  useEffect(() => {
    if (props.isOpen) {
      const currentOverflow = document.body.style.overflow;

      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = currentOverflow;
      };
    }
  }, [props.isOpen]);

  return (
    <Modal
      {...props}
      style={{
        content: {
          background: "transparent",
          border: "none",
          bottom: "auto",
          boxShadow: "0px 0px 50px 0px #FFFFFF40",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "1fr",
          inset: 0,
          maxHeight: "100%",
          minWidth: "100vw",
          outline: "none",
          overflow: "auto",
          pointerEvents: "none",
          position: "fixed",
          right: "auto",
          width: "100vw",
          zIndex: 10,
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div
        className="relative w-full"
        style={{
          backgroundColor: "#000",
          borderRadius: "48px",
          boxShadow: "0px 0px 50px 0px #FFFFFF40",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          height: "max-content",
          margin: "auto",
          maxWidth: "100vw",
          outline: "none",
          padding: "50px",
          pointerEvents: "auto",
          position: "relative",
          width: "min-content",
        }}
      >
        <button
          className="absolute right-[12px] top-[12px] w-[36px] cursor-pointer"
          dangerouslySetInnerHTML={{ __html: cross }}
          onClick={props.onRequestClose}
        />
        {children}
      </div>
    </Modal>
  );
};

export const ModalDescription = ({ children }: PropsWithChildren) => (
  <div className="mb-[16px] text-[16px] leading-[24px] text-typo-100 opacity-50">
    {children}
  </div>
);

export default CommonModal;
