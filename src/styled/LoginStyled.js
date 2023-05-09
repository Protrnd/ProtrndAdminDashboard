import styled from "styled-components";
import { Centering, colors } from "../styled/UniversalStyles";

export const LoginContainer = styled.div`
  width: 100%;
  height: 93vh;
  border: solid ${colors.grey};
  background: ${colors.grey};
`;

export const LoginContent = styled.div`
  width: 40%;
  height: 60%;
  margin: 7% auto;
  padding: 2% 2%;
  background: ${colors.white};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

export const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  ${Centering}
  justify-content: flex-start;
  flex-direction: column;
  & > p {
    font-size: 2vw;
    font-weight: 600;
  }
`;

export const LoginInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 7%;
  position: relative;
  & > label {
    font-size: 1.5vw;
    margin-bottom: 10px;
  }
  & > input {
    padding: 15px;
    width: 100%;
    height: 60px;
    font-size: 16px;
    border: none;
    background: ${colors.grey};
    border-radius: 10px;
    outline: none;
  }
  & > svg {
    position: absolute;
    top: 60%;
    right: calc(2% + 5px);
    scale: 1.5;
  }
`;

export const LoginBtn = styled.button`
  width: 20%;
  background: ${colors.red};
  min-width: 100px;
  padding: 15px;
  border-radius: 25px;
  margin-top: 5%;
  border: none;
  font-size: 16px;
  color: ${colors.white};
  cursor: pointer;
`;
