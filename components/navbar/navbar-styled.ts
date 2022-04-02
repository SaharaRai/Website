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
  padding-top: 20px;
  .menu {
    display: flex;
    flex-direction: row;
    margin-right: 30px;
  }

  p {
    font-size: 20px;
    /* background-color: #247699; */
    /* padding: 10px; */
    /* border-radius: 10px; */
    height: fit-content;
    margin-left: 30px;
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
