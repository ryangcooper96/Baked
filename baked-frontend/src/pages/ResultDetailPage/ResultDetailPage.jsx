import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import company from '../../utils/company'
import products from '../../utils/products'

import './ResultDetailPage.css'

function ResultDetailPage() {

    const { id } = useParams();
    const [ companyState, setCompanyState ] = useState({})
    const [ productsState, setProductsState ] = useState([])

    useEffect(() => {
        async function getCompany(id) {
            // get company
            const companyData = await company.getById(id)
            // get products by company id
            const productsData = await products.get(companyData.id)
            // set states
            setCompanyState({ ...companyData });
            setProductsState([ ...productsData ])
        }
        getCompany(id)
    },[])

  return (
    <div className='ResultDetailPage'>
        <div className="heroContainer">
            <img src={companyState.hero_image} alt='company hero'/>
            <div className='heroBlur'></div>
            <h1>{companyState.name}</h1>
            <div className="logoContainer">
                <img className='logo' src={companyState.logo_image} alt='company logo'/>
            </div>
        </div>
        <div className="description">
            <p>{companyState.description}</p>
        </div>
        <div className="products">
            <h2>Products</h2>
            {productsState ? 
                productsState.map((product) => (
                    <div className="product">
                        <img src={product.image} alt='' ></img>
                        <div className="productText">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <span>{product.allergens}</span>
                            <div className="dietSymbols">
                                {product.gluten_free ? <div className='symbol'>GF</div> : null}
                                {product.vegetarian ? <div className='symbol'>V</div> : null}
                                {product.vegan ? <div className='symbol'>Vg</div> : null}
                            </div>
                        </div>
                    </div>
                ))
            : null}
        </div>
    </div>
  )
}


export default ResultDetailPage