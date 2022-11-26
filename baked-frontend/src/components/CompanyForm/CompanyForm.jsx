import React, { useEffect, useState } from 'react'

import company from "../../utils/company"
import useUser from '../../hooks/useUser';
import ResultCard from '../ResultCard/ResultCard';
import CloudinaryUploadWidget from '../Cloudinary/CloudinaryUploadWidget';

import './CompanyForm.css'
import { UserContext } from '../../context/UserContext';

function CompanyForm() {

  const { user } = useUser()
  const [updateActive, setUpdateActive] = useState(false);

  const [logoImageUrl, setLogoImageUrl] = useState("");
  const [heroImageUrl, setHeroImageUrl] = useState("");

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

  //
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
            await company.create(ownerId, newCompanyData)
        }
        createCompany(user.id)
    }
    
  // READ //
    useEffect(() => {
        async function getCompany(ownerId) {
            const data = await company.get(ownerId)
            setCompanyData({ ...data });
            setNewCompanyData({ ...data });
        }
        if (user && user.is_company) {
            getCompany(user.id)
        }  
    },[user])

  // UPDATE //
    function handleUpdate() {
        async function updateCompany(ownerId) {
            await company.update(ownerId, newCompanyData)
        }
        
        updateCompany(user.id)
    }
  
  // DELETE //
    function handleDelete() {
        async function removeCompany(ownerId) {
            await company.remove(ownerId)
        }
        removeCompany(user.id)
    }
  

  return (
    <div className="CompanyForm">
        <div className="preview">
            <h2>PREVIEW</h2>
            <ResultCard company={newCompanyData}/>
        </div>
        <form id='form' encType='multipart/form-data' >
            {user && user.is_company ? (
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
                <CloudinaryUploadWidget name="logo_image" setNewCompanyData={setNewCompanyData} newCompanyData={newCompanyData}/>
                <img id="uploadedimage" src={newCompanyData.logo_image.replace('upload/','upload/h_100,w_100,c_scale/')} alt=""/>
            </div>
            <div className="formGroup">
                <label htmlFor='hero'>HERO IMAGE: </label>
                <CloudinaryUploadWidget name="hero_image" setNewCompanyData={setNewCompanyData} newCompanyData={newCompanyData}/>
                <img id="uploadedimage" src={newCompanyData.hero_image.replace('upload/','upload/h_100,w_100,c_scale/')} alt=""/>
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
        </form>
            <div className="buttonGroup">
                {user && user.is_company ? 
                <>
                    <button disabled={!updateActive} onClick={handleUpdate}>UPDATE</button>
                    <button onClick={handleDelete}>DELETE</button>
                </>
                 : 
                    <button onClick={handleCreate} type="submit" >CREATE</button>
                }
            </div>
    </div>
  )
}

export default CompanyForm