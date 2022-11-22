import React, { useEffect, useState } from 'react'

import company from "../../utils/company"
import useUser from '../../hooks/useUser';

import './CompanyForm.css'

function CompanyForm() {

  const { user } = useUser()
  const [companyData, setCompanyData] = useState({
    created_at: '',
    name: '',
    description: '',
    logo_image: '',
    hero_image: '',
    contact_phone: '',
    contact_email: '',
  })

  async function getCompany() {
    console.log(user)
    const data = await company.get(user)
    setCompanyData({
        created_at: data.created_at,
        name: data.name,
        description: data.description,
        logo_image: data.logo_image,
        hero_image: data.hero_image,
        contact_phone: data.contact_phone,
        contact_email: data.contact_email,        
    });
  }

  function handleChange(e) {
    setCompanyData(
        { ...companyData, [e.target.name]: e.target.value}
    )
  }
  
  useEffect(() => {
    if (user) {
      getCompany(user)
    }  
  },[user]) 

  return (
    <div className="CompanyForm">
        <div className="Preview">

        </div>
    {companyData ? (
        <>
        <div>
            <span>EST: </span>
            <span>{companyData.created_at}</span>
        </div>
        <div className='formGroup'>
            <label for='name'>NAME: </label>
            <input type='text' name='name' value={companyData.name} onChange={handleChange}></input>
        </div>
        <div className="formGroup">
            <label for='description'>DESCRIPTION: </label>
            <textarea name='description' value={companyData.description} onChange={handleChange}></textarea>
        </div>
        <div className="formGroup">
            <label for='logo'>LOGO IMAGE: </label>
            <input type="file" name="logo" accept="image/png, image/gif, image/jpeg" onChange={handleChange} />
        </div>
        <div className="formGroup">
            <label for='hero'>HERO IMAGE: </label>
            <input type="file" name="hero" accept="image/png, image/gif, image/jpeg" onChange={handleChange} />
        </div>
        <div className="formGroup">
            <label for='hero'>CONTACT PHONE: </label>
            <input type="tel" value={companyData.contact_phone} onChange={handleChange} />
        </div>
        <div className="formGroup">
            <label for='hero'>CONTACT EMAIL: </label>
            <input type="email" value={companyData.contact_email} onChange={handleChange} />
        </div>
    </>
    ) : null}
    </div>
  )
}

export default CompanyForm