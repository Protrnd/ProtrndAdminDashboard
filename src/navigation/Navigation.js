import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Analytics from "../pages/Analytics";
import Revenue from "../pages/Revenue";
import Users from "../pages/Users";
import Help from "../pages/Help";
import NotFound from "../pages/NotFound";
import ScrollToTop from "../utils/ScrollToTop";
import Withdrawal from "../pages/Withdrawal";

const Navigation = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="login"
          element={<Login />}
        />
        <Route
          path="analytics"
          element={<Analytics />}
        />
        <Route
          path="revenue"
          element={<Revenue />}
        />
        <Route
          path="users"
          element={<Users />}
        />
        <Route
          path="help"
          element={<Help />}
        />
        <Route
          path="withdrawal"
          element={<Withdrawal />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
};

export default Navigation;
