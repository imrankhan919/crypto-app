import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { loginUser } from "../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
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
      <h1 className="display-6 text-center">Login</h1>

      <div className="card my-3 p-3 rounded-0 my-2">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control rounded-0 my-2"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="form-control rounded-0 my-2"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />

          <button className="btn btn-success my-3 rounded-0 w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
