import { styled } from "styled-components";
import { colors } from "./UniversalStyles";

export const NavBarContainer = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  z-index: 5;
  position: fixed;
  top: 0;
  align-items: center;
  padding-left: 2%;
  background: ${colors.white};
  box-shadow: -7px 7px 14px #cbcbcb, 7px -7px 14px #f8f8f8;
  & > img {
    margin-right: 2%;
  }
  & > p {
    color: ${colors.red};
    font-size: 1.2vw;
  }
`;
