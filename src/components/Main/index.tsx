import { CardsContainer, CardContainer } from "./styled";
import { useState } from "react";
import { Card } from "../Card";
import { CardItem } from "../../types/cardItem";
import { Overlay } from "../Overlay";


interface cardItem {
  data: CardItem[];
  start: number;
}

export const MainPage = ({ data, start }: cardItem) => {
  const [selectedCardId, setSelectedCardId] = useState(0);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleSelectCard = (id: number) => {
    setSelectedCardId(id);
  };

  const getDisplayedItems = (items: CardItem[]) => {
    const endIndex = start + 3;
    const duplicatedItems = items.concat(items);
    const displayedItems = duplicatedItems.slice(start, endIndex);
    if (endIndex > items.length) {
      return displayedItems.slice(0, 3);
    }
    return displayedItems;
  };

  const displayedItems = getDisplayedItems(data);

  return (
    <>
      <CardsContainer>
        {displayedItems.map((item, index) => {
          return (
            <CardContainer key={item.id}>
              <Card
                animate={true}
                key={item?.id ? item.id + index : index}
                item={item}
                index={index}
                selectedCardId={selectedCardId}
                setSelectedCard={handleSelectCard}
                setIsDetailsOpen={setIsDetailsOpen}
              />
            </CardContainer>
          );
        })}
        <Overlay detailsOpen={isDetailsOpen} />
      </CardsContainer>
    </>
  );
};
