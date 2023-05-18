import { NavLink } from "react-router-dom";
import { HomeInfoTabLine } from "../styled/HomeStyled";
import { WithdrawalContainer, TableTd } from "../styled/WithdrawalStyled";
import moment from "moment";

moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "1 hour ago",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "1 mth ago",
    MM: "%d mths",
    y: "a year",
    yy: "%d years",
  },
});

const WithdrawalComponent = ({ data }) => {
  return (
    <WithdrawalContainer>
      <p>WITHDRAWAL REQUESTS</p>
      <HomeInfoTabLine
        style={{
          width: "5%",
        }}
      />
      <NavLink to={"/withdrawal"}>View all</NavLink>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Name</th>
            <th scope="col">Bank Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            const { id, status, account, amount, created } = item;
            let date = moment(created).utc().format("YYYY-MM-DD hh:mm:ss");
            date = moment(date).fromNow();
            return (
              <tr key={id}>
                <TableTd
                  $completed={status === "Approved"}
                  $rejected={status === "Rejected"}>
                  {status}
                </TableTd>
                <td>{account.accountname}</td>
                <td>{account.bankname}</td>
                <td># {amount}</td>
                <td>{date}</td>
                <td>
                  <NavLink to={`/withdrawal?id=${id}`}>Details</NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </WithdrawalContainer>
  );
};

export default WithdrawalComponent;
