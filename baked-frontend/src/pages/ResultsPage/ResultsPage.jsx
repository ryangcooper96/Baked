import React from 'react'
import ResultCard from '../../components/ResultCard/ResultCard'

import './ResultsPage.css'

function ResultsPage() {

  const company = {
    created_at: '',
    name: 'Sample Company',
    description: 'A description of the sample company to entice customers.',
    logo_image: '',
    hero_image: '',
    contact_phone: '',
    contact_email: '',
  }

  return (
    <div className='ResultsPage'>
        <ResultCard company={company}/>
        <ResultCard company={company}/>
        <ResultCard company={company}/>
        <ResultCard company={company}/>
    </div>
  )
}

export default ResultsPage