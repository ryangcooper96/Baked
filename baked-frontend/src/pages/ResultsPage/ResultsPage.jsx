import React, { useEffect, useState } from 'react'
import ResultCard from '../../components/ResultCard/ResultCard'
import company from '../../utils/company'

import './ResultsPage.css'

function ResultsPage() {

  const [ companies, setCompanies ] = useState([{
    created_at: '',
    name: 'Sample Company',
    description: 'A description of the sample company to entice customers.',
    logo_image: '',
    hero_image: '',
    contact_phone: '',
    contact_email: '',
  }])
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    async function getAllCompanies(search) {
      const data = await company.getAll(search);
      setCompanies([...data])
    }
    getAllCompanies(search)
  }, [search])

  return (
    <div className='ResultsPage'>
      <input className='searchBar' type="text" onChange={(e) => (setSearch(e.target.value))} value={search} name='search'/>
      <div className='results'>
        {companies.map((company) => (<ResultCard company={company} />))}
      </div>
    </div>
  )
}

export default ResultsPage