import React, { useEffect, useState } from 'react'

import company from "../../utils/company"
import useUser from '../../hooks/useUser';
import userService from "../../utils/userService"
import ResultCard from '../ResultCard/ResultCard';
import CloudinaryUploadWidget from '../Cloudinary/CloudinaryUploadWidget';

import './CompanyForm.css'

function CompanyForm({ companyData, setCompanyData, newCompanyData, setNewCompanyData }) {

  const { user } = useUser()
  const [updateActive, setUpdateActive] = useState(false);

  // FORM FIELD CHANGES / UPDATE STATE
  function handleChange(e) {
        setNewCompanyData({ ...newCompanyData, [e.target.name]: e.target.value})
    // BUG: MUST CHANGE TWO CHARACTERS FOR BUTTON TO APPEAR
    if(companyData[e.target.name] !== newCompanyData[e.target.name]) {
        setUpdateActive(true);
    }
  }
  
  // CREATE //
    function handleCreate() {
        async function createCompany(ownerId) {
            // create company
            await company.create(ownerId, newCompanyData)
            // Set user.is_company to TRUE
            const updatedUser = { ...user, is_company: true }
            await user.update(ownerId, updatedUser)
        }
        createCompany(user.id)
    }

  // UPDATE //
    function handleUpdate() {
        async function updateCompany(ownerId) {
            // update company
            await company.update(ownerId, newCompanyData)
        }
        updateCompany(user.id)
    }
  
  // DELETE //
    function handleDelete() {
        async function removeCompany(ownerId) {
            // delete company
            await company.remove(ownerId)

            // set user.is_company to FALSE
            const updatedUser = { ...user, is_company: true }
            await userService.update(ownerId, updatedUser)            
        }
        removeCompany(user.id)
    }
  

  return (
    <div className="CompanyForm">
        <div className="preview">
            <h2>PREVIEW:</h2>
            <ResultCard company={newCompanyData}/>
        </div>
        <form id='form' encType='multipart/form-data' >
            {user && user.is_company && newCompanyData.created_at ? (
                <div className='established'>
                    <span>ESTABLISHED: </span>
                    <span>{newCompanyData.created_at.split('-')[2].split('T')[0] + '-' + newCompanyData.created_at.split('-')[1] + '-' + newCompanyData.created_at.split('-')[0]}</span>
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
                <CloudinaryUploadWidget name="logo_image" setNewCompanyData={setNewCompanyData} newCompanyData={newCompanyData}/>
                {newCompanyData.logo_image ? <span className='indicator'>IMAGE SELECTED&nbsp;<span className="material-symbols-rounded">download_done</span></span> : null}
            </div>
            <div className="formGroup">
                <label htmlFor='hero'>HERO IMAGE: </label>
                <CloudinaryUploadWidget name="hero_image" setNewCompanyData={setNewCompanyData} newCompanyData={newCompanyData}/>
                {newCompanyData.hero_image ? <span className='indicator'>IMAGE SELECTED&nbsp;<span className="material-symbols-rounded">download_done</span></span> : null}
            </div>
            <div className="formGroup">
                <label htmlFor='address_billing'>BILLING ADDRESS: </label>
                <input type="text" name='address_billing' value={newCompanyData.address_billing} onChange={handleChange} required={true}/>
            </div>
            <div className="formGroup">
                <label htmlFor='address_collection'>COLLECTION ADDRESS: </label>
                <input type="text" name='address_collection' value={newCompanyData.address_collection} onChange={handleChange} required={true}/>
            </div>
            <div className="formGroup">
                <label htmlFor='address_delivery'>DELIVERY ADDRESS: </label>
                <input type="text" name='address_delivery' value={newCompanyData.address_delivery} onChange={handleChange} required={true}/>
            </div>
            <div className="formGroup">
                <label htmlFor='contact_phone'>CONTACT PHONE: </label>
                <input type="tel" name='contact_phone' value={newCompanyData.contact_phone} onChange={handleChange} required={true}/>
            </div>
            <div className="formGroup">
                <label htmlFor='contact_email'>CONTACT EMAIL: </label>
                <input type="email" name='contact_email' value={newCompanyData.contact_email} onChange={handleChange} required={true}/>
            </div>
            <div className="buttonGroup">
                {user && user.is_company ? 
                <>
                    <button type='button' disabled={!updateActive} onClick={handleUpdate}>SAVE</button>
                    <button type='button' onClick={handleDelete}>DELETE</button>
                </>
                 : 
                 <button type='button' onClick={handleCreate} >CREATE</button>
                }
            </div>
        </form>
    </div>
  )
}

export default CompanyForm