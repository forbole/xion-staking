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
          background: "#000",
          border: "none",
          borderRadius: "48px",
          bottom: "auto",
          boxShadow: "0px 0px 50px 0px #FFFFFF40",
          left: "50%",
          opacity: 0.8,
          padding: "45px",
          right: "auto",
          top: "50%",
          transform: "translate(-50%, -50%)",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div className="relative w-full">
        <button
          className="absolute right-[-16px] top-[-16px] w-[36px] cursor-pointer"
          dangerouslySetInnerHTML={{ __html: cross }}
          onClick={props.onRequestClose}
        />
        {children}
      </div>
    </Modal>
  );
};

export default CommonModal;
