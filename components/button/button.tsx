import { ButtonStyled } from "./button-styled";
type Props = {
  text: string;
};
function ShortButton({ text }: Props) {
  return <ButtonStyled>{text}</ButtonStyled>;
}
export default ShortButton;
