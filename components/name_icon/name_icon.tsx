import { NameIconStyled } from "./name_icon-styled";
type Props = {
  href: string;
  src: string;
  alt: string;
};

function NameIcon({ href, src, alt }: Props) {
  return (
    <NameIconStyled>
      <div>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img className="icon" src={src} alt={alt} />{" "}
        </a>
      </div>
    </NameIconStyled>
  );
}
export default NameIcon;
