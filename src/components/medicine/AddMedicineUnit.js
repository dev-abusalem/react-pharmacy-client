import axios from "axios";
import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const AddMedicineUnit = () => {
  const [status, setStatus] = useState("Active");
  const [unitname, setUnitName] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("/medicine/unit/add",
      {unitname:unitname,status:status}
      );

      toast.success(res.data);
      setUnitName("")
    } catch (error) {
      toast.error(error.response.data);
      console.log(error)
    }
  }

  return (
    <section>
      <ToastContainer />
      <div className="form_container">
        <div className="form_header">
          <div className="title">
            <h3>Add Medicine Unit</h3>
          </div>
          <div className="form_header_buttons">
            <div className="button_wrapper">
              <GoThreeBars />
              <Link to="/medicine/unit/list">Medicine Unit List</Link>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form_all_data_wrapper">
            <div className="form_left">
              <div className="form_flied">
                <label htmlFor="medicinetype">Unit Name :</label>
                <input
                  placeholder="Medicine Unit Name"
                  type="text"
                  id="medicinetype"
                  onChange={(e)=>setUnitName(e.target.value)}
                  required
                  value={unitname}
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
            <button type="submit">Add Medicine Unit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddMedicineUnit;
