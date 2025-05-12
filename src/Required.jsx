import { Navigate } from "react-router-dom";

const Required = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (auth) {
    return children;
  } else {
    return <Navigate to={"/login"} replace={true} />;
  }
};

export default Required;
