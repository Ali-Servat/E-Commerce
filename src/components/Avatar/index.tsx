import { Container, Image, Name } from "./styles";
import ProfilePicture from "../../App/Assets/Images/pfp.png";

const Avatar = ({ name }: { name: string }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Image src={ProfilePicture} alt="pfp" />
    </Container>
  );
};

export default Avatar;
