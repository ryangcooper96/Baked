import React, { useEffect, useState } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom';

import company from "../../utils/company"
import useUser from '../../hooks/useUser';

import CompanyForm from '../../components/CompanyForm/CompanyForm'
import ProductForm from '../../components/ProductForm/ProductForm';

import "./DashboardPage.css"

function DashboardPage() {

  const { user } = useUser()

  const [companyData, setCompanyData] = useState({
    name: '',
    description: '',
    address_billing: '',
    address_collection: '',
    address_delivery: '',
    logo_image: '',
    hero_image: '',
    contact_phone: '',
    contact_email: ''
  })
  const [newCompanyData, setNewCompanyData] = useState({
    name: '',
    description: '',
    address_billing: '',
    address_collection: '',
    address_delivery: '',
    logo_image: '',
    hero_image: '',
    contact_phone: '',
    contact_email: ''
  })

  // READ //
    useEffect(() => {
        async function getCompany(ownerId) {
            // get company
            const data = await company.getByUser(ownerId)
            // set states
            setCompanyData({ ...data });
            setNewCompanyData({ ...data });
        }
        // check if company exists
        if (user && user.is_company) {
            getCompany(user.id)
        }  
    },[user])

  return (
    <div className='DashboardPage'>
        <div className='sideNavBar'>
          <nav>
            <ul>
              <li><NavLink><span>Account Settings</span></NavLink></li>
              <li><span>Company Settings</span>
                <ul>
                  { (user && !user.is_company) ? 
                    <li><NavLink to='company/general'><span>Sign Up</span></NavLink></li>
                    :
                    <>
                      <li><NavLink to='company/general'><span>General Info</span></NavLink></li>
                      <li><NavLink to='company/products'><span>Products</span></NavLink></li>
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
            <Route path='company/general' element={<CompanyForm companyData={companyData} setCompanyData={setCompanyData} newCompanyData={newCompanyData} setNewCompanyData={setNewCompanyData}/>} />
            <Route path='company/products/*' element={<ProductForm companyData={companyData}/>} />
          </Routes>
        </div>
    </div>
  )
}

export default DashboardPage