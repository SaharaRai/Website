import { DisplayboxStyled } from "./displaybox-styled";

type Props = {
  title: string | undefined;
  about: string | undefined;
  description: string | undefined;
  image: string;
  altimage: string | undefined;
};
function Displaybox({ title, about, description, image, altimage }: Props) {
  return (
    <DisplayboxStyled>
      <div className="leftside">
        <h1>{title}</h1>
        <p> About: {about}</p>
        <p>{description}</p>
      </div>
      <div className="rightside">
        <img src={image} alt={altimage} />
      </div>
    </DisplayboxStyled>
  );
}
export default Displaybox;
