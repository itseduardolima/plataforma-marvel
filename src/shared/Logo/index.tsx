import { LogoContainer } from "./styled";

interface LogoProps {
  fontSize?: string;
  animate?: boolean;
}

export const Logo = ({ animate }: LogoProps) => {
  return (
    <LogoContainer animate={animate}>
      MARVEL
    </LogoContainer>
  );
};
