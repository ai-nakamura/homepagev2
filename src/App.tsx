import { useState } from 'react'
import githHubLogo from '/github.svg'
import linkedInLogo from '/linkedin-1.svg'
import './App.css'
import './cloud.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="cloud-top">
      <div className="cloud-top-left"></div>
      <div className="cloud-top-right"></div>
      </div>
        <div className="cloud">
          <div className="">
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
        </div>
    </>
  )
}

export default App
