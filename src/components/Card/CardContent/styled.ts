import styled from "styled-components";

interface AvailableProps {
  needBg: boolean;
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    font-weight: 100;
  }

  @media (max-width: 1025px) {
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 12px;
    }
  }
`;

export const Available = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
  }
`;

export const ImageIconContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "needBg",
})<AvailableProps>`
  margin-top: 10px;

  ${({ needBg }) =>
    needBg &&
    `
    background-color: #fff; 
    width: 50px;
    height: 50px;
    border-radius: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      margin: 0;
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  `}

  img {
    width: 50px;
    height: 50px;
    border-radius: 20%;
  }
`;
