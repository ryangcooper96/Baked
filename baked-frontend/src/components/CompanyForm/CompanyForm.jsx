import React, { useEffect, useState } from 'react'

import company from "../../utils/company"
import useUser from '../../hooks/useUser';
import ResultCard from '../ResultCard/ResultCard';

import './CompanyForm.css'
import { UserContext } from '../../context/UserContext';

function CompanyForm() {

  const { user } = useUser()
  const [updateActive, setUpdateActive] = useState(false);

  const [companyData, setCompanyData] = useState({
    created_at: '',
    name: '',
    description: '',
    logo_image: '',
    hero_image: '',
    contact_phone: '',
    contact_email: '',
  })
  const [newCompanyData, setNewCompanyData] = useState({
    created_at: '',
    name: '',
    description: '',
    logo_image: '',
    hero_image: '',
    contact_phone: '',
    contact_email: '',
  })

  //
  function handleChange(e) {
    setNewCompanyData(
        { ...newCompanyData, [e.target.name]: e.target.value}
    )
    // BUG: MUST CHANGE TWO CHARACTERS FOR BUTTON TO APPEAR
    if(companyData[e.target.name] !== newCompanyData[e.target.name]) {
        setUpdateActive(true);
    }
  }

  //
  function handleCreate() {
    async function createCompany(ownerId) {
        await company.create(ownerId, newCompanyData)
    }
    createCompany(user.id)
    console.log("Lit")
  }
  
  //
  function handleUpdate() {

  }
  
  //
  function handleDelete() {

  }
  
  //
  useEffect(() => {
    async function getCompany(ownerId) {
        const data = await company.get(ownerId)
        setCompanyData({ ...data });
        setNewCompanyData({ ...data });
    }
    if (user.is_company) {
        getCompany(user.id)
    }  
  },[user])

  return (
    <div className="CompanyForm">
        <div className="preview">
            <h2>PREVIEW</h2>
            <ResultCard company={newCompanyData}/>
        </div>
        <form>
            {user.is_company ? (
                <div>
                    <span>EST: </span>
                    <span>{newCompanyData.created_at}</span>
                </div>
            ) : null}
            <div className='formGroup'>
                <label htmlFor='name'>NAME: </label>
                <input type='text' name='name' value={newCompanyData.name} onChange={handleChange} required={true}></input>
            </div>
            <div className="formGroup">
                <label htmlFor='description'>DESCRIPTION: </label>
                <textarea name='description' value={newCompanyData.description} onChange={handleChange} required={true}></textarea>
            </div>
            <div className="formGroup">
                <label htmlFor='logo'>LOGO IMAGE: </label>
                <input type="file" name="logo_image" accept="image/png, image/gif, image/jpeg" onChange={handleChange} required={true}/>
            </div>
            <div className="formGroup">
                <label htmlFor='hero'>HERO IMAGE: </label>
                <input type="file" name="hero_image" accept="image/png, image/gif, image/jpeg" onChange={handleChange} required={true}/>
            </div>
            <div className="formGroup">
                <label htmlFor='contact_phone'>CONTACT PHONE: </label>
                <input type="tel" name='contact_phone' value={newCompanyData.contact_phone} onChange={handleChange} required={true}/>
            </div>
            <div className="formGroup">
                <label htmlFor='contact_email'>CONTACT EMAIL: </label>
                <input type="email" name='contact_email' value={newCompanyData.contact_email} onChange={handleChange} required={true}/>
            </div>
        </form>
            <div className="buttonGroup">
                {user.is_company ? 
                <>
                    <button disabled={updateActive} onClick={handleUpdate}>UPDATE</button>
                    <button onSubmit={handleDelete}>DELETE</button>
                </>
                 : 
                    <button onClick={handleCreate} >CREATE</button>
                }
            </div>
    </div>
  )
}

export default CompanyForm