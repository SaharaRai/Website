import styled from "styled-components";

export const DisplayboxStyled = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
  background-color: #202022;
  color: #f3f3f3;
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
    /* max-height: 90%; */
  }

  .rightside {
    display: flex;
    justify-content: center;
  }

  .title {
    color: #247699;
  }

  img {
    /* display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%; */

    max-width: 70%;
    max-height: 70vh;
    /* height: auto; */
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .buttondiv {
    display: flex;
    justify-content: space-around;
  }
`;
