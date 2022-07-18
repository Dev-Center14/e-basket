import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdPassword } from "react-icons/md";

const Login = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center display-6 fw-bolder font-fa">Login</h1>
        <hr />
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
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
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
