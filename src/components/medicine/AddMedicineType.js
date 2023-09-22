import axios from "axios";
import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const AddMedicineType = () => {

  const [status, setStatus] = useState("Active");
  const [typename, setTypeName] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("/medicine/type/add",
      {typename:typename,status:status}
      );

      toast.success(res.data);
      setTypeName("")
    } catch (error) {
      toast.error(error.response.data);
      console.log(error)
    }
  }

  return <section>
    <ToastContainer />
  <div className="form_container">
    <div className="form_header">
      <div className="title">
        <h3>Add Medicine Type</h3>
      </div>
      <div className="form_header_buttons">
        <div className="button_wrapper">
          <GoThreeBars />
          <Link to="/medicine/type/list">Medicine Type List</Link>
        </div>
      </div>
    </div>

    <form onSubmit={handleSubmit}>
      <div className="form_all_data_wrapper">
        <div className="form_left">
          <div className="form_flied">
            <label htmlFor="medicinetype">Medicine Type Name :</label>
            <input
              placeholder="Medicine Type Name"
              type="text"
              id="medicinetype"
              onChange={(e)=>setTypeName(e.target.value)}
              required
              value={typename}
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
                  onChange={(e)=>setStatus(e.target.value)}
                  type="radio"
                  id="active"
                  name="status"
                  value="active"
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
                  onChange={(e)=>setStatus(e.target.value)}
                  type="radio"
                  id="inactive"
                  name="status"
                  value="inactive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form_submit_btn">
        <button type="submit">Add Medicine Type</button>
      </div>
    </form>
  </div>
</section>
};

export default AddMedicineType;
