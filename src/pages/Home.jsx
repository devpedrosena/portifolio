import './home.css'
import { useState } from "react"
import btnDarkMode from '../assets/Btn Change-theme.png'
import btnLigthMode from '../assets/Btn Change-ligth.png'
import Eu from '../assets/pedroSena.png'

function Home() {

    const [darkMode, setdarkMode] = useState(false)
    const [btnDark, setbtnDark] = useState(false)
    const [bgdark, setbgDark] = useState(false)

    const handleBg = ()=>{
        setdarkMode(!darkMode)
        setbtnDark(!btnDark)
        setbgDark(!bgdark)
    }

    const btnChange = btnDark ?  btnLigthMode :  btnDarkMode;
    const theme = darkMode ? 'bg-light' : 'bg-dark';
    const bgDarkTheme = bgdark ? 'btn-contato-ligth' : 'btn-contato-dark';
    

  return (
    <div className={`main ${theme}`}>
        <div className="container">
          <div className='header'>
            <div className='btn-change-theme'>
              <button onClick={handleBg}><img src={`${btnChange}`} alt="" /></button>
            </div>
          </div>
          <div className='mainPedro'>
            <div className='imgPedro'>
              <img src={Eu} alt="" />
            </div>
            <div className='headerPedro'>
              <h1>Pedro Sena</h1>
              <p>Web Developer</p>
              <div className="sociaisPedro">
                <i class="fa-brands fa-github fa-xl"></i>
                <i class="fa-brands fa-linkedin fa-xl"></i>
                <i class="fa-brands fa-instagram fa-xl"></i>
              </div>
            </div>
          </div>
          <div>
            <div className='experienciaPedro'>
             <div>
              <h3>React Js</h3>
              <div>
              <p>react...</p>
             </div>
              </div>
             
             <div>
              <h3>Javascript</h3>
              <div>
              <p>Javascript...</p>
             </div>
              </div>
             
             <div>
              <h3>Node Js</h3>
              <div>
              <p>Node...</p>
             </div>
              </div>
            </div>
            <div className='btns'>
              <div className='cv-div-btn'>
                <button className='btn-cv btn'>Download CV <i class="fa-solid fa-download"></i></button>
              </div>
              <div className='contato-div-btn'>
                <button className={`btn ${bgDarkTheme}`}>Contato</button>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Home