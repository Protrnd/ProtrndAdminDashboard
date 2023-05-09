import { styled } from "styled-components";
import { colors } from "./UniversalStyles";

export const WithdrawalContainer = styled.div`
  width: 100%;
  height: 50vh;
  overflow-y: scroll;
  margin-top: 5%;
  border-radius: 0px;
  padding: 30px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  position: relative;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 5px;
    margin: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.red};
    border-radius: 10px;
  }
  & > p {
    font-weight: 600;
    font-size: 1.2vw;
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
`;

export const TableTd = styled.td`
  color: ${(props) =>
    props.$completed
      ? colors.green
      : props.$rejected
      ? colors.red
      : colors.gray};
`;
