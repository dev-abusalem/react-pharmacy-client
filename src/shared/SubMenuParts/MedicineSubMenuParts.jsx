import React from 'react'
import { BsCardList, BsFillCalendarPlusFill } from 'react-icons/bs'
import { FaListAlt, FaRegListAlt, FaUnity } from 'react-icons/fa'
import { IoDuplicate, IoListCircle } from 'react-icons/io5'
import { MdMergeType } from 'react-icons/md'
import { Link } from 'react-router-dom'

const MedicineSubMenuParts = ({toggle, isActiveMedicine}) => {
  return (
    <ul  style={toggle ? {paddingLeft:'0px' , background:'green', margin:'2px'} : {paddingLeft:'10px'} }
            className={`${
              !isActiveMedicine ? "activeDropdown" : ""
            } ${ toggle ? '': 'dashboarddropdown'}`}
          >
            <li>
              <Link to="/medicine/add">{toggle ? <BsFillCalendarPlusFill style={{fontSize:'18px'}} /> :"Add Medicine"}</Link>
            </li>
            <li>
              <Link to="/medicine/list">{toggle ?<FaListAlt style={{fontSize:'18px'}} /> :"Medicine List"}</Link>
            </li>
            <li>
              <Link to="/medicine/cate/add">{toggle ?<IoDuplicate style={{fontSize:'18px'}} /> :"Add Category"}</Link>
            </li>
            <li>
              <Link to="/medicine/cate/list">{toggle ?<BsCardList style={{fontSize:'18px'}} /> :"Category List"}</Link>
            </li>

            <li>
              <Link to="/medicine/type/add">{toggle ?<MdMergeType style={{fontSize:'22px'}} /> :"Add Type"}</Link>
            </li>

            <li>
              <Link to="/medicine/type/list">{toggle ?<IoListCircle style={{fontSize:'22px'}} /> :"Type List"}</Link>
            </li>

            <li>
              <Link to="/medicine/unit/add">{toggle ?<FaUnity style={{fontSize:'22px'}} /> :"Add Unit"}</Link>
            </li>

            <li>
              <Link to="/medicine/unit/list">{toggle ?<FaRegListAlt style={{fontSize:'18px'}} /> :"Unit List"} </Link>
            </li>
          </ul>
  )
}

export default MedicineSubMenuParts