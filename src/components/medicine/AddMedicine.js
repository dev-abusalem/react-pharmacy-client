import React, { useEffect, useState } from "react";
import "./scss/addmedicine.scss";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import imgpreview from "../../assets/images/avater.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
function AddMedicine() {
  const [cate, setCate] = useState([]);
  const [units, setUnit] = useState([]);
  const [types, setType] = useState([]);

  console.log(cate);
  //fullname,email1,phone,address1,state,country,mobile,email2,contact,address2,city,zip
  const [barcode, setBarcode] = useState("");
  const [strength, setStrength] = useState("");
  const [boxsize, setBoxSize] = useState("");
  const [shelf, setShelf] = useState("");
  const [mcategory, setmMategory] = useState("");
  const [medicinetype, setMedicineType] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [vat, setVat] = useState("");
  const [status, setStatus] = useState("Active");
  const [mname, setMname] = useState("");
  const [gname, setGname] = useState("");
  const [munit, setMunit] = useState("");
  const [medicinedetails, setMedicineDetails] = useState("");
  const [price, setPrice] = useState("");
  const [mphoto, setMphoto] = useState("");
  const [manufacprice, setManufacPrice] = useState("");
  const [igta, setIGTA] = useState("");
  const [expairDate, setExpairDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [previousMphoto, setPreviousMphoto] = useState(null);
  // image and form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("mimage", previousMphoto);
    const imageUploadResponse = await axios.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Important for file uploads
      },
    });

    setPreviousMphoto(imageUploadResponse.data);
    console.log(imageUploadResponse);

    try {
      const res = await axios.post("/medicine/medicine/add", {
        barcode: barcode,
        strength: strength,
        boxsize: boxsize,
        shelf: shelf,
        mcategory: mcategory,
        medicinetype: medicinetype,
        manufacturer: manufacturer,
        expairDate: expairDate,
        vat: vat,
        status: status,
        medicinename: mname,
        genericname: gname,
        munit: munit,
        medicinedetails: medicinedetails,
        medicineprice: price,
        mfeatureimage: imageUploadResponse.data,
        manufactureprice: manufacprice,
        igta: igta,
      });

      console.log(imageUploadResponse.data);
      toast.success(res.data);

      // setTimeout(()=>{
      //   window.location.reload(true)
      // }, 3000)
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  // upload medicine image
  const showAllCate = async () => {
    const res = await axios.get("/medicine/cate");
    setCate(res.data);
  };
  const showAllType = async () => {
    const res = await axios.get("/medicine/type");
    setType(res.data);
  };
  const showAllUnit = async () => {
    const res = await axios.get("/medicine/unit");
    setUnit(res.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await showAllCate();
        await showAllUnit();
        await showAllType();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Use the uploaded image path in your main request
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPreviousMphoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMphoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <HashLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <section>
      <ToastContainer />

      <div className="form_container">
        <div className="form_header">
          <div className="title">
            <h3>Add Medicine</h3>
          </div>
          <div className="form_header_buttons">
            <div className="button_wrapper">
              <GoThreeBars />
              <Link to="/medicine/list">Medicine List</Link>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form_all_data_wrapper">
            <div className="form_left">
              <div className="form_flied">
                <label htmlFor="barcode">Bar Code/QR Code :</label>
                <input
                  placeholder="Bar Code/QR Code"
                  type="text"
                  id="barcode"
                  onChange={(e) => setBarcode(e.target.value)}
                />
              </div>

              <div className="form_flied">
                <label htmlFor="strength">Strength :</label>
                <input
                  placeholder="Strength"
                  type="text"
                  id="strength"
                  onChange={(e) => setStrength(e.target.value)}
                />
              </div>

              <div className="form_flied">
                <label htmlFor="phone">
                  {" "}
                  Box Size <span style={{ color: "red" }}>*</span> :
                </label>
                <input
                  placeholder="Box Size"
                  type="text"
                  id="boxsize"
                  onChange={(e) => setBoxSize(e.target.value)}
                />
              </div>

              <div className="form_flied">
                <label htmlFor="shelf"> Shelf :</label>
                <input
                  placeholder="Shelf"
                  type="text"
                  id="shelf"
                  onChange={(e) => setShelf(e.target.value)}
                />
              </div>

              <div className="form_flied">
                <label htmlFor="medicinecate">
                  {" "}
                  Medicine Category <span style={{ color: "red" }}>*</span> :
                </label>
                <select
                  onChange={(e) => setmMategory(e.target.value)}
                  id="medicinecate"
                >
                  <option>Select An Option</option>

                  {cate.length > 0 &&
                    cate.map((cat, i) => {
                      return (
                        <option value={cat?.catename} key={i}>
                          {cat?.catename}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="form_flied">
                <label htmlFor="medicinetype"> Medicine Type :</label>
                <select
                  onChange={(e) => setMedicineType(e.target.value)}
                  id="medicinecate"
                >
                  <option>Select An Option</option>
                  {types.length > 0 &&
                    types?.map((type, i) => {
                      return (
                        <option value={type?.typename} key={i}>
                          {type?.typename}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="form_flied">
                <label htmlFor="medicinemenufacture">
                  {" "}
                  Manufacturer <span style={{ color: "red" }}>*</span> :
                </label>
                <input
                  type="text"
                  placeholder="Manufacturer"
                  id="medicinemenufacture"
                  onChange={(e) => setManufacturer(e.target.value)}
                />
              </div>
              <div className="form_flied">
                <label htmlFor="ExpairDate">
                  {" "}
                  Expire Date <span style={{ color: "red" }}>*</span> :
                </label>
                <input
                  required
                  type="date"
                  placeholder="Medicine Expair Date"
                  id="ExpairDate"
                  onChange={(e) => setExpairDate(e.target.value)}
                />
              </div>
              <div className="form_flied">
                <label htmlFor="medicinetype">Vat (%) :</label>
                <input
                  placeholder="Medicine Type"
                  type="text"
                  id="medicinetype"
                  onChange={(e) => setVat(e.target.value)}
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

            {/* form right section start */}
            <div className="form_right">
              <div className="form_flied">
                <label htmlFor="medicinename">
                  {" "}
                  Medicine Name <span style={{ color: "red" }}>*</span> :
                </label>
                <input
                  placeholder="Medicine Name"
                  type="text"
                  id="medicinename"
                  required
                  onChange={(e) => setMname(e.target.value)}
                />
              </div>

              <div className="form_flied">
                <label htmlFor="generaticname">Generic Name :</label>
                <input
                  placeholder="Generic Name"
                  type="text"
                  id="generaticname"
                  onChange={(e) => setGname(e.target.value)}
                />
              </div>

              <div className="form_flied">
                <label htmlFor="medicineunit">
                  {" "}
                  Medicine Unit <span style={{ color: "red" }}>*</span> :
                </label>
                <select
                  onChange={(e) => setMunit(e.target.value)}
                  id="medicineunit"
                >
                  <option>Select An Option</option>{" "}
                  {units.length > 0 &&
                    units?.map((unit, i) => {
                      return (
                        <option value={unit?.unitname} key={i}>
                          {unit?.unitname}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="form_flied">
                <label htmlFor="medicinedetails"> Medicine Details :</label>
                <input
                  placeholder="Medicine Details"
                  type="text"
                  id="medicinedetails"
                  onChange={(e) => setMedicineDetails(e.target.value)}
                />
              </div>

              <div className="form_flied">
                <label htmlFor="medicineprice">
                  {" "}
                  Price <span style={{ color: "red" }}>*</span> :
                </label>
                <input
                  placeholder="Price"
                  type="text"
                  id="medicineprice"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="form_flied">
                <label htmlFor="medicineimage"> Image :</label>
                <input
                  type="file"
                  id="medicineimage"
                  // onChange={(e)=>setMphoto(e.target.value[0])}
                  onChange={handleImageChange}
                />
              </div>

              <div className="form_flied">
                <label htmlFor="manufactureprice">
                  {" "}
                  Manufac. Price <span style={{ color: "red" }}>*</span> :
                </label>
                <input
                  placeholder="Price"
                  type="text"
                  id="manufactureprice"
                  required
                  onChange={(e) => setManufacPrice(e.target.value)}
                />
              </div>
              <div className="form_flied">
                <label htmlFor="medicineigta"> IGTA :</label>
                <input
                  placeholder="IGTA"
                  type="text"
                  id="medicineigta"
                  onChange={(e) => setIGTA(e.target.value)}
                />
              </div>

              <div className="form_flied">
                <label htmlFor="imgpreview"> Preview :</label>
                <span
                  style={{ width: "70%", textAlign: "left" }}
                  id="imgpreview"
                >
                  <img
                    style={{ width: "70px" }}
                    src={mphoto}
                    alt="imapreview"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="form_submit_btn">
            <button type="submit">Add Medicine</button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default AddMedicine;
