import { useState } from 'react';
import resumeIcon from '/resume-2.svg';
import linkedInIcon from '/linkedin-1.svg';
import gitHubIcon from '/github.svg';
// import sun from '/sun.svg'
import './App.css';
import './cloud.css';

function App() {
  const [sunState, setSunState] = useState<'idle' | 'rising' | 'setting'>(
    'idle'
  );

  const handleMouseEnter = () => {
    setSunState('rising');
  };

  const handleMouseLeave = () => {
    setSunState('setting');
  };

  return (
    <>
      <div className="cloud-top">
        <div className="cloud-top-left"></div>
        <div className="cloud-top-right">
          <div className={`sun ${sunState}`} />
        </div>
      </div>
      <div className="cloud">
        <div className="content">
          <h2>Ai Nakamura</h2>
          <h5>Senior Analyst and Web Developer</h5>
          <br />
          <br />

          <div className="icons">
            <a className="icon" href="/Master-Resume.pdf" target="_blank">
              <img
                src={resumeIcon}
                className="icon"
                alt="Resume icon"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </a>
            <a
              className="icon"
              href="https://linkedin.com/in/ai-nakamura"
              target="_blank">
              <img
                src={linkedInIcon}
                className="icon"
                alt="LinkedIn icon"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </a>
            <a
              className="icon"
              href="https://github.com/ai-nakamura"
              target="_blank">
              <img
                src={gitHubIcon}
                className="icon"
                alt="GitHub icon"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
