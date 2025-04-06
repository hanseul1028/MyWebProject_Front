import styled from "styled-components";

export const StyledHeader = styled.header`
  // width: 100%;
  // height: 40px;
  // background-color : rgb(0, 0, 0);
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // font-size: 2rem;
  // font-weight: 600;
  // color: lightgray;
  // position: relative;

  // width: 100vw;
  // left: 50%;
  // right: 50%;
  // margin-left: -50vw;
  // margin-right: -50vw;
  // padding: 10px; 

  display: flex;
  align-items: center;
  padding: 10px 20px;

  & .logo {
    width: 150px;
    height: auto;
  }

`;
export const Styledp = styled.p`
  font-family: 'Roboto', sans-serif;
  color : skyblue;
  padding : 10px;
`

export const LogoText = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  color: #00aaff;
  font-weight: 600;
  margin: 0;

  &::after {
    content: '';
    display: block;
    width: 40%;
    height: 4px;
    background: #00aaff;
    border-radius: 2px;
    margin-top: 4px;
  }
`;
