import styled from "styled-components";

export const NavbarStyled = styled.div`
  /* position: fixed; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  /* background-color: #7ed5f0; */
  background-color: #003c77;
  margin: auto;
  .menu {
    display: flex;
    flex-direction: row;

    border-radius: 5px;
    margin-right: 25px;
  }

  p,
  a {
    font-size: 20px;
    /* background-color: #247699; */
    padding: 10px;
    /* border-radius: 10px; */
    height: fit-content;
  }

  a:hover {
    color: #0693e3;
  }
  .projects:hover {
    color: #0693e3;
  }
  /* h1 {
    background-color: #247699;
    color: black;
    padding: 10px;
    border-radius: 10px;
  } */
`;
