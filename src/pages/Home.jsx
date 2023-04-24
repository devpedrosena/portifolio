import './home.css'
import { useState } from "react"
import btnDarkMode from '../assets/Btn Change-theme.png'
import btnLigthMode from '../assets/Btn Change-ligth.png'
import Eu from '../assets/pedro.png'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'

function Home() {

  const handleEmailClick = () => {
    const mailtoLink = `mailto:devpedrosena@gmail.com?subject=${encodeURIComponent('contato com pedro sena')}&body=${encodeURIComponent('')}`;
    window.location.href = mailtoLink;
  };

  // download curriculo

  const handleDownloadClick = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = "/PedroSenaCurrículo.pdf"
    downloadLink.download = "PedroSenaCurrículo.pdf";
    downloadLink.click();
  };

    const [darkMode, setdarkMode] = useState(false)
    const [btnDark, setbtnDark] = useState(false)
    const [bgdark, setbgDark] = useState(false)
    const [activeBtn, setActiveBtn] = useState(null);

    const handleActiveBtn = (btnName) => {
      setActiveBtn(btnName);
    }

    const btnPortfolioActive = activeBtn === 'portfolio' ? 'active-btn' : '';
    const renderPortifolio  = activeBtn  ==='portfolio' ? <Portfolio/> : '';
    const renderSkills  = activeBtn  ==='skills' ? <Skills/> : '';
    const btnSkillsActive = activeBtn === 'skills' ? 'active-btn' : '';


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
              <p>JavaScript Developer</p>
              <div className="sociaisPedro">
                <a className={`${theme}`} href="https://github.com/devpedrosena" target={'_blank'}><i className="fa-brands fa-github fa-xl"></i></a>
                <a className={`${theme}`} href="https://www.linkedin.com/in/pedrohsenna/" target={'_blank'}><i className="fa-brands fa-linkedin fa-xl"></i></a>
                <a className={`${theme}`} href="https://www.instagram.com/pedrosenna__/" target={'_blank'}><i className="fa-brands fa-instagram fa-xl"></i></a>
              </div>
            </div>
          </div>
          <div>
            <div className='experienciaPedro'>
             <div className="bobyExperiencias">
              <h3> 3° </h3>
              <div className="p">
              <p>Semestre ADS</p>
             </div>
              </div>
             
             <div className="bobyExperiencias">
              <h3>10+</h3>
              <div className="p" >
              <p>Projetos realizados</p>
             </div>
              </div>
             
             <div className="bobyExperiencias">
              <h3>5</h3>
              <div className="p">
              <p>Tecnologias dominantes</p>
             </div>
              </div>
            </div>
            <div className='btns'>
              <div className='cv-div-btn'>
                <button className="btn-cv btn" onClick={handleDownloadClick}>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </div>
              <div className='contato-div-btn'>
                <button className={`btn ${bgDarkTheme}`} onClick={handleEmailClick}>Contato</button>
              </div>
            </div>
          </div>

          <div className={`portfolio-skills ${bgDarkTheme}`}>
              <div className='portifolio'>
                <button className={`btn btn-portfolio ${bgDarkTheme} ${btnPortfolioActive}`} onClick={() => handleActiveBtn('portfolio')}>Projetos</button>
              </div>
              <div className='skills'>
                <button className={`btn btn-skills ${bgDarkTheme} ${btnSkillsActive}`} onClick={() => handleActiveBtn('skills')}>Skills</button>
              </div>
              
          </div>
            <div className='cards'>
              <div className='portfolio'>
                {renderPortifolio}
              </div>
              <div className={`skillsMain ${bgDarkTheme}`}>
                {renderSkills}
              </div>
            </div>
            <div className='footer'>
                <p>© Pedro Sena. 2023 All rigths reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Home