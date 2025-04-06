import { useState } from 'react'
import resumeIcon from '/resume-2.svg'
import linkedInIcon from '/linkedin-1.svg'
import gitHubIcon from '/github.svg'
// import sun from '/sun.svg'
import './App.css'
import './cloud.css'

function App() {
  const [sunState, setSunState] = useState('idle') // 'idle' | 'rising' | 'setting'

  const handleMouseEnter = () => {
    setSunState('rising')
  }

  const handleMouseLeave = () => {
    setSunState('setting')
  }



  return (
    <>
      <div className="cloud-top">
      <div className="cloud-top-left"></div>
      <div className="cloud-top-right">
        <div className={`sun ${sunState}`} />
      </div>
      </div>
        <div className="cloud">
          <div>
            <h2>Ai Nakamura</h2>
            <h5>Senior Analyst and Web Developer</h5>
            <div>
            <a href="/Master-Resume.pdf" target="_blank">
              <img src={resumeIcon} className="logo" alt="Resume icon"
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}/>
            </a>
            <a href="https://linkedin.com/in/ai-nakamura" target="_blank">
              <img src={linkedInIcon} className="logo" alt="LinkedIn icon"
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}/>
            </a>
            <a href="https://github.com/ai-nakamura" target="_blank">
              <img src={gitHubIcon} className="logo" alt="GitHub icon"
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}/>
            </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
