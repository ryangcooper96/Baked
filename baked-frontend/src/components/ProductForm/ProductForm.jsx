import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';

import products from "../../utils/products"
import company from "../../utils/company"
import useUser from '../../hooks/useUser';

import CloudinaryUploadWidget from '../Cloudinary/CloudinaryUploadWidget';

import './ProductForm.css'

function ProductForm({ companyData }) {

  const { user } = useUser();
  const [ productsData, setProductsData ] = useState([])
  const [ newProductData, setNewProductData ] = useState({
    allergens: [],
    available: true,
    company: 0,
    created_at: '',
    description: '',
    gluten_free: false,
    id: 0,
    image: '',
    name: '',
    updated_at: '',
    vegan: false,
    vegetarian: false,
  })

  function handleProductSelection(e) {
    productsData.filter((product) => {
      // console.log(`${product.id}`);
      // console.log(e.target.id)
      // console.log(e)
      return `${product.id}` === e.target.id
    })
    // console.log(productsData.filter((product) => (`${product.id}` === e.target.id)))
    const product = productsData.filter((product) => (`${product.id}` === e.target.id))
    // console.log(product)
    setNewProductData({ ...product[0] })    
  }

  function handleChange() {

  }

  // READ //
    useEffect(() => {
        async function getProducts(ownerId) {
            // get company
            console.log(companyData)
            // const companyData = await company.get(ownerId)
            const data = await products.get(companyData.id)
            // set states
            setProductsData([ ...data ]);
            console.log(data);
        }
        // check if company exists
        if (user && user.is_company && companyData.id) {
            getProducts(user.id)
        }  
    },[user, companyData])

  return (
    <div className='ProductForm'>
      <h2>PRODUCTS</h2>
      <nav className='productNav'>
        <NavLink className='productLink' to={`add/`}><span>New Product</span></NavLink>
        {productsData.length ? productsData.map((product) => (<NavLink className='productLink' to={`${product.id}/`} onClick={handleProductSelection} key={product.id}><span className='linkTitle' id={product.id}>{product.name}</span><span className='linkDescription'> - {product.description}</span></NavLink>)) : null }
      </nav>
      <Routes>
        {productsData.length ? productsData.map((product) => (<Route path={`${product.id}/`} element={
          <div className='product'>
            <div className="productPreview">Preview</div>
            <form action="">
              <div className='formGroup'>
                <label htmlFor='name'>NAME: </label>
                <input type='text' name='name' value={newProductData.name} onChange={handleChange} required={true}></input>
              </div>
              <div className='formGroup'>
                <label htmlFor='name'>DESCRIPTION: </label>
                <input type='text' name='description' value={newProductData.description} onChange={handleChange} required={true}></input>
              </div>
              <div className='formGroup'>
                <label htmlFor='name'>IMAGE: </label>
                <input type='text' name='image' value={newProductData.image} onChange={handleChange} required={true}></input>
              </div>
              <div className='formGroup'>
                <label htmlFor='name'>ALLERGENS: </label>
                <input type='text' name='allergens' value={newProductData.allergens} onChange={handleChange} required={true}></input>
              </div>
              <div className='formGroup'>
                <label htmlFor='name'>VEGAN: </label>
                <input type='checkbox' name='name' value={newProductData.vegan} onChange={handleChange} required={true}></input>

                <label htmlFor='name'>VEGETARIAN: </label>
                <input type='checkbox' name='name' value={newProductData.vegetarian} onChange={handleChange} required={true}></input>

                <label htmlFor='name'>GLUTEN FREE: </label>
                <input type='checkbox' name='name' value={newProductData.gluten_free} onChange={handleChange} required={true}></input>
              </div>
              <div className='formGroup'>
                <label htmlFor='name'>AVAILABLE: </label>
                <input type='checkbox' name='name' value={newProductData.name} onChange={handleChange} required={true}></input>
              </div>
            </form>
          </div>
        } key={product.id}  />)) : null }
      </Routes>
    </div>
  )
}

export default ProductForm