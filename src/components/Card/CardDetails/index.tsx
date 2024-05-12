import star from "../../../assets/images/star.svg";
import iconClose from "../../../assets/images/icon-close.png";
import { CardDetailsContainer, CardDetailsContent, BtnClose } from "./styled";
import { CardItem } from "../../../types/cardItem";
import { CardContent } from "../CardContent";

interface CardDetailsProps {
  item: CardItem;
  detailsOpen: boolean;
  handleDetails: () => void;
  index: number;
}

export const CardDetails = ({
  item,
  detailsOpen,
  handleDetails,
  index,
}: CardDetailsProps) => {
  const isMovie = item.criticRating !== undefined;
  return (
    <>
      {detailsOpen && (
        <CardDetailsContainer>
          <CardDetailsContent index={index} isMovie={isMovie}>
            <h1>{item.title}</h1>

            {item.appearances && (
              <div>
                <h2>Aparições</h2>
                <ul>
                  {item.appearances.map((appearance, index) => (
                    <li key={index}>{appearance}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.criticRating && <CardContent item={item} />}

            <div>
              <h3>{isMovie ? "Crítica" : "Avaliações dos Fãs"}</h3>
              {Array.from({ length: 5 }, (_, i) => (
                <img
                  key={i}
                  src={star}
                  style={{
                    filter:
                      i <
                      (isMovie ? item.criticRating ?? 0 : item.fanRating ?? 0)
                        ? "grayscale(0%)"
                        : "grayscale(100%)",
                  }}
                />
              ))}
            </div>
          </CardDetailsContent>

          <BtnClose src={iconClose} alt="CloseButton" onClick={handleDetails} />
        </CardDetailsContainer>
      )}
    </>
  );
};
