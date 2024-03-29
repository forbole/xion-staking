import { toast } from "react-toastify";

type Props = {
  address: string;
  className?: string;
};

const AddressShort = ({ address, className }: Props) => {
  if (!address) return null;

  const charsDisplayed = 7;

  const formattedAddress = (() => {
    const left = address.slice(0, charsDisplayed);

    const right = address.slice(address.length - charsDisplayed);

    return [left, right].join("...");
  })();

  return (
    <button
      className={[
        "cursor-pointer text-left text-[12px] font-normal leading-[20px] text-typo-200",
        className,
      ].join(" ")}
      onClick={() => {
        navigator.clipboard.writeText(address);

        toast("Copied to clipboard", {
          type: "info",
        });
      }}
    >
      {formattedAddress}
    </button>
  );
};

export default AddressShort;
