import { Link, useParams } from 'react-router-dom';
import { api } from '../../Shared/utils/api';
import useFetch from '../../Shared/hooks/useFetch';
import { ImageContainer, InfoContainer, ItemPageContainer } from './styles';

const ItemPage = () => {
     let { itemId } = useParams();
     const item = useFetch(api.getItem(itemId));

     return (
          item && (
               <>
                    <Link to="/home">Previous Page</Link>
                    <ItemPageContainer>
                         <div>
                              <ImageContainer src={item.image} alt="" />
                         </div>
                         <InfoContainer>
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                              <div>
                                   <span>price: {item.price}$</span>
                                   <span>rating: {item.rating.rate}</span>
                                   <button>Add to Cart</button>
                              </div>
                         </InfoContainer>
                    </ItemPageContainer>
               </>
          )
     );
};

export default ItemPage;
