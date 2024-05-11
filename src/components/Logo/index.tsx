import { LogoContainer } from "./styled";

interface LogoProps {
  fontSize?: string;
  animate?: boolean;
}

export const Logo = ({ fontSize = "60px", animate }: LogoProps) => {
  return (
    <LogoContainer fontSize={fontSize} animate={animate}>
      MARVEL
    </LogoContainer>
  );
};
