import styled from "styled-components";

export const DisplayboxStyled = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
  background-color: white;
  color: black;
  padding: 15px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex: 1 1 0px;
  p {
    font-size: 20px;
    line-height: 1.7;
  }

  .leftside,
  .rightside {
    /* border: 1px solid red; */
    flex: 1;
    padding-left: 50px;
    padding-right: 50px;
  }

  .rightside {
    display: flex;
    justify-content: center;
  }

  img {
    /* display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%; */

    max-width: 80%;
    /* max-height: 80%; */
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .buttondiv {
    display: flex;
    justify-content: space-around;
  }
`;
