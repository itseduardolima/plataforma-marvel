import { OverlayContainer } from "./styled";
export const Overlay = ({ detailsOpen }: { detailsOpen: boolean }) => {
  return <OverlayContainer detailsOpen={detailsOpen}>&nbsp;</OverlayContainer>;
};
