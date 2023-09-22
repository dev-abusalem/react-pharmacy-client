import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { FaListAlt } from 'react-icons/fa'
import { MdOutlineCreditCardOff, MdPaid } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CustomerSubMenuParts = ({toggle, isActiveCustomar}) => {
  return (
    <ul
    style={toggle ? { paddingLeft: '0px', background: 'green', margin: '2px' } : { paddingLeft: '10px' }}
    className={`${
      !isActiveCustomar ? "activeDropdown" : ""
    } ${toggle ? "" : "dashboarddropdown"}`}
  >
    <li>
      <Link to="/customer/add">{toggle ? <AiOutlineUserAdd style={{ fontSize: '18px' }} /> : "Add Customer"}</Link>
    </li>
    <li>
      <Link to="/customer/list">{toggle ? <FaListAlt style={{ fontSize: '18px' }} /> : "Customer List"}</Link>
    </li>
    <li>
      <Link to="/customer/credit">{toggle ? <MdOutlineCreditCardOff style={{ fontSize: '18px' }} /> : "Credit Customer"}</Link>
    </li>
    <li>
      <Link to="/customer/paid">{toggle ? <MdPaid style={{ fontSize: '18px' }} /> : "Paid Customer"}</Link>
    </li>
  </ul>
  )
}

export default CustomerSubMenuParts