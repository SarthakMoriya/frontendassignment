import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpUi from "../Signup/SignUpUi";

import "../Signup/Signup.css";

const Login = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length === 0 || email.length === 0) {
      setError(true);
      console.log("hello");
    } else {
      localStorage.setItem("user", email[0]);
      navigate("/");
    }
  };
  return (
    <div className="background">
      <div className="form">
        <div className="ui-pics">
          <SignUpUi />
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          {error && (
            <p className="error-p">Please Fill all the fields carefully</p>
          )}
          <label htmlFor="email">
            <h6> email</h6>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setError(false)}
              onFocus={() => setError(false)}
              placeholder="Enter email address"
            />
          </label>
          <label htmlFor="password">
            <h6> password</h6>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setError(false)}
              onFocus={() => setError(false)}
              placeholder="Enter password"
            />
          </label>
          {error && (
            <button type="submit" className="button-55" disabled>
              Signin
            </button>
          )}
          {!error && (
            <button type="submit" className="button-55">
              Submit
            </button>
          )}
          <h5 style={{marginTop:'17px'}}>
            New Here? Create an Account? <Link to="/signup">Signup</Link>
          </h5 >
        </form>
      </div>
    </div>
  );
};

export default Login;
