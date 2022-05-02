import { useState } from "react";
import { login } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import "./index.css";
// import addUser from "../../Store/actions";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignin = async () => {
    try {
      const loginState = await login(email, password);
      console.log("loginState--->", loginState);
      // dispatch(addUser(loginState));
      if (loginState.role === "Manager" || loginState.role === "manager") {
        navigate("/managerSelector");
      } else {
        navigate("/posScreen");
      }
    } catch (e) {
      alert(e.message);
    }
    // console.log(loginState, "stateOfLogin");
  };

  return (
    <div>
      <div className="signin">
        <div className="column">
          <h1>Sign In Please...</h1>
          <div className="inputs">
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Write email here"
            />
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Write password here"
            />
          </div>
          <br />
          <div className="takenButtons">
            <Button color="primary" variant="outlined" onClick={onSignin}>
              Login
            </Button>
          </div>
          <h3 onClick={() => navigate("/register")}>New user? Register here</h3>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
