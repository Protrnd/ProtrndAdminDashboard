import {
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginInputContainer,
  LoginNavBar,
} from "../styled/LoginStyled";
import Logo from "../assets/images/logo.png";

const Login = () => {
  return (
    <LoginContainer>
      <LoginNavBar>
        <img
          src={Logo}
          alt="protrnd"
        />
        <p>Protrnd Dashboard</p>
      </LoginNavBar>
      <LoginContent>
        <LoginForm autoComplete="off">
          <p>Admin Login</p>
          <input
            autocomplete="false"
            name="hidden"
            type="text"
            style={{
              display: "none",
            }}
          />
          <LoginInputContainer>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Example: protrndng@gmail.com"
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
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
