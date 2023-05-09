import { useLocation, useNavigate } from "react-router";
import { SidebarContainer, SidebarTab } from "../styled/SidebarStyled";
import HomeActiveIcon from "../assets/images/Vectorhome.png";
import HomeIcon from "../assets/images/Vector.png";
import AnalyticIcon from "../assets/images/analytics.png";
import AnalyticActiveIcon from "../assets/images/analytic-active.png";
import UsersIcon from "../assets/images/people.png";
import UsersActiveIcon from "../assets/images/people-active.png";
import RevenueIcon from "../assets/images/revenue.png";
import HelpIcon from "../assets/images/help.png";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const sidebarTabs = [
    {
      id: 1,
      path: "/",
      icon: (
        <img
          src={pathname === "/" ? HomeActiveIcon : HomeIcon}
          alt="home"
        />
      ),
      name: "Home",
    },
    {
      id: 2,
      path: "/analytics",
      icon: (
        <img
          src={pathname === "/analytics" ? AnalyticActiveIcon : AnalyticIcon}
          alt="analytics"
        />
      ),
      name: "Analytics",
    },
    {
      id: 3,
      path: "/users",
      icon: (
        <img
          src={pathname === "/users" ? UsersActiveIcon : UsersIcon}
          alt="users"
        />
      ),
      name: "Manage Users",
    },
    {
      id: 4,
      path: "/revenue",
      icon: (
        <img
          src={RevenueIcon}
          alt="revenue"
        />
      ),
      name: "Revenue Report",
    },
    {
      id: 5,
      path: "/help",
      icon: (
        <img
          src={HelpIcon}
          alt="help"
        />
      ),
      name: "Help",
    },
  ];
  return (
    pathname !== "/login" && (
      <SidebarContainer>
        {sidebarTabs.map((item) => {
          const { id, path, name, icon } = item;
          return (
            <SidebarTab
              key={id}
              $active={path === pathname}
              onClick={() => {
                navigate(path);
              }}>
              {icon}
              <p>{name}</p>
            </SidebarTab>
          );
        })}
      </SidebarContainer>
    )
  );
};

export default Sidebar;
