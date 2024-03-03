const TokenColors = ({ text }: { text: string }) => {
  const [token, denom] = text.split(" ");

  return (
    <span>
      <span>{token}</span> <span className="text-typo-200">{denom}</span>
    </span>
  );
};

export default TokenColors;
