import React from 'react'

import useUser from '../../hooks/useUser';

import CompanyForm from '../../components/CompanyForm/CompanyForm'

import "./DashboardPage.css"

function DashboardPage() {

  return (
    <div className='DashboardPage'>
        <div className='sideNavBar'>
            <span>Customer</span>
            <span>Company</span>
            <span>Courier</span>
        </div>
        <div className='dashboardContent'>
            <CompanyForm/>
        </div>
    </div>
  )
}

export default DashboardPage