import { useState } from "react";
import { register } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const onSignup = async () => {
    const registerState = await register(
      email,
      password,
      fullname,
      phoneNumber,
      role
    );
    if (registerState === true) {
      navigate("/login");
    } else {
      alert("Error In SignUp");
    }
  };

  return (
    <div>
      <div className="signup">
        <div className="column">
          <h1>Sign Up Please...</h1>
          <input
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Write fullname here"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Write email here"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Write password here"
          />
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Write phone number here"
          />
          <input
            onChange={(e) => setRole(e.target.value)}
            placeholder="Manager Or Cashier"
          />

          <br />
          <button onClick={onSignup}>Register</button>
          <p onClick={() => navigate("/login")}>
            Already registered? Login here!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
