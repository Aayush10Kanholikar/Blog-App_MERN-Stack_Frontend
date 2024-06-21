import React from "react";
import { Navigate } from "react-router-dom";

const SingleBlog = () => {
  return (
    <>
      <div className="container shadow my-3">
        <div className="col-md-12 my-3 d-flex items-center justify-content-center">
          <div className="row">
            <h1 className="my-3">Demo</h1>
            <p className="my-3">Published Date:</p>
            <img
              src={`https://www.kindpng.com/picc/m/235-2350682_new-svg-image-small-user-login-icon-hd.png`}
              className="img img-responsive img-rounded my-3"
              alt=""
            />
            <p className="my-3">Demo description</p>
          </div>
        </div>

        <button
          onClick={() => Navigate("/")}
          className="btn btn-primary "
        >
          Back To Post
        </button>
      </div>
    </>
  );
};

export default SingleBlog;
