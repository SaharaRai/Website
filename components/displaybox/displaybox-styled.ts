import styled from "styled-components";

export const DisplayboxStyled = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  color: black;
  padding: 15px;
  margin-bottom: 40px;
  display: flex;
  flex: 1 1 0px;
  p {
    font-size: 20px;
    line-height: 1.5;
  }

  .leftside,
  .rightside {
    border: 1px solid red;
    flex: 1;
  }

  img {
    /* display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%; */
    max-width: 80%;
    /* max-height: 80%; */
    height: auto;
  }
`;
