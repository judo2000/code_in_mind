import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import Spinner from "../Progress";
import "./dashboard.style.css";

const Dashboard = () => {
  // check if the user is logged in and has a valid token
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  // if the user is not logged in redirect to login
  //const user = jwt(token);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });
  // checks for user if logged in
  const { loading, data } = useQuery(GET_ME);
  const user = data?.me || {};

  return loading ? (
    <div className="main">
      <Spinner />
    </div>
  ) : (
    <div className="main">
      <h1>Dashboard</h1>
      <h2>Welcome {user.firstName}</h2>
    </div>
  );
};

export default Dashboard;
