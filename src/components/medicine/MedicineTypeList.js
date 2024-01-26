import React, { useEffect, useState } from "react";
import { GoSearch, GoThreeBars } from "react-icons/go";
import { GrDocumentPdf } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config/url-manager";
const MedicineTypeList = () => {
  const [types, setType] = useState([]);

  const showAllType = async () => {
    const res = await axios.get(`${BASE_URL}/medicine/type`);
    setType(res.data);
  };
  useEffect(() => {
    showAllType();
  }, []);

  return (
    <section>
      <div className="customar_list_wrapper">
        <ToastContainer />
        <div className="customar_list">
          {/* container header start */}

          <div className="form_header">
            <div className="title">
              <h3>Medicine Type List</h3>
            </div>
            <div className="form_header_buttons">
              <div className="button_wrapper">
                <AiOutlinePlus />
                <Link to="/medicine/type/add">Add Medicine Type</Link>
              </div>
            </div>
          </div>
          {/* container header end */}

          {/* container sub header start */}
          <div className="form_sub_header">
            <div className="form_sub_header_left">
              <div className="sub_header_item1">
                <select>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="10">100</option>
                  <option value="200">200</option>
                  <option value="500">500</option>
                </select>
              </div>
              <div className="sub_header_item2">
                <GrDocumentPdf style={{ display: "none" }} />
                <SiMicrosoftexcel />
              </div>
            </div>
            <div className="form_sub_header_right">
              <div className="list_search">
                <input type="text" placeholder="Search...." />
                <GoSearch />
              </div>
            </div>
          </div>
          {/* container sub header end */}

          {/* container  body start */}
          <div className="table_wrapper">
            <table className="table table-striped table-dark">
              <thead className="">
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">M Name</th>
                  <th scope="col">Status</th>
                  <th style={{ textAlign: "center" }} scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {types.map((type, i) => {
                  return (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{type.typename}</td>
                      <td>{type.status}</td>
                      <td>
                        <div className="table_action_button_medicine_cate">
                          <Link to={`/medicine/edit/${type._id}`}>
                            <FiEdit className="table_action_edit_button" />
                          </Link>
                          <MdDelete />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* container body end */}

          {/* container footer start */}
          {/* container footer end */}
        </div>
      </div>
    </section>
  );
};

export default MedicineTypeList;
