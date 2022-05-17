import NameIcon from "../name_icon/name_icon";
import { NameStyled } from "./name-styled";

function Name() {
  return (
    <NameStyled>
      <div>
        <p className="name">Sahara Rai</p>
      </div>

      <div className="image-container">
        <div>
          <NameIcon
            href="https://www.linkedin.com/in/sahararai/"
            src="/linkedin-icon.png"
            alt="linkedin icon"
          />
        </div>

        <div>
          <NameIcon
            href="https://github.com/SaharaRai"
            src="/github_logo.png"
            alt="github"
          />
        </div>
      </div>
    </NameStyled>
  );
}
export default Name;
