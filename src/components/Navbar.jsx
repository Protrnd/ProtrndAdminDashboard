import Logo from "../assets/images/logo.png";
import { NavBarContainer } from "../styled/NavbarStyled";
const Navbar = () => {
  return (
    <NavBarContainer>
      <img
        src={Logo}
        alt="protrnd"
      />
      <p>Protrnd Dashboard</p>
    </NavBarContainer>
  );
};

export default Navbar;
