import { styled } from "styled-components";
import { Centering, colors } from "./UniversalStyles";

export const WithdrawalContainer = styled.div`
  width: 100%;
  height: 50vh;
  overflow-y: scroll;
  margin-top: 5%;
  padding: 30px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  position: relative;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    display: none;
  }
  & > p {
    font-weight: 600;
    font-size: 1.2rem;
  }
  & > a {
    position: absolute;
    top: 30px;
    right: 30px;
    color: ${colors.lightBlue};
  }
  & > .table {
    margin-top: 20px;
  }
  & > .table > thead {
    background: ${colors.pink};
  }

  @media screen and (max-width: 400px) {
    & > a {
      position: fixed;
    }
  }
`;

export const TableTd = styled.td`
  color: ${(props) =>
    props.$completed
      ? colors.green
      : props.$rejected
      ? colors.red
      : colors.gray};
`;

export const WithdrawalPreviewContainer = styled.div`
  width: 85%;
  height: auto;
  padding: 12vh 3% 5vh 3%;
  margin-left: auto;
  background: ${colors.grey};
  @media only screen and (max-width: 990px) {
    width: 100%;
    margin: 0;
  }
`;

export const WithdrawalPreviewHeader = styled.div`
  width: 85%;
  ${Centering}
  height: 7vh;
  & > svg {
    scale: 2;
  }
`;

export const WithdrawalPreviewContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > .fullTable {
    width: 70%;
    height: auto;
  }
  & > .detailed {
    width: 25%;
  }

  @media only screen and (max-width: 1350px) {
    flex-direction: column;
    & > .fullTable {
      width: 100%;
    }
    & > .detailed {
      width: 100%;
      margin-top: 30px;
    }
  }
`;

export const WithdrawalPreviewDetailed = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  border-radius: 10px;
  background: ${colors.white};
  & > .trx-info > p:first-child {
    font-size: 1.1rem;
    font-weight: 600;
  }
  & > .trx-details {
    margin-top: 30px;
  }
  & > .trx-details > p > .text-gradient {
    font-size: 18px;
    background: linear-gradient(
      318.21deg,
      #ca1e07 -8.03%,
      #961519 17.52%,
      #600d2c 43.07%,
      #38073a 68.62%,
      #1f0342 94.17%,
      #170246 119.72%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const WithdrawalPreviewBtn = styled.div`
  width: 100%;
  padding: 10px;
  ${Centering}
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  margin: 20px auto;
  border-radius: 20px;
  background: ${(props) =>
    props.$approve ? colors.red : props.$reject ? colors.pink : colors.gray};
  color: ${(props) =>
    props.$approve ? colors.white : props.$reject ? colors.red : colors.gray};

  @media only screen and (max-width: 1350px) {
    width: 25%;
    min-width: 100px;
    margin: 20px 0;
  }
`;
