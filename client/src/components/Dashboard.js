import jwt from "jwt-decode";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

const Dashboard = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const user = jwt(token);
  console.log(user.data.firstName);
  const { data, loading } = useQuery(GET_ME);
  const userData = data?.me || {};
  console.log(userData);
  if (!token) {
    return false;
  }

  return loading ? (
    <h2>LOADING...</h2>
  ) : (
    <div>
      <br />
      <br />
      <br />
      <h1>Dashboard</h1>
      <h2>Welcome to your profile, {user.data.firstName}</h2>
    </div>
  );
};

export default Dashboard;
