import {
     CardContainer,
     InfoContainer,
     Image,
     Title,
     Rating,
     Price,
} from './styles';

const Card = ({
     id,
     src = '',
     title = 'Title',
     rating = '0.00',
     price = '0.00',
}) => {
     return (
          <CardContainer to={'/products/' + id}>
               <Image src={src} loading="lazy" />
               <InfoContainer>
                    <Title>{title}</Title>
                    <div>
                         <Rating>{rating} / 5</Rating>
                         <Price>{price}$</Price>
                    </div>
               </InfoContainer>
          </CardContainer>
     );
};

export default Card;
