import React, { useEffect, useState } from "react";
import "./scss/addcustomar.scss";
import { GoThreeBars } from "react-icons/go";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { BASE_URL } from "../../config/url-manager";

function EditCustomer() {
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

  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}/customer/customer/edit/${id}`
        );
        setFullName(response.data.fullname);
        setEmail1(response.data.email1);
        setMobile(response.data.mobile);
        setAddress1(response.data.address1);
        setMState(response.data.mstate);
        setPhone(response.data.phone);
        setEmail2(response.data.email2);
        setContact(response.data.contact);
        setAddress2(response.data.address2);
        setCity(response.data.city);
        setZip(response.data.zip);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        setLoading(true);
        console.log(error);
        setLoading(false);
      }
    };

    fetchCustomerData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `${BASE_URL}/customer/customer/update/${id}`,
        {
          fullname: fullname,
          email1: email1,
          mobile: mobile,
          address1: address1,
          mstate: mstate,
          phone: phone,
          email2: email2,
          contact: contact,
          address2: address2,
          city: city,
          zip: zip,
        }
      );

      toast.success(res.data);

      setTimeout(() => {
        window.location.replace(`/customer/list`);
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
  };

  console.log(fullname);
  return (
    <section>
      <ToastContainer />
      <div className="form_container">
        <div className="form_header">
          <div className="title">
            <h3>Edit Customer</h3>
          </div>
          <div className="form_header_buttons">
            <div className="button_wrapper">
              <GoThreeBars />
              <Link to="/customer/add">Add Customar</Link>
            </div>
            <div className="button_wrapper">
              <GoThreeBars />
              <Link to="/customer/list">Customar List</Link>
            </div>
            <div className="button_wrapper">
              <GoThreeBars />
              <Link to="/customer/credit">Credit Customar</Link>
            </div>
          </div>
        </div>

        {!loading ? (
          <form onSubmit={handleSubmit}>
            <div className="form_all_data_wrapper">
              <div className="form_left">
                <div className="form_flied">
                  <label htmlFor="name">
                    Full Name <span style={{ color: "red" }}>*</span> :
                  </label>
                  <input
                    placeholder="Full Name"
                    type="name"
                    id="name"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="form_flied">
                  <label htmlFor="email"> Email Address 1 :</label>
                  <input
                    placeholder="Email Address 1"
                    type="email"
                    id="email"
                    value={email1}
                    onChange={(e) => setEmail1(e.target.value)}
                  />
                </div>

                <div className="form_flied">
                  <label htmlFor="mobile">
                    Mobile <span style={{ color: "red" }}>*</span> :
                  </label>
                  <input
                    placeholder="Mobile No."
                    type="tel"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>

                <div className="form_flied">
                  <label htmlFor="address"> Address 1 :</label>
                  <textarea
                    placeholder="Address 1"
                    id="address"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  ></textarea>
                </div>

                <div className="form_flied">
                  <label htmlFor="state"> State :</label>
                  <input
                    placeholder="State"
                    type="text"
                    id="state"
                    value={mstate}
                    onChange={(e) => setMState(e.target.value)}
                  />
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
                  <label htmlFor="phone">Phone :</label>
                  <input
                    placeholder="Phone No"
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="form_flied">
                  <label htmlFor="email2"> Email Address 2 :</label>
                  <input
                    placeholder="Email Address 2"
                    type="email"
                    id="email2"
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                  />
                </div>

                <div className="form_flied">
                  <label htmlFor="contact"> Contact :</label>
                  <input
                    placeholder="Contact"
                    type="text"
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>

                <div className="form_flied">
                  <label htmlFor="address2"> Address 2 :</label>
                  <textarea
                    placeholder="Address 2"
                    id="address2"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  ></textarea>
                </div>

                <div className="form_flied">
                  <label htmlFor="city"> City :</label>
                  <input
                    placeholder="City"
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div className="form_flied">
                  <label htmlFor="zip"> Zip Code :</label>
                  <input
                    placeholder="Zip Code"
                    type="text"
                    id="zip"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form_submit_btn">
              <button type="submit">Update Customar</button>
            </div>
          </form>
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    </section>
  );
}
export default EditCustomer;
