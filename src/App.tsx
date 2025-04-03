import { useState } from 'react'
import githHubLogo from '/github.svg'
import linkedInLogo from '/linkedin-1.svg'
// import sun from '/sun.svg'
import './App.css'
import './cloud.css'

function App() {
  const [count, setCount] = useState(0)
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
            <a href="https://linkedin.com/in/ai-nakamura" target="_blank">
              <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
            </a>
            <a href="https://github.com/ai-nakamura" target="_blank">
              <img src={githHubLogo} className="logo" alt="GitHub logo" />
            </a>
          </div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Make the sun rise
          </button>
        </div>
    </>
  )
}

export default App
