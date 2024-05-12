import styled from "styled-components";

interface CardDetailsProps {
  index: number;
  isMovie: boolean;
}

export const CardDetailsContainer = styled.div`
  color: white;

  width: 100%;
  height: 439px;
  background: linear-gradient(to bottom, red, rgba(78, 0, 0, 1));
`;

export const CardDetailsContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isMovie",
})<CardDetailsProps>`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
  width: calc(55%);
  height: 439px;
  padding: 30px;
  position: absolute;
  right: ${({ index }) => (index === 0 ? "0" : "auto")};

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  h3 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1;
    margin-top: 10px;
  }

  li {
    font-size: 16px;
    font-weight: 100;
    list-style: none;
  }

  //Imagem da estrela
  img {
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 5px;
  }

  @media (max-width: 1025px) {
  
    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 20px;
    }

    li {
      font-size: 16px;
    }

    img {
      width: 25px;
      height: 25px;
      margin-top: 5px;
      margin-right: 5px;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 18px;
    }

    li {
      font-size: 14px;
    }

    img {
      width: 20px;
      height: 20px;
      margin-top: 5px;
      margin-right: 5px;
    }
  }
`;

export const BtnClose = styled.img`
  z-index: 10;
  position: absolute;
  cursor: pointer;
  bottom: 20px;
  right: 25px;
  width: 30px;
  height: 30px;

  @media (max-width: 600px) {
    width: 25px;
    height: 25px;
    bottom: 20px;
    right: 20px;
  }
`;
