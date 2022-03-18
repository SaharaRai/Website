import { NameStyled } from "./name-styled";

function Name() {
  return (
    <NameStyled>
      <h1>Sahara Rai</h1>
      <div className="image-container">
        <a
          href="https://www.linkedin.com/in/sahararai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin-icon.png" alt="linkedin icon" />{" "}
        </a>
      </div>
    </NameStyled>
  );
}
export default Name;
