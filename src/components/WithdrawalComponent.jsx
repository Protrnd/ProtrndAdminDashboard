import { NavLink } from "react-router-dom";
import { HomeInfoTabLine } from "../styled/HomeStyled";
import { WithdrawalContainer, TableTd } from "../styled/WithdrawalStyled";

const WithdrawalComponent = () => {
  return (
    <WithdrawalContainer>
      <p>WITHDRAWAL REQUESTS</p>
      <HomeInfoTabLine
        style={{
          width: "5%",
        }}
      />
      <NavLink to={"/withdrawal"}>View all</NavLink>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableTd $completed>Completed</TableTd>
            <td>@protrnd</td>
            <td>protrndng@gmail.com</td>
            <td>#500,000</td>
            <td>6 dy ago</td>
            <td>
              <NavLink to={"/withdrawal?id=1"}>Details</NavLink>
            </td>
          </tr>
          <tr>
            <TableTd>Pending</TableTd>
            <td>@protrnd</td>
            <td>protrndng@gmail.com</td>
            <td>#500,000</td>
            <td>1 wk ago</td>
            <td>
              <NavLink to={"/withdrawal?id=1"}>Details</NavLink>
            </td>
          </tr>
          <tr>
            <TableTd $rejected>Rejected</TableTd>
            <td>@protrnd</td>
            <td>protrndng@gmail.com</td>
            <td>#500,000</td>
            <td>1 mth ago</td>
            <td>
              <NavLink to={"/withdrawal?id=1"}>Details</NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </WithdrawalContainer>
  );
};

export default WithdrawalComponent;
