import { ImageContainer } from "./styled";

interface ImageBgProps {
  animate: boolean;
}

export const Background = ({ animate }: ImageBgProps) => {
  return <ImageContainer animate={animate} />;
};
