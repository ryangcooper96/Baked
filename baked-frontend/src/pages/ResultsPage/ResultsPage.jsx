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
      <div className="searchContainer">
        <input className='searchBar' type="text" placeholder='SEARCH' onChange={(e) => (setSearch(e.target.value))} value={search} name='search'/>
        <span className="material-symbols-rounded">search</span>
      </div>
      <div className='results'>
        {companies.map((company) => (<ResultCard company={company} key={company.id} />))}
      </div>
    </div>
  )
}

export default ResultsPage