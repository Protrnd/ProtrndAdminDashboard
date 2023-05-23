import {
  HomeContainer,
  HomeInfoTab,
  HomeInfoTabContainer,
  HomeInfoTabLine,
} from "../styled/HomeStyled";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AnalyticIcon from "../assets/images/analytics.png";
import BalanceIcon from "../assets/images/balance.png";
import UsersIcon from "../assets/images/people.png";
import Chart from "../components/ChartComponent";
import Withdrawal from "../components/WithdrawalComponent";
import { API_URL } from "../config/config";
import { revenueData } from "../utils/revenueData";

const Home = () => {
  const [allUsers, setAllUsers] = useState({});
  const [totalRevenue, setTotalRevenue] = useState({});
  const [withdrawalRequests, setWithdrawalRequests] = useState({});
  const navigate = useNavigate();
  const url = "profile/all";
  const revenueUrl = "payment/revenue/total";
  const withdrawalUrl = "payment/withdrawal/all";
  const token = localStorage.getItem("token");
  axios.defaults.withCredentials = true;

  const getAllUsers = async () => {
    await axios
      .get(API_URL + url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
        setAllUsers(err?.response?.data || "Error");
      });
  };

  const getTotalRevenue = async () => {
    await axios
      .get(API_URL + revenueUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTotalRevenue(res.data);
      })
      .catch((err) => {
        console.log(err);
        setTotalRevenue(err?.response?.data || "Error");
      });
  };

  const getWithdrawalRequests = async () => {
    await axios
      .get(API_URL + withdrawalUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setWithdrawalRequests(res.data);
      })
      .catch((err) => {
        console.log(err);
        setWithdrawalRequests(err?.response?.data || "Error");
      });
  };

  useEffect(() => {
    getAllUsers();
    getTotalRevenue();
    getWithdrawalRequests();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (
      allUsers.successful === true ||
      totalRevenue.successful === true ||
      withdrawalRequests.successful === true
    ) {
      return;
    }
    if (
      allUsers.successful === false ||
      totalRevenue.successful === false ||
      withdrawalRequests.successful === false
    ) {
      toast.error(allUsers.message);
      toast.error(totalRevenue.message);
      toast.error(withdrawalRequests.message);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
    return () => {};
  }, [allUsers, navigate, totalRevenue, withdrawalRequests]);

  const userData = allUsers?.data;
  const totalRevenueData = totalRevenue?.data;
  const totalWithdrawalData = withdrawalRequests?.data;

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
            <p>{userData?.length || 0}</p>
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
            <p>#{totalRevenueData?.toLocaleString() || 0}</p>
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
      <Withdrawal data={totalWithdrawalData} />
    </HomeContainer>
  );
};

export default Home;
