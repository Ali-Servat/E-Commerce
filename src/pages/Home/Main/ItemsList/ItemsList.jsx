import { useEffect, useState } from 'react';
import Card from '../../../../components/Card/Card';
import { ItemsListContainer } from './styles';

const ItemsList = ({ items, currentPagination, pageSize }) => {
     const [renderedItems, setRenderedItems] = useState([]);

     useEffect(() => {
          if (items !== undefined) {
               const currentItems = items.slice(
                    (currentPagination - 1) * pageSize,
                    (currentPagination - 1) * pageSize + 8
               );
               setRenderedItems(currentItems);
          }
     }, [items, currentPagination]);

     return (
          <ItemsListContainer>
               {renderedItems &&
                    renderedItems.map((item) => (
                         <Card
                              key={item.id}
                              id={item.id}
                              src={item.image}
                              title={item.title}
                              rating={item.rating.rate}
                              price={item.price}
                         />
                    ))}
          </ItemsListContainer>
     );
};

export default ItemsList;
