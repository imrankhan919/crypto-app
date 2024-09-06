import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords Not Match!!");
    }

    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message);
    }
  }, [user, isError, message]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container p-5">
      <h1 className="display-6 text-center">Register Here</h1>

      <div className="card my-3 p-3 rounded-0 my-2">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="form-control rounded-0 my-2"
            placeholder="Enter Name"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="form-control rounded-0 my-2"
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="form-control rounded-0 my-2"
            placeholder="Enter Password"
            required
          />
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={handleChange}
            className="form-control rounded-0"
            placeholder="Confirm Password"
            required
          />
          <button className="btn btn-success my-3 rounded-0 w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
