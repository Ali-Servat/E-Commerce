import {
  CardContainer,
  InfoContainer,
  Image,
  Title,
  Rating,
  Price,
} from "./styles";
import { Product } from "../../Shared/types";

type PropTypes = {
  product: Product;
};

const Card = ({ product }: PropTypes) => {
  const { id, image: imgUrl, title, rating, price } = product;

  return (
    <CardContainer to={"/products/" + id} state={product}>
      <Image src={imgUrl} loading="lazy" />
      <InfoContainer>
        <Title>{title}</Title>
        <div>
          <Rating>{rating?.rate} / 5</Rating>
          <Price>{price}$</Price>
        </div>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;
