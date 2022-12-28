import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpUi from "./SignUpUi";

import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // const [wrongUsername, setWrongUsername] = useState(false);
  // const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongPhoneNo, setWrongPhoneNo] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.length === 0 ||
      password.length === 0 ||
      email.length === 0 ||
      passwordConfirm.length === 0 ||
      phone.length === 0
    ) {
      setError(true);
      console.log("hello");
    } else if (password !== passwordConfirm) {
      setWrongPassword(true);
      setError(true);
    } else if (phone < 1000000000) {
      setWrongPhoneNo(true);
      setError(true);
    } else {
      localStorage.setItem('user',name[0])
      navigate("/");
    }
  };
  return (
    <div className="background">
      <div className="form">
        <div className="ui-pics">
          <SignUpUi/>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          {error && <p className='error-p'>Please Fill all the fields carefully</p>}
          <label htmlFor="username" required>
            <h6> Username</h6>
            <input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setError(false)}
              placeholder="Enter display name"
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
          <label htmlFor="passwordConfirm">
            <h6> passwordConfirm</h6>
            {wrongPassword && <p className='error-p'>please enter same passwords</p>}
            <input
              type="text"
              value={passwordConfirm}
              id="passwordConfirm"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              onBlur={() => setError(false)}
              onFocus={() => setError(false)}
              placeholder="Confirm your password"
            />
          </label>
          <label htmlFor="phone">
            <h6> phone</h6>
            {wrongPhoneNo && <p className='error-p'>Enter a 10-digit Phone Number</p>}
            <input
              type="number"
              min=""
              value={phone}
              max="9999999999"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => setError(false)}
              onFocus={(e) => setError(false)}
              placeholder="+91 999-9999-999"
            />
          </label>
          {error && (
            <button type="submit" className="button-55" disabled >
              Signin
            </button>
          )}
          {!error && <button type="submit"  className="button-55" >Submit</button>}
          <h4>
            Already have an Account? <Link to="/login">login</Link>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Signup;
