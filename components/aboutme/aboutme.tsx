import { AboutmeStyled } from "./aboutme-styled";

function Aboutme() {
  return (
    <AboutmeStyled>
      <div className="image">
        <img src="/umbrella.jpg" alt="space" />
      </div>

      <div className="text-container">
        <p className="header">About me</p>
        <p>
          My previous background has been in biology, which has involved
          carrying out research studies and teaching science at secondary
          school.
        </p>
        <p>
          Now as a software developer, having recently completed my training at
          the School of Code, I am enjoying using my logial and analytical
          skills in a creative way.
        </p>
      </div>
    </AboutmeStyled>
  );
}
export default Aboutme;
