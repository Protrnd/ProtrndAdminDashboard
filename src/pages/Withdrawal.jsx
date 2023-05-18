import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import WithdrawalComponent from "../components/WithdrawalComponent";
import { API_URL } from "../config/config";
import {
  WithdrawalPreviewBtn,
  WithdrawalPreviewContainer,
  WithdrawalPreviewContent,
  WithdrawalPreviewDetailed,
  WithdrawalPreviewHeader,
} from "../styled/WithdrawalStyled";
import useQueryParams from "../hooks/useQueryParams";
import moment from "moment";

const Withdrawal = () => {
  const [withdrawalRequests, setWithdrawalRequests] = useState({});
  const [withdrawalID, setWithdrawalID] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const withdrawalUrl = "payment/withdrawal/all";
  const approveUrl = "payment/withdrawal/approve/";
  const rejectUrl = "payment/withdrawal/reject/";
  const token = localStorage.getItem("token");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  let params = useQueryParams();
  const queryParams = new URLSearchParams(location.search);
  let { id } = params;

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    setSearchParams({ id: event.target.value });
    setWithdrawalID(searchParams.get("id"));
  };

  const putWithdrawalID = () => {
    setWithdrawalID(id);
  };

  const getWithdrawalRequests = async () => {
    await axios
      .get(API_URL + withdrawalUrl)
      .then((res) => {
        setWithdrawalRequests(res.data);
      })
      .catch((err) => {
        console.log(err);
        setWithdrawalRequests(err?.response?.data || "Error");
      });
  };

  useEffect(() => {
    getWithdrawalRequests();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    putWithdrawalID();
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (withdrawalRequests.successful === true) {
      return;
    }
    if (withdrawalRequests.successful === true) {
      toast.error(withdrawalRequests.message);
    }
    return () => {};
  }, [navigate, withdrawalRequests]);

  const totalWithdrawalRequests = withdrawalRequests?.data;

  const singleWithdrawalRequest = withdrawalID
    ? totalWithdrawalRequests?.filter((item) => {
        return item.id === withdrawalID;
      })
    : null;

  const approveWithdrawalRequest = async () => {
    await axios
      .post(API_URL + approveUrl + withdrawalID)
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

  const rejectWithdrawalRequest = async () => {
    await axios
      .post(API_URL + rejectUrl + withdrawalID)
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
                  placeholder="Search by Trx-ID"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </WithdrawalPreviewHeader>
      <WithdrawalPreviewContent>
        <div className="fullTable">
          <WithdrawalComponent data={totalWithdrawalRequests} />
        </div>
        {singleWithdrawalRequest && singleWithdrawalRequest?.length !== 0 ? (
          <div className="detailed">
            <WithdrawalPreviewDetailed>
              <div className="trx-info">
                <p>Withdrawal Requests</p>
                <p>Trx Id: {id}</p>
                <p>
                  Acct No: {singleWithdrawalRequest[0]?.account?.accountnumber}
                </p>
                <p>
                  Acct Name: {singleWithdrawalRequest[0]?.account?.accountname}
                </p>
                <p>
                  Bank Name: {singleWithdrawalRequest[0]?.account?.bankname}
                </p>
                <p>
                  Amount: ₦
                  {singleWithdrawalRequest[0]?.amount?.toLocaleString()}
                </p>
                <p>
                  Profile id: {singleWithdrawalRequest[0]?.account?.profileid}
                </p>
                <p>Status: {singleWithdrawalRequest[0]?.status}</p>
              </div>

              <div className="trx-details">
                {singleWithdrawalRequest[0]?.status === "Approved" && (
                  <>
                    <p>
                      <span className="text-gradient">Approved by:</span>{" "}
                      {singleWithdrawalRequest[0]?.by}
                    </p>
                    <p>
                      <span className="text-gradient">Approved Date:</span>{" "}
                      {moment(singleWithdrawalRequest[0]?.completed)
                        .utc()
                        .format("MMMM Do YYYY, h:mm:ss a")}
                    </p>
                  </>
                )}
                {singleWithdrawalRequest[0]?.status === "Rejected" && (
                  <>
                    <p>
                      <span className="text-danger">Rejected by:</span>{" "}
                      {singleWithdrawalRequest[0]?.by}
                    </p>
                    <p>
                      <span className="text-danger">Rejection Date:</span>{" "}
                      {moment(singleWithdrawalRequest[0]?.completed)
                        .utc()
                        .format("MMMM Do YYYY, h:mm:ss a")}
                    </p>
                  </>
                )}
              </div>

              {singleWithdrawalRequest[0]?.status === "Pending" && (
                <>
                  <WithdrawalPreviewBtn
                    $approve
                    onClick={() => {
                      approveWithdrawalRequest();
                    }}>
                    Approve
                  </WithdrawalPreviewBtn>
                  <WithdrawalPreviewBtn
                    $reject
                    onClick={() => {
                      rejectWithdrawalRequest();
                    }}>
                    Reject
                  </WithdrawalPreviewBtn>
                </>
              )}
            </WithdrawalPreviewDetailed>
          </div>
        ) : (
          singleWithdrawalRequest !== null && (
            <WithdrawalPreviewDetailed
              style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <p>No transaction with `{withdrawalID}` found!</p>
            </WithdrawalPreviewDetailed>
          )
        )}
      </WithdrawalPreviewContent>
    </WithdrawalPreviewContainer>
  );
};

export default Withdrawal;
