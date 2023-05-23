import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import UsersComponent from "../components/UsersComponent";
import { API_URL } from "../config/config";
import useQueryParams from "../hooks/useQueryParams";
import {
  WithdrawalPreviewBtn,
  WithdrawalPreviewContainer,
  WithdrawalPreviewContent,
  WithdrawalPreviewDetailed,
  WithdrawalPreviewHeader,
} from "../styled/WithdrawalStyled";
import moment from "moment";

const Users = () => {
  const [users, setUsers] = useState({});
  const [userID, setUserID] = useState("");
  const navigate = useNavigate();
  const usersUrl = "profile/all";
  const approveUrl = "payment/withdrawal/approve/";
  const rejectUrl = "payment/withdrawal/reject/";
  const enableUrl = "profile/enable/";
  const disableUrl = "profile/disable/";
  const token = localStorage.getItem("token");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  let params = useQueryParams();

  let { id } = params;

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    setSearchParams({ id: event.target.value });
    setUserID(searchParams.get("id"));
  };

  const putWithdrawalID = () => {
    setUserID(id);
  };

  const getUsers = async () => {
    await axios
      .get(API_URL + usersUrl)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
        setUsers(err?.response?.data || "Error");
      });
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    putWithdrawalID();
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (users.successful === true) {
      return;
    }
    if (users.successful === true) {
      toast.error(users.message);
    }
    return () => {};
  }, [navigate, users]);

  const totalUsers = users?.data;

  const singleUser = userID
    ? totalUsers?.filter((item) => {
        return item.id === userID;
      })
    : null;

  const disableUser = async () => {
    await axios
      .put(API_URL + disableUrl + userID)
      .then((res) => {
        const response = res.data;
        if (response.successful === true) {
          toast.success(response.message + " Successfully");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
        if (response.successful === false) {
          toast.success(response.message + " Already Made");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      })
      .catch((err) => {
        console.log({ err });
        toast.error(err?.response?.data || "Error approving request");
      });
  };

  const enableUser = async () => {
    await axios
      .put(API_URL + enableUrl + userID)
      .then((res) => {
        const response = res.data;
        if (response.successful === true) {
          toast.success(response.message + " Successfully");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
        if (response.successful === false) {
          toast.success(response.message + " Already Made");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      })
      .catch((err) => {
        console.log({ err });
        toast.error(err?.response?.data || "Error rejecting request");
      });
  };
  return (
    <WithdrawalPreviewContainer>
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
      <WithdrawalPreviewHeader>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Search by Profile ID"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </WithdrawalPreviewHeader>
      <WithdrawalPreviewContent>
        <div
          className="table-responsive"
          style={{
            width: "auto",
          }}>
          <UsersComponent data={totalUsers} />
        </div>
        {singleUser && singleUser?.length !== 0 ? (
          <div
            className="detailed"
            style={{
              marginLeft: "20px",
            }}>
            <WithdrawalPreviewDetailed>
              <div className="trx-info">
                <p>Profile Details</p>
                <p>Profile ID: {singleUser[0]?.id}</p>
                <p>Email: {singleUser[0]?.email}</p>
                <p>Full Name: {singleUser[0]?.fullname}</p>
                <p>Username: {singleUser[0]?.username}</p>
                <p>
                  Account Type:{" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}>
                    {singleUser[0]?.acctype}
                  </span>{" "}
                </p>
                <p>
                  Created:{" "}
                  {moment(singleUser[0]?.regdate)
                    .utc()
                    .format("MMMM Do YYYY, h:mm:ss a")}
                </p>
                <p>
                  Disabled:{" "}
                  {singleUser[0]?.disabled === true ? "True" : "False"}
                </p>
              </div>

              <>
                <WithdrawalPreviewBtn
                  $approve
                  $disabled={singleUser[0]?.disabled}
                  onClick={() => {
                    singleUser[0]?.disabled !== true && disableUser();
                  }}>
                  {singleUser[0]?.disabled === true ? "Disabled" : "Disable"}
                </WithdrawalPreviewBtn>
                {singleUser[0]?.disabled === false && (
                  <WithdrawalPreviewBtn
                    $reject
                    onClick={() => {
                      enableUser();
                    }}>
                    Re-Enable
                  </WithdrawalPreviewBtn>
                )}
              </>
            </WithdrawalPreviewDetailed>
          </div>
        ) : (
          singleUser !== null && (
            <WithdrawalPreviewDetailed
              style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
              }}>
              <p>No profile with `{userID}` found!</p>
            </WithdrawalPreviewDetailed>
          )
        )}
      </WithdrawalPreviewContent>
    </WithdrawalPreviewContainer>
  );
};

export default Users;
