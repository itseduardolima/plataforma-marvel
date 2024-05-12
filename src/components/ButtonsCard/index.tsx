import { ButtonCard, ButtonsContainer } from "./styled";
import { CardItem } from "../../types/cardItem";

import Arrow from "../../assets/images/arrow.svg";

interface ButtonsNextCardProps {
  data: CardItem[];
  setStart: (value: number | ((prevVal: number) => number)) => void;
}

export const ButtonsCard = ({ data, setStart }: ButtonsNextCardProps) => {
  const handleNext = () => {
    setStart((prevStart) => (prevStart + 1) % data.length);
  };

  const handlePrevious = () => {
    setStart((prevStart) => {
      return prevStart === 0 ? data.length - 1 : prevStart - 1;
    });
  };

  return (
    <ButtonsContainer>
      <ButtonCard onClick={handleNext} position={"right"}>
        <img src={Arrow} alt="Arrow" />
      </ButtonCard>
      <ButtonCard onClick={handlePrevious} position={"left"}>
        <img src={Arrow} alt="Arrow" />
      </ButtonCard>
    </ButtonsContainer>
  );
};
