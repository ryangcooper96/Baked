import React, { useEffect, useState } from 'react'
import ResultCard from '../../components/ResultCard/ResultCard'
import company from '../../utils/company'

import './ResultsPage.css'

function ResultsPage() {

  const [ companies, setCompanies ] = useState([
  ])
  const [ search, setSearch ] = useState('');

  // Load Companies w/ search query
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
        {companies.map((company) => (<ResultCard company={company} key={company.id} />))}
      </div>
    </div>
  )
}

export default ResultsPage