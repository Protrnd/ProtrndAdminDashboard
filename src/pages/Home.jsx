import {
  HomeContainer,
  HomeInfoTab,
  HomeInfoTabContainer,
  HomeInfoTabLine,
} from "../styled/HomeStyled";

import AnalyticIcon from "../assets/images/analytics.png";
import BalanceIcon from "../assets/images/balance.png";
import UsersIcon from "../assets/images/people.png";
import Chart from "../components/ChartComponent";
import Withdrawal from "../components/WithdrawalComponent";
import { revenueData } from "../utils/revenueData";
import axios from "axios";
import { API_URL } from "../config/config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [APIResponse, setAPIResponse] = useState({});
  const navigate = useNavigate();
  const url = "profile/all";
  axios.defaults.withCredentials = true;

  const getAllUsers = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get(API_URL + url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAPIResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
        setAPIResponse(err?.response?.data || "Error");
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (APIResponse.successful === true) {
      return;
    }
    if (APIResponse.successful === false) {
      toast.error(APIResponse.message);
      // setTimeout(() => {
      //   navigate("/login");
      // }, 1500);
    }
    return () => {};
  }, [APIResponse, navigate]);

  return (
    <HomeContainer>
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
      <p>Account Overview</p>
      <HomeInfoTabContainer>
        <HomeInfoTab>
          <p>TOTAL USERS</p>
          <HomeInfoTabLine />
          <div className="data">
            <img
              src={UsersIcon}
              alt=""
            />
            <p>10,000</p>
          </div>
        </HomeInfoTab>
        <HomeInfoTab>
          <p>TOTAL REVENUE</p>
          <HomeInfoTabLine />
          <div className="data">
            <img
              src={AnalyticIcon}
              alt=""
            />
            <p>#50,000</p>
          </div>
        </HomeInfoTab>
        <HomeInfoTab>
          <p>TOTAL BALANCE</p>
          <HomeInfoTabLine />
          <div className="data">
            <img
              src={BalanceIcon}
              alt=""
            />
            <p>#100,000</p>
          </div>
        </HomeInfoTab>
      </HomeInfoTabContainer>
      <Chart
        data={revenueData}
        title={"REVENUE OF APRIL 2023"}
        grid
        dataKey="Revenue"
      />
      <Withdrawal />
    </HomeContainer>
  );
};

export default Home;
