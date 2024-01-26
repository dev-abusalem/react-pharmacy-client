import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../config/url-manager";

const AddMedicineCate = () => {
  const [status, setStatus] = useState("Active");
  const [catename, setCateName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/medicine/cate/add`, {
        catename: catename,
        status: status,
      });

      toast.success(res.data);
      setCateName("");
    } catch (error) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  return (
    <section>
      <ToastContainer />
      <div className="form_container">
        <div className="form_header">
          <div className="title">
            <h3>Add Medicine Category</h3>
          </div>
          <div className="form_header_buttons">
            <div className="button_wrapper">
              <GoThreeBars />
              <Link to="/medicine/cate/list">Medicine Category List</Link>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form_all_data_wrapper">
            <div className="form_left">
              <div className="form_flied">
                <label htmlFor="medicinetype">Category Name :</label>
                <input
                  placeholder="Medicine Category Name"
                  type="text"
                  id="medicinetype"
                  onChange={(e) => setCateName(e.target.value)}
                  required
                  value={catename}
                />
              </div>
              <div className="form_flied">
                <label htmlFor="medicinetype">
                  Status <span style={{ color: "red" }}>*</span> :
                </label>
                <div
                  style={{
                    width: "70%",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <label htmlFor="active">Active</label> {" "}
                    <input
                      type="radio"
                      id="active"
                      name="status"
                      value="active"
                      onChange={(e) => setStatus(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                     <label htmlFor="inactive">Inactive</label>
                    <input
                      type="radio"
                      id="inactive"
                      name="status"
                      value="inactive"
                      onChange={(e) => setStatus(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form_submit_btn">
            <button type="submit">Add Medicine Category</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddMedicineCate;
