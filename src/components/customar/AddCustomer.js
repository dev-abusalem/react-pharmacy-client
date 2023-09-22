import React, { useState} from "react";
import "./scss/addcustomar.scss";
import { GoThreeBars } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function AddCustomer() {

  //fullname,email1,phone,address1,state,country,mobile,email2,contact,address2,city,zip
  const [fullname, setFullName] = useState("");
  const [email1, setEmail1] = useState("");
  const [mobile, setMobile] = useState("");
  const [address1, setAddress1] = useState("");
  const [mstate, setMState] = useState("");
  const [phone, setPhone] = useState();
  const [email2, setEmail2] = useState("");
  const [contact, setContact] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState();


const handleSubmit = async (e) =>{
  e.preventDefault();

  try {
    const res = await axios.post("/medicine/customer/add",
    {
            fullname:fullname,
            email1:email1,
            mobile:mobile,
            address1:address1,
            mstate:mstate,
            phone:phone,
            email2:email2,
            contact:contact,
            address2:address2,
            city:city,
            zip:zip
    }
    );

    toast.success(res.data);
    
    setTimeout(()=>{
      window.location.reload(true)
    }, 3000)

  } catch (error) {
    console.log(error);
    toast.error(error.response.data)
  }
}




  return (
    <section>
      <ToastContainer />
      <div className="form_container">
        <div className="form_header">
          <div className="title">
            <h3>Add Customer</h3>
          </div>
          <div className="form_header_buttons">
            <div className="button_wrapper">
              <GoThreeBars />
              <Link to="/customer/list">Customar List</Link>
            </div>
            {/* <div className="button_wrapper">
              <GoThreeBars />
              <Link to="/customer/paid">Paid Customar</Link>
            </div>
            <div className="button_wrapper">
              <GoThreeBars />
              <Link to="/customer/credit">Credit Customar</Link>
            </div> */}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form_all_data_wrapper">
            <div className="form_left">
              <div className="form_flied">
                <label htmlFor="name">
                  Full Name <span style={{ color: "red" }}>*</span> :
                </label>
                <input placeholder="Full Name" type="name" id="name"
                onChange={(e)=>setFullName(e.target.value)}
                />
              </div>

              <div className="form_flied">
                <label htmlFor="email"> Email Address 1 :</label>
                <input placeholder="Email Address 1" type="email" id="email" 
onChange={(e)=>setEmail1(e.target.value)}                />
              </div>

              <div className="form_flied">
                <label htmlFor="mobile">
                  Mobile <span style={{ color: "red" }}>*</span> :
                </label>
                <input placeholder="Mobile No." type="tel" id="mobile" 
onChange={(e)=>setMobile(e.target.value)}                />
              </div>

              <div className="form_flied">
                <label htmlFor="address"> Address 1 :</label>
                <textarea placeholder="Address 1" id="address" 
onChange={(e)=>setAddress1(e.target.value)} >                  
                </textarea>
              </div>

              <div className="form_flied">
                <label htmlFor="state"> State :</label>
                <input placeholder="State" type="text" id="state"
onChange={(e)=>setMState(e.target.value)}                />
              </div>

              <div className="form_flied">
                <label htmlFor="state"> Country :</label>
                <input
                  type="text"
                  placeholder="Country"
                  id="country"
                  disabled
                  value="Bangladesh"

                />
              </div>
            </div>

            <div className="form_right">
              <div className="form_flied">
                <label htmlFor="phone">
                  Phone :
                </label>
                <input placeholder="Phone No" type="tel" id="phone" 
onChange={(e)=>setPhone(e.target.value)}                />
              </div>

              <div className="form_flied">
                <label htmlFor="email2"> Email Address 2 :</label>
                <input placeholder="Email Address 2" type="email" id="email2" 
onChange={(e)=>setEmail2(e.target.value)}                />
              </div>

              <div className="form_flied">
                <label htmlFor="contact"> Contact :</label>
                <input placeholder="Contact" type="text" id="contact" 
onChange={(e)=>setContact(e.target.value)}                />
              </div>

              <div className="form_flied">
                <label htmlFor="address2"> Address 2 :</label>
                <textarea placeholder="Address 2" id="address2"
onChange={(e)=>setAddress2(e.target.value)}                ></textarea>
              </div>

              <div className="form_flied">
                <label htmlFor="city"> City :</label>
                <input placeholder="City" type="text" id="city"
onChange={(e)=>setCity(e.target.value)}                />
              </div>

              <div className="form_flied">
                <label htmlFor="zip"> Zip Code :</label>
                <input placeholder="Zip Code" type="text" id="zip" 
onChange={(e)=>setZip(e.target.value)}                />
              </div>
            </div>
          </div>
          <div className="form_submit_btn">
            <button type="submit">Add Customar</button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default AddCustomer;
