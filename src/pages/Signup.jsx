import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    if (name && email && password) {
      localStorage.setItem("login", true);
      navigate("/");
      Swal.fire("success!", "user register successfully")
      // await axios.post("http://localhost:4000/api/signup", user).then((res) => {
        // Swal.fire("success!", `${res.data.msg}`);
      // });
      
    } else {
      Swal.fire("success!", "all form field is required");

      
    }
  };
  return (
    <div>
      <div className="form-wrap">
        <form className="w-25 mx-auto shadow p-5 mt-5">
          <h4 className="text-center mb-3">Signup</h4>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="name"
              value={user.name}
              onChange={inputHandler}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={inputHandler}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={inputHandler}
            />
          </div>
          <p>
            All ready have an Account? <Link to="/login">Login</Link>
          </p>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
