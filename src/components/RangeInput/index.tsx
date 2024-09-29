import { MouseEvent } from "react";

type PropTypes = {
  label: string;
  max: number;
  value: number;
  onMouseUp: (e: MouseEvent<HTMLInputElement>) => void;
};

const RangeInput = ({ label, max, value, onMouseUp }: PropTypes) => {
  return (
    <>
      <label htmlFor="price-range">{label}:</label>
      <input
        type="range"
        id="price-range"
        min="0"
        max={max}
        step="10"
        defaultValue={max}
        onMouseUp={onMouseUp}
      />
      <span>{value}$</span>
    </>
  );
};

export default RangeInput;
