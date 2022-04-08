import jwt from "jwt-decode";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

const Dashboard = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  //const user = jwt(token);

  const { data } = useQuery(GET_ME);
  let user;

  if (data) {
    user = data.me;
  }
  console.log(data);
  console.log(user);

  if (!token) {
    return false;
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
