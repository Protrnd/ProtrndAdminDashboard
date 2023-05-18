import styled from "styled-components";
import { colors } from "./UniversalStyles";

export const HomeContainer = styled.div`
  width: 85%;
  height: auto;
  padding: 10vh 2% 5vh 2%;
  margin-left: auto;
  background: ${colors.grey};
  & > p {
    margin-bottom: 20px;
    font-size: 1.5vw;
  }
  @media screen and (max-width: 990px) {
    width: 100%;
    margin: 0;
    & > p {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 640px) {
    & > p {
      font-size: 1.2rem;
    }
  }
`;

export const HomeInfoTabContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    height: auto;
    align-items: start;
  }
`;

export const HomeInfoTab = styled.div`
  width: 25%;
  height: 100%;
  border-radius: 20px;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(225deg, #e6e6e6, #ffffff);
  box-shadow: -14px 14px 28px #d9d9d9, 0px -0px 2px #ffffff;
  & > .data {
    padding-top: 10%;
    display: flex;
    align-items: center;
  }
  & > .data > img {
    scale: 1.2;
    object-fit: contain;
  }
  & > .data > p {
    margin: 15px;
    font-size: 1.2rem;
    font-weight: 600;
  }
  & > p {
    font-weight: 600;
  }
  @media screen and (max-width: 990px) {
    & > p {
      font-size: 1rem;
    }
    & > .data > p {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    padding: 4% 0 4% 5%;
    margin-bottom: 20px;
    & > p {
      font-size: 1.2rem;
    }
    & > .data > p {
      font-size: 1rem;
    }
  }
`;

export const HomeInfoTabLine = styled.div`
  width: 15%;
  height: 3px;
  border-radius: 5px;
  background: ${colors.red};
`;
