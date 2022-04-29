export type State = {
  previousValue?: string | null;
  currentValue?: string | null;
  operation?: "+" | "-" | "×" | "÷" | "π";
  overwrite?: boolean;
};
