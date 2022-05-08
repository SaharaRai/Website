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
          {/* <p className="abouttext">I am a full stack &nbsp;</p>

          <p className="software">software developer </p> */}
          <p className="abouttext">
            I am a full stack software developer, with experience in
            technologies such as React, Express and TypeScript.
          </p>
        </div>
      </div>
    </AboutmeStyled>
  );
}
export default Aboutme;
