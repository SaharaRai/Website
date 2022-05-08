import ShortButton from "../button/button";
import { DisplayboxStyled } from "./displaybox-styled";

type Props = {
  title: string | undefined;
  about: string | undefined;
  description: string | undefined;
  image: string;
  altimage: string | undefined;
  gitrepo: string | undefined;
  website: string | undefined;
};
function Displaybox({
  title,
  about,
  description,
  image,
  altimage,
  gitrepo,
  website,
}: Props) {
  return (
    <DisplayboxStyled>
      <div className="leftside">
        <h1 className="title">{title}</h1>
        <p className="about"> About: {about}</p>
        <p>{description}</p>
        <div className="buttondiv">
          <a href={gitrepo}>
            {" "}
            <ShortButton text="View Project" />
          </a>
          <a href={website}>
            {website !== "" && <ShortButton text="Visit App" />}
          </a>
        </div>
      </div>
      <div className="rightside">
        <img src={image} alt={altimage} />
      </div>
    </DisplayboxStyled>
  );
}
export default Displaybox;
