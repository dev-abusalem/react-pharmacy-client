// import React, { useEffect, useState } from "react";
// import { GoSearch, GoThreeBars } from "react-icons/go";
// import { GrDocumentPdf } from "react-icons/gr";
// import { AiOutlinePlus } from "react-icons/ai";
// import { SiMicrosoftexcel } from "react-icons/si";
// import { FiEdit } from "react-icons/fi";
// import { MdDelete } from "react-icons/md";
// import { ToastContainer, toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { ThreeDots } from "react-loader-spinner";
// import { fetchMedicines } from '../../redux/state/medicineSlice/medicineSlice'; // Your medicineSlice file
// import { useDispatch, useSelector } from 'react-redux';
// import ConfirmModal from "../../shared/ConfirmModal ";
// import Swal from "sweetalert2";
// const MedicineList = () => {
 
//   const medicines  = useSelector((state)=>state.medicines.medicines);
//   const loading  = useSelector((state)=>state.medicines.isLoading);

//   const [selectValue, setSelectValue] = useState(10);
//   const [searchs, setSearchs] = useState("");

//   const dispatch = useDispatch()
//   useEffect(() => {
//     // Dispatch the fetchMedicines action when the component mounts
//     dispatch(fetchMedicines());
//   }, [dispatch]); // Ensure that the action is dispatched only once

//   console.log(medicines)

// /////////////////// Change Seletc Value/////////////////////////////
// function handleChange(e){
//   setSelectValue(parseInt(e.target.value));

// }
// const visibleMedicineData = medicines.slice(0, selectValue);
// /////////////////// Change Text Value/////////////////////////////

// const filteredMedicineData = visibleMedicineData.filter((medicines) =>
// medicines.medicinename && medicines.medicinename.toLowerCase().includes(searchs.toLowerCase())
// );


// // Delet Medicine Info

// const handleDeleteMedicine = async ({ id, medicinename }) => {
//   try {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     });

//     if (result.isConfirmed) {
//       const res = await axios.delete(`/medicine/medicine/${id}`);

//       Swal.fire(res.data);

//       setTimeout(()=>{
//         window.location.reload();
//       },3000)

//     }else{
//       toast.error(`You cancel delete ${medicinename} !`)
//     }
//   } catch (error) {
//     toast.error(error);
//   }
// };

// // Pagination 
// const [currentPage, setCurrentPage] = useState(1);
// const itemsPerPage = selectValue;
// const totalPages = Math.ceil(filteredMedicineData.length / itemsPerPage);

// const indexOfLastItem = currentPage * itemsPerPage;
// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// const currentMedicines = filteredMedicineData.slice(indexOfFirstItem, indexOfLastItem);


//   return (
//     <section>
//       <div className="customar_list_wrapper">
//         <ToastContainer />
//         <div className="customar_list">
//           {/* container header start */}

//           <div className="form_header">
//             <div className="title">
//               <h3>Medicine List</h3>
//             </div>
//             <div className="form_header_buttons">
//               <div className="button_wrapper">
//                 <AiOutlinePlus />
//                 <Link to="/medicine/add">Add Medicine</Link>
//               </div>
//             </div>
//           </div>
//           {/* container header end */}

//           {/* container sub header start */}

//           <div className="form_sub_header">
//             <div className="form_sub_header_left">
//               <div className="sub_header_item1">
//                 <select onChange={handleChange}>
//                   <option value="20">20</option>
//                   <option value="50">50</option>
//                   <option value="10">100</option>
//                   <option value="200">200</option>
//                   <option value="500">500</option>
//                 </select>
//               </div>
//               <div className="sub_header_item2">
//                 <GrDocumentPdf />
//                 <SiMicrosoftexcel />
//               </div>
//             </div>
//             <div className="form_sub_header_right">
//               <div className="list_search">
//                 <input onChange={(e)=>setSearchs(e.target.value)} type="text" placeholder="Search...." />
//                 <GoSearch />
//               </div>
//             </div>
//           </div>
//           {/* container sub header end */}

//           {/* container  body start */}
//           {filteredMedicineData.length > 0 ? 
//           <div className="table_wrapper">
//             <table className="table table-hover">
//               <thead className=" table-success">
//                 <tr>
//                   <th scope="col">SL</th>
//                   <th scope="col">Medicine Name</th>
//                   <th scope="col">Price</th>
//                   <th scope="col">Category</th>
//                   <th scope="col">Type</th>
//                   <th scope="col">Unit</th>
//                   <th scope="col">Manufacturer</th>
//                   <th scope="col">Shelf</th>
//                   <th scope="col">Generic Name </th>
//                   <th scope="col">Status </th>
//                   <th scope="col">Image</th>
//                   <th style={{ textAlign: "center" }} scope="col">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>

//               {
//               currentMedicines.map((medicine, i)=>{
//                 const index = indexOfFirstItem + i; 
//                 return(
//                   <tr key={index}>
//                   <th scope="row">{i+1}</th>
//                   <td>{medicine.medicinename}</td>
//                   <td>{medicine.medicineprice}</td>
//                   <td>{medicine.mcategory}</td>
//                   <td>{medicine.medicinetype}</td>
//                   <td>{medicine.munit}</td>
//                   <td>{medicine.manufacturer}</td>
//                   <td>{medicine.shelf}</td>
//                   <td>{medicine.genericname}</td>
//                   <td>{medicine.status}</td>
//                   <td>{medicine.mfeatureimage}</td>
//                   <td>
//                     <div className="table_action_button">
//                       <FiEdit />
//                       <MdDelete onClick={()=>handleDeleteMedicine({id:medicine._id, medicinename:medicine.medicinename})} />
//                     </div>
//                   </td>
//                 </tr>
//                 )
//                 })}
//               </tbody>
              
//             </table>
//             {
//               loading && <ThreeDots 
//               height="80" 
//               width="80" 
//               radius="9"
//               color="#4fa94d" 
//               ariaLabel="three-dots-loading"
//               wrapperStyle={{}}
//               wrapperClassName=""
//               visible={true}
//               />
//               }
//           </div> : <h1 style={{textAlign:'center', color:'red' , paddingTop:"1.5rem", paddingBottom:"1.5rem"}}>Medicine Not Found !</h1> }
//           {/* container body end */}

//           {/* container footer start */}
//           {/* container footer end */}

//           <div className="pagination">
//             <button
//               className="pagination-button"
//               onClick={() => setCurrentPage(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
//               <button
//                 key={pageNum}
//                 className={`pagination-button ${pageNum === currentPage ? "active" : ""}`}
//                 onClick={() => setCurrentPage(pageNum)}
//               >
//                 {pageNum}
//               </button>
//             ))}
//             <button
//               className="pagination-button"
//               onClick={() => setCurrentPage(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// };

// export default MedicineList;
