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

const Home = () => {
  return (
    <HomeContainer>
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
