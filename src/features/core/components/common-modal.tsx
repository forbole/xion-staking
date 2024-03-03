import Modal from "react-modal";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onRequestClose: () => void;
};

if (typeof window !== "undefined") {
  Modal.setAppElement(document.body);
}

const CommonModal = (props: Props) => (
  <Modal
    {...props}
    style={{
      content: {
        background: "#000",
        bottom: "auto",
        left: "50%",
        opacity: 0.8,
        right: "auto",
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
    }}
  />
);

export default CommonModal;
