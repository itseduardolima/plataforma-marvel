import bgHome from "../../assets/images/poster-avengers.svg";
import { ImageContainer } from "./styled";

interface ImageBgProps {
  animate: boolean;
}

export const ImageBg = ({ animate }: ImageBgProps) => {
  return (
    <ImageContainer animate={animate}>
      <img src={bgHome} alt="background" />
    </ImageContainer>
  );
};
