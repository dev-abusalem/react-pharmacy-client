import React, { useState } from "react";
import "./scss/leftsidebar.scss";
import { AiFillHome, AiOutlineRetweet, AiFillSetting, AiOutlineUserAdd } from "react-icons/ai";
import { GrGroup, GrServices } from "react-icons/gr";
import { IoBook, IoDuplicate, IoListCircle } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { ImSearch } from "react-icons/im";
import { FiSettings } from "react-icons/fi";
import { BsBank2, BsCardList, BsFillCreditCard2FrontFill } from "react-icons/bs";
import { GiStockpiles } from "react-icons/gi";
import { FaPills, FaIdCard, FaHandHoldingUsd, FaClipboardList, FaListAlt, FaUnity , HiOutlineClipboardDocumentList, FaRegListAlt } from "react-icons/fa";
import { HiUserGroup, HiOutlineCode, HiCurrencyDollar } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import avater from "../assets/images/avater.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineCreditCardOff, MdPaid , MdCategory, MdMergeType} from "react-icons/md";
import {BsFillCalendarPlusFill } from 'react-icons/bs'
import {BiSolidCategory } from 'react-icons/bi'
import CustomerSubMenuParts from "./SubMenuParts/CustomerSubMenuParts";
import MedicineSubMenuParts from "./SubMenuParts/MedicineSubMenuParts";






export default function LeftSidebar() {
  const [isActiveCustomar, setisActiveCustomar] = useState(false);
  const [arrow, setArrow] = useState(true);

  const [isActiveMedicine, setisActiveMedicine] = useState(false);
  const [arrowMedicine, setMedicineArrow] = useState(true);

  
  const handleDropdown = (index) => {
    if (index === 1) {
      setisActiveCustomar(!isActiveCustomar);
    } else if (index === 3) {
      setisActiveMedicine(!isActiveMedicine);
    }
  };

  const storedUserInfo = localStorage.getItem('userInfo');
  const userInfo = JSON.parse(storedUserInfo);

  const toggle  = useSelector((state)=>state.setSectionToggle.sectiontoggle) ;

  // bg color for dropdown
  const bgcolor = 'green' ;
  return (
    <section>
      <div className="dashboard_menu_wrapper" style={{transition:'0.3s all ease'}}>
        <ul style={toggle ? {paddingLeft:'0px'} : {}} className="dahboard_first_menu">
          <div className="dashboard_user">
            

            <img src={avater} alt="avater" style={toggle ? {width:'40px', height:'40px'} : {}} />
            { toggle ? "" :<div className="dash_user_info">
              <h4 className="text-uppercase">{userInfo.name}</h4>
              <Link to="/">{userInfo.email}</Link>
            </div> }
          </div>

            <li>

              {toggle ? <Link to="/"><AiFillHome style={{fontSize:'20px'}} /></Link> :
              <>
              <AiFillHome />
              <Link to="/">Dashboard</Link>
              </>}

            </li>


          <li style={toggle ? {background:bgcolor} : {}} onClick={()=>handleDropdown(1)}>
            <GrGroup />
            {toggle ? "" :<Link to="#">Customar </Link>}
            { toggle ? " " : <>
            {arrow ? <IoIosArrowForward /> : <IoIosArrowDown /> }
            </> }
          </li>
          
          {/* customer submenu start  */}

          <CustomerSubMenuParts isActiveCustomar={isActiveCustomar} toggle={toggle} />

          {/* customer submenu end  */}

          <li>
            <HiUserGroup />
            {toggle ? " " :
            <Link to="#">Manufacturer</Link>}
          </li>

          <li style={toggle ? {background:bgcolor} : {}} onClick={()=>handleDropdown(3)}>
            <FaPills /> 
            {toggle ? "" :

              <>
              <Link to="#">Medicine</Link>
              {arrowMedicine ? <IoIosArrowForward /> : <IoIosArrowDown />}
              </>}
            
          </li>

          {/* medicine submenu start  */}

          <MedicineSubMenuParts isActiveMedicine={isActiveMedicine} toggle={toggle} />

          {/* medicine submenu end  */}
          

          <li>
            
            {toggle ? <Link to="/"><TiShoppingCart /></Link> :
            <>
            <TiShoppingCart />
            <Link to="/">Purchase</Link> 
            </>}
          </li>
          <li>

            {toggle ? <Link to="/"><FaHandHoldingUsd /></Link> :
            <>
            <FaHandHoldingUsd />
            <Link to="/">Invoice</Link>
            </>}

          </li>
          <li>

            {toggle ? <Link to="/"><AiOutlineRetweet /></Link> :
            <>
            <AiOutlineRetweet />
            <Link to="/">Return</Link>
            </>}

          </li>
          <li>

            {toggle ? <Link to="/"><GiStockpiles /></Link> :
            <>
            <GiStockpiles />
            <Link to="/">Stock</Link>
            </>}

          </li>
          <li>

          {toggle ? <Link to="/"><BsBank2 /></Link> :
            <>
            <BsBank2 />
            <Link to="/">Bank</Link>
            </>}


          </li>
          <li>

            {toggle ? <Link to="/"><BsFillCreditCard2FrontFill /></Link> :
            <>
            <BsFillCreditCard2FrontFill />
            <Link to="/">Accounts</Link>
            </>}

          </li>
          <li>


            {toggle ? <Link to="/"><FaIdCard /></Link> :
            <>
            <FaIdCard />
            <Link to="/">Human Dept.</Link>
            </>}


          </li>
          <li>

            {toggle ? <Link to="/"><IoBook /></Link> :
            <>
            <IoBook />
            <Link to="/">Report</Link>
            </>}

          </li>
          <li>


            {toggle ? <Link to="/"><HiCurrencyDollar /></Link> :
            <>
            <HiCurrencyDollar />
            <Link to="/">Tax</Link>
            </>}


          </li>
          <li>

            {toggle ? <Link to="/"><GrServices /></Link> :
            <>
            <GrServices />
            <Link to="/">Service</Link>
            </>}

          </li>
          <li>

            {toggle ? <Link to="/"><ImSearch /></Link> :
            <>
            <ImSearch />
            <Link to="/">Search</Link>
            </>}


          </li>
          <li>

            {toggle ? <Link to="/"><FiSettings /></Link> :
            <>
            <FiSettings />
            <Link to="/">App Settings</Link>
            </>}


          </li>
          <li>

            {toggle ? <Link to="/customcode"><HiOutlineCode /></Link> :
            <>
            <HiOutlineCode />
            <Link to="/customcode">Custom Code</Link>
            </>}


          </li>
        </ul>
      </div>
    </section>
  );
}