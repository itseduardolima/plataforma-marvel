import { CardContainer, CardContent, BtnDetails, CardImage } from "./styled"
import { useState } from "react";
import { CardDetails } from "./CardDetails";
import { CardItem } from "../../types/cardItem";

interface CardItemProps {
  item: CardItem;
  animate: boolean;
  setIsDetailsOpen: (value: boolean) => void;
  setSelectedCard: (id: number) => void;
  selectedCardId: number;
  index: number;
}

export const Card = ({ item, animate, setSelectedCard, selectedCardId, index, setIsDetailsOpen }: CardItemProps) => {

  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleDetails = () => {
    setDetailsOpen(!detailsOpen);
    setSelectedCard(item?.id ? item.id : 0);
    setIsDetailsOpen(!detailsOpen);
  }

  const isCardSelected = selectedCardId === item.id;

  return (
    <>
      <CardContainer
        animate={animate}
        isCardSelected={isCardSelected}
        detailsOpen={detailsOpen}
        index={index}
      >

        <CardImage src={item.image} alt={item.title} detailsOpen={detailsOpen} />
          
        <CardDetails
          item={item}
          detailsOpen={detailsOpen}
          handleDetails={handleDetails}
          index={index}
        />
        
        {!detailsOpen && <CardContent>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <BtnDetails onClick={handleDetails}>ver detalhes</BtnDetails>
        </CardContent>}
        
      </CardContainer>
      
    </>
  )
}