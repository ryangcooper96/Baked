import React, { useEffect, useState } from 'react'

import './ResultDetailPage.css'

function ResultDetailPage({ company }) {

    const [ products, setProducts ] = useState({})
    const [ lineItems, setLineItems ] = useState({})

    // async function getProducts() {
    //     const data = await product.get();
    //     setProducts({ ...data })
    //     return data
    // }
    // async function getLineItems() {
    //     const data = await lineItem.get();
    //     setLineItems({ ...data })
    // }
    
    // useEffect(() => {
    //     try {
    //         const fetchedProducts = getProducts();
    //         fetchedProducts.forEach((prod) => {
    //             getLineItems(prod);
    //         })
    //     }
    // }, [])

  return (
    <div className='ResultDetailPage'>
        <div className="companyInfo">
            <div className="logoContainer">
                <img src='https://img.freepik.com/premium-vector/bakery-logo-template_441059-121.jpg?w=2000' alt='company logo'/>
            </div>
            <div className="heroContainer">
                <div className='heroBlur'></div>
                {/* <h2>{company ? company.name : 'Company Name'}</h2> */}
                <h2>Company Name</h2>
            </div>
        </div>
        <div className="Products"></div>
    </div>
  )
}


export default ResultDetailPage