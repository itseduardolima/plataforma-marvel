import { MainPage } from "../../components/Main";
import { ImageBg } from "../../components/ImageBg";
import { ButtonsCard } from "../../components/ButtonsCard";
import { MainContainer, MainContent } from "../../styles/Container";
import { useState } from "react";
import { CardItem } from "../../types/cardItem";
import { CustomSelect } from "../../components/SelectFilter";

import moviesData from "../../data/moviesData";
import { Header } from "../../components/Header";

export const Movies = () => {
  const [start, setStart] = useState(0);
  const [filter, setFilter] = useState("releaseDate");

  const filterOptions = [
    { label: "Lançamento", value: "releaseDate" },
    { label: "Cronologia", value: "chronologicalOrder" },
  ];

  const compareDates = (dateA: string, dateB: string) => {
    return new Date(dateA).getTime() - new Date(dateB).getTime();
  };

  const sortMovies = (movies: CardItem[]) => {
    return movies.slice().sort((a: CardItem, b: CardItem) => {
      if (filter === "releaseDate") {
        return compareDates(a.releaseDate!, b.releaseDate!);
      }
      return (a.chronologicalOrder ?? 0) - (b.chronologicalOrder ?? 0);
    });
  };

  const displayedMovies = sortMovies(moviesData);

  return (
    <>
    <Header />
      <MainContainer>
        <ImageBg animate={false} />
        <MainContent>
          <CustomSelect
            options={filterOptions}
            value={
              filterOptions.find((option) => option.value === filter)?.label ||
              ""
            }
            onChange={(newValue) => setFilter(newValue)}
          />

          <MainPage data={displayedMovies} start={start} />
        </MainContent>

        <ButtonsCard data={displayedMovies} setStart={setStart} />
      </MainContainer>
    </>
  );
};
