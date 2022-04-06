import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

const Dashboard = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  console.log(token)
  const { data, loading } = useQuery(GET_ME);
  const userData = data?.me || {};
console.log(token.firstName)
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
      <h2>{userData.firstName}</h2>
    </div>
  );
};

export default Dashboard;
