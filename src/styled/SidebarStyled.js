import styled from "styled-components";
import { colors } from "./UniversalStyles";

export const SidebarContainer = styled.div`
  width: 15%;
  margin-top: 7vh;
  height: 93vh;
  position: fixed;
  left: 0;
  background: ${colors.white};
`;

export const SidebarTab = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  border-radius: 0 5px 5px 0;
  background: ${(props) => (props.$active ? colors.blue : colors.white)};
  color: ${(props) => (props.$active ? colors.white : colors.blue)};
  & > p {
    margin-left: 10px;
    margin-top: 5px;
    font-size: 1.2vw;
  }
  & > img {
    scale: 0.6;
  }
`;
