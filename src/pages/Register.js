import React, { useState } from "react";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1//user/register",
        input
      );
      alert(res.data.message);
      navigate("/login")
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container shadow">
        <h2 className="text-center my-3">Sign Up Here</h2>
        <div className="col-md-12 my-3 d-flex items-center justify-content-center">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="Username"
                  value={input.Username}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="Email"
                  value={input.Email}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  placeholder="Enter Email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="Password"
                  value={input.Password}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  placeholder="Enter Password"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
