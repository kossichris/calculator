export type Action = {
  type:
    | "ADD_DIGIT"
    | "SET_OPERATION"
    | "EVALUATE"
    | "PERCENTAGE"
    | "INVERT"
    | "CLEAR"
    | "EXP"
    | "LOG"
    | "SQRT"
    | "LN"
    | "LNV"
    | "POW"
    | "TAN"
    | "COS"
    | "SIN"
    | "RAD"
    | "ANS"
    | "DEG";

  payload?: {
    digit?: string;
    operation?: "+" | "-" | "×" | "÷";
  };
};
