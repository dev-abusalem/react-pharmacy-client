import React, { useState } from 'react'
import { BsCalendarX, BsFillCalendar2XFill } from 'react-icons/bs';
import { FaLinode, FaUsers } from 'react-icons/fa';
import { GiMedicinePills, GiMedicines } from 'react-icons/gi';
import "./scss/mainsummary.scss"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchMedicines } from '../../redux/state/medicineSlice/medicineSlice'; // Your medicineSlice file
import { fetchCustomers } from '../../redux/state/customerSlice/customerSlice';

const MainSummary = () => {
    const [hidewcm, setHideWCM] = useState(false);
    const storedUserInfo = localStorage.getItem('userInfo');
    const userInfo = JSON.parse(storedUserInfo);
    const isAdmin = userInfo.adminRoll

    function handleWCMessage(){
        setHideWCM(!hidewcm)
    }

    const totalMedicine = useSelector((state)=>state.medicines.medicines);
    const totalCustomer = useSelector((state)=>state.customers.customers);

    const dispatch = useDispatch();
    useEffect(() => {
        // Dispatch the fetchMedicines action when the component mounts
        dispatch(fetchMedicines());
        dispatch(fetchCustomers());

    }, [dispatch]); // Ensure that the action is dispatched only once

  return (
    <>
        <section className={hidewcm ? 'welcome__message_hide' : "" }>
            <div className="welcome__message_wrapper">
                <span>This is <strong>{isAdmin}</strong> User</span>
                <span onClick={handleWCMessage}>x</span>   
            </div>
        </section>
        <section>
            <div className="main_summary">
                <div className="row">
                    <div className="col-md-3">
                        <div className="total_customer">
                            <div className="card">
                                <div className="card-body ">
                                <div>
                                <FaUsers />
                                </div>
                                <div>
                                    <span>TOTAL CUSTOMER</span>
                                    {
                                    totalCustomer.length <= 10 ? (
                                        <h6 style={{ color: 'red' }}>{totalCustomer.length}</h6>
                                    ) : totalCustomer.length <= 50 ? (
                                        <h6 style={{ color: 'orange' }}>{totalCustomer.length}</h6>
                                    ) : (
                                        <h6>{totalCustomer.length}</h6>
                                    )
                                    }

                                </div>
                                </div>
                                <div className="card-footer">
                                    <Link to="/customer/list">Show Details</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3">
                    <div className="total_medicine">
                            <div className="card">
                                <div className="card-body">
                                <div>
                                <GiMedicines />
                                </div>
                                <div>
                                    <span>TOTAL MEDICINE</span>
                                    {
                                    totalMedicine.length <= 10 ? (
                                        <h6 style={{ color: 'red' }}>{totalMedicine.length}</h6>
                                    ) : totalMedicine.length <= 50 ? (
                                        <h6 style={{ color: 'orange' }}>{totalMedicine.length}</h6>
                                    ) : (
                                        <h6>{totalMedicine.length}</h6>
                                    )
                                    }

                                </div>
                                </div>
                                <div className="card-footer">
                                    <Link to="/medicine/list">Show Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="out_of_stock">
                            <div className="card">
                                <div className="card-body">
                                <div>
                                <FaLinode />
                                </div>
                                <div>
                                    <span>OUT OF STOCK</span>
                                    <h6>78</h6>
                                </div>
                                </div>
                                <div className="card-footer">
                                    <a href="/">Show Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="expired_medicine">
                            <div className="card">
                                <div className="card-body">
                                <div>
                                <BsCalendarX />
                                </div>
                                <div>
                                    <span>EXPIRED MEDICINE</span>
                                    <h6>78</h6>
                                </div>
                                </div>
                                <div className="card-footer">
                                    <a href="/">Show Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MainSummary