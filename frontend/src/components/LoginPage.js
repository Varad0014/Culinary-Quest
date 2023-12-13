import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginPage.css"

const LoginPage = (props) => {
  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user);
    navigate("/restaurants");
  };

  return (
    <div className="submit-form login-page">
      <div className="login-page-container d-flex flex-column justify-content-center">
        <div className="form-group mb-1">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={user.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>

        <div className="form-group mt-1 mb-5">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            id="id"
            required
            value={user.id}
            onChange={handleInputChange}
            name="id"
          />
        </div>

        <button onClick={login} className="btn btn-outline-primary my-3">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
