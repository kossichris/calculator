interface ButtonProps {
  text: string;
  onClick(): void;
}

const types = {
  number: ["0", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  operator: ["÷", "×", "-", "+", "="],
  clear: ["AC", "+/-", "%"],
};

export default function CalculatorButton({ text, onClick }: ButtonProps) {
  const setStyles = () => {
    const styles = {
      number: "bg-numbers-0 text-color active:bg-numbers-1 ",
      operator:
        "bg-operators-0 text-color font-bold justify-center active:bg-operators-1",
      equal: "bg-clear-0 justify-center active:bg-clear-1",
    };

    return types.number.includes(text)
      ? text === "0"
        ? styles.number + "w-40 justify-start pl-6 pr-28"
        : styles.number + "justify-center"
      : types.operator.includes(text)
      ? styles.operator
      : styles.equal;
  };
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center text-3xl rounded-md w-40 h-16
        md:hover:opacity-70 transition-opacity duration-300
        ${setStyles()}
        `}
    >
      {text}
    </button>
  );
}
