import styled from "styled-components";

export const NavbarStyled = styled.div`
  /* position: fixed; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #7ed5f0;
  margin: auto;
  .menu {
    display: flex;
    flex-direction: row;

    border-radius: 5px;
  }

  p {
    margin-left: 40px;
    font-size: 24px;
    background-color: #247699;
    padding: 10px;
    border-radius: 10px;
    height: fit-content;
  }

  /* h1 {
    background-color: #247699;
    color: black;
    padding: 10px;
    border-radius: 10px;
  } */
`;
