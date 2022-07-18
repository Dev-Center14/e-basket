import React from "react";
import {
  MdDriveFileRenameOutline,
  MdLocalPhone,
  MdEmail,
  MdMessage,
} from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center display-6 fw-bolder font-fa">Contact Us</h1>
        <hr />
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <MdDriveFileRenameOutline className="me-1" />
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <MdLocalPhone className="me-1" />
                  Phone Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Phone Number"
                />
              </div>

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
                <label for="exampleFormControlTextarea1" class="form-label">
                  <MdMessage className="me-1" />
                  Message
                </label>
                <textarea
                  class="form-control "
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary shadow" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
