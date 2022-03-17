import { NavbarStyled } from "./navbar-styled";
export function Navbar() {
  return (
    <NavbarStyled>
      <h1>Sahara Rai</h1>
      <div className="menu">
        <p>
          <a href="/pdf/CV_SRai_2022_.pdf" target="_blank">
            My CV
          </a>
        </p>

        <p>
          <a href="mailto:sxrai294@gmail.com">Contact me</a>
        </p>
      </div>
    </NavbarStyled>
  );
}

export default Navbar;
