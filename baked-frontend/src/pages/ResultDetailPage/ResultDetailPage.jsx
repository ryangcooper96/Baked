import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import company from '../../utils/company'

import './ResultDetailPage.css'

function ResultDetailPage() {

    const { id } = useParams();
    const [ companyData, setCompanyData ] = useState({})
    const [ products, setProducts ] = useState({})

    useEffect(() => {
        async function getCompany(id) {
            // get company
            const data = await company.get(id)
            // set states
            setCompanyData({ ...data });
        }
        getCompany(id)
    },[])

  return (
    <div className='ResultDetailPage'>
        <div className="companyInfo">
            <div className="logoContainer">
                <img src={companyData.logo_image} alt='company logo'/>
            </div>
            <div className="heroContainer">
                <div className='heroBlur'></div>
                <h2>{companyData.name}</h2>
            </div>
            <div className="desciption">
                <p>{companyData.description}</p>
            </div>
        </div>
        <div className="Products"></div>
    </div>
  )
}


export default ResultDetailPage