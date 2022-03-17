import { NavbarStyled } from "./navbar-styled";
export function Navbar() {
  return (
    <NavbarStyled>
      <h1>Sahara Rai</h1>
      <div className="menu">
        <p>My CV</p>
        <p> Contact me</p>
      </div>
    </NavbarStyled>
  );
}

export default Navbar;
