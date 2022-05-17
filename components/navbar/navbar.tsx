import Name from "../name/name";
import { NavbarStyled } from "./navbar-styled";
import Link from "next/link";
import Projects from "../projects/projects";
export function Navbar() {
  return (
    <NavbarStyled>
      {/* <h1>Sahara Rai</h1> */}
      <div>
        <Name />
      </div>
      <div className="menu">
        <p className="projects">
          <Link href="#projectid">
            <a>Projects</a>
          </Link>
        </p>

        <p>
          <a href="/pdf/CV_SRai2022_5.pdf" target="_blank">
            My CV
          </a>
        </p>

        {/* <p>My Projects</p> */}

        <p>
          <a href="mailto:sxrai294@gmail.com">Contact me</a>
        </p>
      </div>
    </NavbarStyled>
  );
}

export default Navbar;
