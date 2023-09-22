import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";


const EditMedicineCate = () => {
    const [status, setStatus] = useState("Active");

  return (
    <section>
      <div className="form_container">
        <div className="form_header">
          <div className="title">
            <h3>Edit Medicine Cate</h3>
          </div>
          <div className="form_header_buttons">
            <div className="button_wrapper">
              <GoThreeBars />
              <Link to="/medicine/cate/list">Medicine Cate List</Link>
            </div>
          </div>
        </div>

        <form>
          <div className="form_all_data_wrapper">
            <div className="form_left">
              <div className="form_flied">
                <label htmlFor="medicinetype">Edit Category Name :</label>
                <input
                  placeholder="Category Name"
                  type="text"
                  id="medicinetype"
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
                      onChange={(e)=>setStatus(e.target.value)}

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
                      onChange={(e)=>setStatus(e.target.value)}

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form_submit_btn">
            <button type="submit">Update Medicine Category</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditMedicineCate;
