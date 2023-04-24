import React from 'react'
import './portfolio.css'
import xperience from '../assets/xperience.png'
import sorteio from '../assets/sorteio.png'
import json from '../assets/json.png'
import imc from '../assets/imc.png'

function Portfolio() {
  return (
    <div className='portfolioCard'>
        <div className='duploCards'>
            <a target={'_blank'} href="https://xperienceweb.netlify.app/"><img src={xperience} alt="" /></a>
            <a target={'_blank'} href="https://devpedrosena.github.io/sorteio/"><img src={sorteio} alt="" /></a>
        </div>
        <div className='duploCards'>
            <a target={'_blank'} href="https://devpedrosena.github.io/JSON-API/"><img src={json} alt="" /></a>
            <a target={'_blank'} href="https://devpedrosena.github.io/Imc/"><img src={imc} alt="" /></a>
        </div>
    </div>
  )
}

export default Portfolio