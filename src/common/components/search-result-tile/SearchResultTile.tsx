import { useNavigate } from "react-router-dom";
import { Title, TileContainer, Image, TextContainer } from "./styles";

interface Props {
  title: string;
  name: string;
  imgUrl: string;
  id: string;
}

export const SearchResultTile = ({ title, name, imgUrl, id }: Props) => {
  const navigate = useNavigate()

  return (
    <TileContainer onClick={() => navigate(`/sale/${id}`)}>
      <Image src={imgUrl} alt={''}/>
      <TextContainer>
        <Title>{title}</Title>
        <p>{name}</p>
      </TextContainer>
    </TileContainer>
  )
}
