import { NavLink } from "react-router-dom";
import { HomeInfoTabLine } from "../styled/HomeStyled";
import { WithdrawalContainer, TableTd } from "../styled/WithdrawalStyled";

const UsersComponent = ({ data }) => {
  // about: "This is your boy";
  // acctype: "personal";
  // bgimg: "https://firebasestorage.googleapis.com/v0/b/protrnd-ng.appspot.com/o/kanderel1683644300536.png?alt=media&token=8e437b31-958b-4d97-8338-15d3c8b818ad";
  // disabled: false;
  // email: "jamesodike26@gmail.com";
  // fullname: "James Odike";
  // id: "f7dbf668-1681-4408-a8d1-19d650c403c3";
  // identifier: "f7dbf668-1681-4408-a8d1-19d650c403c3";
  // location: "Rivers,Bonny";
  // profileimg: "https://firebasestorage.googleapis.com/v0/b/protrnd-ng.appspot.com/o/kanderel1683644300525.png?alt=media&token=313eaac2-21e6-4808-8939-a6a1731ae00e";
  // regdate: "2023-01-16T16:20:26.951Z";
  // username: "kanderel";

  return (
    <WithdrawalContainer>
      <p>All Profile</p>
      <HomeInfoTabLine
        style={{
          width: "5%",
        }}
      />
      <NavLink to={"/users"}>View all</NavLink>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Profile ID</th>
            <th scope="col">Email</th>
            <th scope="col">Username</th>
            <th scope="col">Account Type</th>
            <th scope="col">Disabled</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            const { id, email, username, acctype, disabled } = item;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{email}</td>
                <td>{username}</td>
                <td>{acctype}</td>
                <td>{disabled === true ? "True" : "False"}</td>
                <td>
                  <NavLink to={`/users?id=${id}`}>Details</NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </WithdrawalContainer>
  );
};

export default UsersComponent;
