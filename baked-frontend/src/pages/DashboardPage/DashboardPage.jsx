import React, { useEffect } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom';

import useUser from '../../hooks/useUser';

import CompanyForm from '../../components/CompanyForm/CompanyForm'
import HygieneForm from '../../components/HygieneForm/HygieneForm'
import ProductForm from '../../components/ProductForm/ProductForm';

import "./DashboardPage.css"

function DashboardPage() {

  const { user } = useUser()

  useEffect(() => {}, [user])

  return (
    <div className='DashboardPage'>
        <div className='sideNavBar'>
          <nav>
            <ul>
              <li><NavLink><span>Account Settings</span></NavLink></li>
              <li><span>Company Settings</span>
                <ul>
                  { (user && !user.is_company) ? 
                    <li><NavLink to='dashboard/company/general'><span>Sign Up</span></NavLink></li>
                    :
                    <>
                      <li><NavLink to='dashboard/company/general'><span>General Info</span></NavLink></li>
                      <li><NavLink to='dashboard/company/hygiene'><span>Hygiene Rating</span></NavLink></li>
                      <li><NavLink><span>Products</span></NavLink></li>
                    </>
                  }
                </ul>
              </li>
              {/* <li><NavLink><span>Courier Settings</span></NavLink></li> */}
            </ul>
          </nav>
        </div>
        <div className='dashboardContent'>
          <Routes>
            <Route path='dashboard/company/general' element={<CompanyForm/>} />
            <Route path='dashboard/company/hygiene' element={<HygieneForm/>} />
            <Route path='dashboard/company/product' element={<ProductForm/>} />
          </Routes>
        </div>
    </div>
  )
}

export default DashboardPage