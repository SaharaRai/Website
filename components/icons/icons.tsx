import { IconsStyled } from "./icons-styled";
import { DiReact, DiPostgresql } from "react-icons/di";
import { SiPostman, SiJavascript, SiExpress } from "react-icons/si";

function Icons() {
  return (
    <IconsStyled>
      {/* <img src="/SOC_logo.png" alt="SOC logo" /> */}

      <div className="icons">
        <img src="/SOC_logo.png" alt="SOC logo" />
        <DiReact />

        <SiPostman
          style={{ color: "rgb(239, 103, 51)", marginRight: "1rem" }}
        />
        <SiJavascript style={{ color: "#f7df32", marginRight: "1rem" }} />
        <SiExpress style={{ color: "#f3f3f3;", marginRight: "1rem" }} />
        <DiPostgresql style={{ color: "#336791", marginRight: "1rem" }} />
      </div>
    </IconsStyled>
  );
}
export default Icons;
