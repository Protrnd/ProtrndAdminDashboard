import { useNavigate } from "react-router-dom";
import {
  LoginBtn,
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginInputContainer,
} from "../styled/LoginStyled";

import axios from "axios";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../config/config";
import { colors } from "../styled/UniversalStyles";

const Login = () => {
  const [APIResponse, setAPIResponse] = useState({});
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const AuthLogin = async (e) => {
    const url = "auth/login/jwt";
    e.preventDefault();
    setLoading(true);

    if (!data.email || !data.password) {
      setLoading(false);
      toast.error("Please fill all fields");
    } else {
      await axios
        .post(API_URL + url, data)
        .then((res) => {
          setLoading(false);
          setAPIResponse(res.data);
          setToken(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setAPIResponse(err.response.data);
        });
    }
  };

  useEffect(() => {
    if (APIResponse.successful === true) {
      toast.success(APIResponse.message);
      localStorage.setItem("token", token);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
    if (APIResponse.successful === false) {
      toast.error(APIResponse.message);
    }
    return () => {};
  }, [APIResponse, navigate, token]);

  return (
    <LoginContainer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <LoginContent>
        <LoginForm
          onSubmit={(e) => {
            AuthLogin(e);
          }}>
          <p>Admin Login</p>
          <LoginInputContainer>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Example: protrndng@gmail.com"
              name="email"
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </LoginInputContainer>
          <LoginInputContainer>
            <label htmlFor="email">Password</label>
            <input
              type="password"
              placeholder="********"
              name="password"
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-lock"
              viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
            </svg>
          </LoginInputContainer>

          <LoginBtn type="submit">
            {loading === false ? (
              "Continue"
            ) : (
              <Bars
                height="20"
                width="20"
                color={colors.white}
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={loading}
              />
            )}
          </LoginBtn>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
