import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import "./scss/header.scss";
import {FaBell} from "react-icons/fa"
import {BsFillExclamationTriangleFill} from "react-icons/bs"
import {TbUserCircle} from "react-icons/tb"
import PopupModal from "./PopupModal";

const Header = () => {

  const [showAccount, setShowAccount] = useState(false);

  const handleOpenAccount = () =>{
    setShowAccount(!showAccount)
  }

  const navigate = useNavigate()
  function handleLogout(){
    localStorage.removeItem('token');
   setTimeout(()=>{
    navigate("/login");
   },2000)
  }


  const storedUserInfo = localStorage.getItem('userInfo');
  const userInfo = JSON.parse(storedUserInfo);

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="brand">
                <a href="/"><h3>CAREMEDICINE</h3></a>
              </div>
            </div>
            

            <div className="col-md-2 text-right">
              <div className="notification_wrapper">

                  <PopupModal title="Test Notification" desc="Test description" btnInfo={
                    <Link to="#" className="expaire">
                    <span>0</span>
                    <FaBell style={{fontSize:"22px"}} />
                    </Link>

                  } />


                  <PopupModal title="Test Notification 2" desc="Test description 2" btnInfo={
                    <Link to="#"  className="expaire">
                    <span>0</span>
                      <BsFillExclamationTriangleFill style={{fontSize:"22px"}} />
                    </Link>

                  } />
                  

                  <Link onClick={handleOpenAccount} to="#" className="expaire">
                    <TbUserCircle style={{fontSize:"25px"}} />
                  </Link>

                </div>
            </div>

            <div className={showAccount ? "" : "hide_myaccount_by_click"}>
            <div className="my_profile_header mt-1">
              <div className="card-headers">
                <h3 style={{textTransform:'capitalize'}}>{userInfo.name}</h3>
              </div>
              <div className="card-bodys">
                <a style={{fontSize:'18px' , textDecoration:'underline'}} href="/">{userInfo.email}</a><br/>
                <a style={{fontSize:'18px'}} href="/">My Account</a>
              </div>
              <div className="card-footers">
                <a style={{fontSize:'18px'}} onClick={handleLogout} href="/">Logout</a>
              </div>
          </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
};

export default Header;
