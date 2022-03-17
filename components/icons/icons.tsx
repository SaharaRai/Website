import { IconsStyled } from "./icons-styled";
import { DiReact } from "react-icons/di";

function Icons() {
  return (
    <IconsStyled>
      {/* <img src="/SOC_logo.png" alt="SOC logo" /> */}

      <div className="icons">
        <img src="/SOC_logo.png" alt="SOC logo" />
        <DiReact />
      </div>
    </IconsStyled>
  );
}
export default Icons;
