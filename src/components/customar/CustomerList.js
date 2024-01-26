import React, { useEffect, useState, useRef } from "react";
import { GoSearch, GoThreeBars } from "react-icons/go";
import { GrDocumentPdf } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";
import "./scss/customarlist.scss";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import { DownloadTableExcel } from "react-export-table-to-excel";
import Swal from "sweetalert2";
import PopupModal from "../../shared/PopupModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../redux/state/customerSlice/customerSlice";
import { BASE_URL } from "../../config/url-manager";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectValue, setSelectValue] = useState(10);
  const [searchs, setSearchs] = useState("");
  const customerData = [...customers];

  const totalCustomer = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  /////////////////// Change Seletc Value/////////////////////////////
  function handleChange(e) {
    setSelectValue(parseInt(e.target.value));
  }
  const visibleCustomerData = totalCustomer?.slice(0, selectValue);
  /////////////////// Change Text Value/////////////////////////////

  const filteredCustomerData = visibleCustomerData.filter(
    (customer) =>
      customer.fullname &&
      customer.fullname.toLowerCase().includes(searchs.toLowerCase())
  );

  const handleDeleteCustomer = async ({ id, fullname }) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await axios.delete(`${BASE_URL}/customer/customer/${id}`);

        Swal.fire(res.data);

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        toast.error(`You cancel delete ${fullname} !`);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const tableRef = useRef(null);

  return (
    <section>
      <ToastContainer />
      <div className="customar_list_wrapper">
        <div className="customar_list">
          {/* container header start */}

          <div className="form_header">
            <div className="title">
              <h3>Customer List</h3>
            </div>
            <div className="form_header_buttons">
              <div className="button_wrapper">
                <AiOutlinePlus />
                <Link to="/customer/add">Add Customer</Link>
              </div>
              <div className="button_wrapper">
                <GoThreeBars />
                <Link to="/customer/paid">Paid Customar</Link>
              </div>
              <div className="button_wrapper">
                <GoThreeBars />
                <Link to="/customer/credit">Credit Customar</Link>
              </div>
            </div>
          </div>
          {/* container header end */}

          {/* container sub header start */}
          <div className="form_sub_header">
            <div className="form_sub_header_left">
              <div className="sub_header_item1">
                <select onChange={handleChange}>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="10">100</option>
                  <option value="200">200</option>
                  <option value="500">500</option>
                </select>
              </div>
              <div className="sub_header_item2">
                <GrDocumentPdf style={{ display: "none" }} />
                <DownloadTableExcel
                  filename="Customer details table"
                  sheet="Customer details"
                  currentTableRef={tableRef.current}
                >
                  <SiMicrosoftexcel />
                </DownloadTableExcel>
              </div>
            </div>
            <div className="form_sub_header_right">
              <div className="list_search">
                <input
                  onChange={(e) => setSearchs(e.target.value)}
                  type="text"
                  placeholder="Search By Name...."
                />
                <GoSearch />
              </div>
            </div>
          </div>
          {/* container sub header end */}

          {/* loader start */}

          {loading && (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          )}

          {/* loader start */}

          {/* container  body start */}
          {filteredCustomerData.length > 0 ? (
            <div className="table_wrapper">
              <table ref={tableRef} className="table table-hover">
                <thead className=" table-success">
                  <tr>
                    <th scope="col">SL</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mobile No</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                    <th style={{ textAlign: "center" }} scope="col">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomerData.length > 0 &&
                    filteredCustomerData.map((customer, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          <td>{customer.fullname}</td>
                          <td>{customer.mobile}</td>
                          <td>{customer.email1}</td>
                          <td>{customer.address1}</td>
                          <td>{customer.city}</td>
                          <td>
                            <div className="table_action_button">
                              <Link to={`/customer/edit/${customer._id}`}>
                                <FiEdit
                                  className=" text-white"
                                  style={{
                                    border: "none",
                                    background: "orange",
                                  }}
                                />
                              </Link>
                              <Link
                                to="#"
                                onClick={() =>
                                  handleDeleteCustomer({
                                    id: customer._id,
                                    fullname: customer.fullname,
                                  })
                                }
                              >
                                <MdDelete style={{ border: "1px" }} />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          ) : (
            <h1
              style={{
                textAlign: "center",
                color: "red",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
              }}
            >
              Customer Not Found !
            </h1>
          )}
          {/* container body end */}

          {/* container footer start */}
          {/* container footer end */}
        </div>
      </div>
    </section>
  );
};

export default CustomerList;
