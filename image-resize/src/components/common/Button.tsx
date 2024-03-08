type buttonProps = {
  onClick?: () => void;
  text: string;
};

function Button({ onClick, text }: buttonProps) {
  return (
    <button
      className="rounded-lg bg-amber-500 regular text-white p-1 hover:bg-amber-700 text-sm"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
