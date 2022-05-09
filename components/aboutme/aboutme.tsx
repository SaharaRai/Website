import { AboutmeStyled } from "./aboutme-styled";

function Aboutme() {
  return (
    <AboutmeStyled>
      <div className="image">
        <img src="/umbrella2.jpg" alt="space" />
      </div>

      <div className="text-container">
        <p className="header">About me</p>
        <div className="aboutme">
          <p className="abouttext">
            I am a full stack{" "}
            <span className="colouredtext">software developer</span>, with
            experience in technologies such as React, Express and TypeScript.
          </p>
        </div>
      </div>
    </AboutmeStyled>
  );
}
export default Aboutme;
