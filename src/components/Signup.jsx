import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { AiOutlineUser } from "react-icons/ai";
import { MdPassword, MdEmail } from "react-icons/md";

const Signup = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center display-6 fw-bolder font-fa">Sign Up</h1>
        <hr />
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <MdEmail className="me-1" />
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <AiOutlineUser className="me-1" />
                  User Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter User Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <MdPassword className="me-1" />
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Password"
                />
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary shadow" type="submit">
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

export default Signup;
