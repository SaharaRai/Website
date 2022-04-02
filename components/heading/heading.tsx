import { HeadingStyled } from "./heading-styled";
type Props = {
  text: string | undefined;
};

function TheHeading({ text }: Props) {
  return <HeadingStyled>{text}</HeadingStyled>;
}
export default TheHeading;
