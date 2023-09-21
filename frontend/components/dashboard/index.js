import React, { useState, useEffect } from 'react';
import PensionHolder from './pension-holder';
import JuniorOfficer from './junior-officer';
import GeneralOfficer from './general-officer';
import HeadOfficer from './head-officer';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function DashboardCom() {
  const [role, setRole] = useState('');

  // Check For User Route
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const role = user?.role
    setRole(role);
  }, []);


  // Conditional rendering based on the user's role
  let componentToRender = null;

  // Checking user role
  if (role === 'pensionholder') {
    componentToRender = <PensionHolder role={role} />;
  } else if (role === 'juniorOfficer') {
    componentToRender = <JuniorOfficer role={role} />;
  } else if (role === 'assistantGeneral') {
    componentToRender = <GeneralOfficer role={role} />;
  } else if (role === 'headOficer') {
    componentToRender = <HeadOfficer role={role} />;
  } else {
    componentToRender = null;
  }


  return (<div className='ss:overflow-y-hidden overflow-y-auto '>
    {componentToRender}
  </div>
  )
}
export default DashboardCom;
