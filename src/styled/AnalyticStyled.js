import styled from "styled-components";
import { Centering, colors } from "./UniversalStyles";

export const AnalyticsContainer = styled.div`
  width: 85%;
  height: 100vh;
  padding: 10vh 2% 5vh 3%;
  margin-left: auto;
  background: ${colors.grey};
  ${Centering}
`;

export const AnalyticsChartContainer = styled.div`
  width: 60%;
  height: 100%;
`;

export const AnalyticsContent = styled.div`
  height: 100%;
  padding: 3% 0 0 3%;
  width: 40%;
  & > .dropdown {
    margin-bottom: 20px;
  }

  & > h5 {
    margin-bottom: 10px;
  }
`;

export const AnalyticsFilterBtn = styled.div`
  width: 25%;
  max-width: 150px;
  background: ${colors.red};
  color: ${colors.white};
  font-size: 1vw;
  ${Centering}
  padding: 10px;
  border-radius: 20px;
`;
