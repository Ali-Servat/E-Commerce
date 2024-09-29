import { ChangeEvent, MouseEvent } from "react";
import { Category } from "../../../Shared/types";
import { FieldContainer, FilterbarContainer } from "./styles";
import { CATEGORIES } from "../../../Shared/types/constants";
import RangeInput from "../../../components/RangeInput";

type PropTypes = {
  category: Category;
  maxPrice: number;
  onlyHighRatedProducts: boolean;
  onCategoryChange: (category: Category) => void;
  onMaxPriceChange: (maxPrice: number) => void;
  onHighRatedOnlyToggle: () => void;
};

const Filterbar = ({
  category,
  maxPrice,
  onlyHighRatedProducts,
  onCategoryChange,
  onMaxPriceChange,
  onHighRatedOnlyToggle,
}: PropTypes) => {
  const handleCategoryChange = (e: ChangeEvent) => {
    onCategoryChange((e.target as HTMLSelectElement).value as Category);
  };

  const handleMaxPriceChange = (e: MouseEvent<HTMLInputElement>) => {
    onMaxPriceChange(Number((e.target as HTMLInputElement).value));
  };

  return (
    <FilterbarContainer>
      <FieldContainer>
        <label htmlFor="category">
          Category:
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </FieldContainer>
      <FieldContainer>
        <RangeInput
          label="Price range"
          max={1000}
          value={maxPrice}
          onMouseUp={handleMaxPriceChange}
        />
      </FieldContainer>
      <FieldContainer>
        <input
          type="checkbox"
          id="high-rate"
          checked={onlyHighRatedProducts}
          onChange={onHighRatedOnlyToggle}
        />
        <label htmlFor="high-rate">only high rated items</label>
      </FieldContainer>
    </FilterbarContainer>
  );
};

export default Filterbar;
