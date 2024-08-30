import { useEffect, useState } from "react";
import Card from "../../../../components/Card/Card";
import { ItemsListContainer } from "./styles";
import { Product } from "../../../../Shared/types";

type PropTypes = {
  products: Product[];
  currentPagination: number;
  pageSize: number;
};
const ItemsList = ({ products, currentPagination, pageSize }: PropTypes) => {
  const [renderedItems, setRenderedItems] = useState<Product[]>([]);

  useEffect(() => {
    if (products !== undefined) {
      const currentItems = products.slice(
        (currentPagination - 1) * pageSize,
        currentPagination * pageSize
      );
      setRenderedItems(currentItems);
    }
  }, [products, currentPagination]);

  return (
    <ItemsListContainer>
      {renderedItems &&
        renderedItems.map((item) => <Card key={item.id} product={item} />)}
    </ItemsListContainer>
  );
};

export default ItemsList;
