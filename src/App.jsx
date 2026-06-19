import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiExternalLink } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter, FaBook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';
import './index.css';
import './skills.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <div className="nav-item active">AN</div>
            <div className="nav-item">SKILLS</div>
            <div className="nav-item">PROJECTS</div>
            <div className="nav-item">ABOUT</div>
            <div className="nav-item">CONTACT</div>
          </nav>

          <div className="theme-toggle">
            <button 
              className={theme === 'light' ? 'active' : ''} 
              onClick={() => toggleTheme('light')}
              aria-label="Light Mode"
            >
              <FiSun size={20} />
            </button>
            <div className="divider"></div>
            <button 
              className={theme === 'dark' ? 'active' : ''} 
              onClick={() => toggleTheme('dark')}
              aria-label="Dark Mode"
            >
              <FiMoon size={20} />
            </button>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <section className="intro-section" id="intro">
          <div className="intro-header">
            Hello world
          </div>
          <div className="intro-body">
            <h1 className="intro-title">Anshul Negi</h1>
            
            <p className="intro-description">
              I am a Computer Science student with a focus on Cyber Security and MERN stack development. I love tackling CTF challenges and building secure systems. I'm part of Pookie Bears, a CTF team ranked in the top 50 in India on CTFtime.
            </p>
            
            <p className="intro-description">
              Along with security, I enjoy creating full-stack web applications using the MERN stack. Always open to new opportunities and learning in the tech space—let's connect!
            </p>

            <div className="quick-links-container">
              <h3 className="quick-links-title">Quick Links</h3>
            </div>
          </div>
          <div className="quick-links-wrapper">
            <div className="quick-links">
              <a href="#" className="quick-link">
                <FaLinkedin color="#0077b5" /> LinkedIn <FiExternalLink size={14}/>
              </a>
              <a href="#" className="quick-link">
                <FaGithub /> GitHub <FiExternalLink size={14}/>
              </a>
              <a href="#" className="quick-link">
                <FaXTwitter /> X/Twitter <FiExternalLink size={14}/>
              </a>
              <a href="#" className="quick-link">
                <FaBook /> CTF Blogs <FiExternalLink size={14}/>
              </a>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <h2 className="section-title">Skills</h2>
          
          <div className="marquee-container">
            <div className="marquee-content">
              <div className="marquee-group">
                <span>Cybersecurity</span>
                <span>Web dev</span>
                <span>Frontend</span>
                <span>Backend</span>
                <span>Fullstack</span>
              </div>
              <div className="marquee-group">
                <span>Cybersecurity</span>
                <span>Web dev</span>
                <span>Frontend</span>
                <span>Backend</span>
                <span>Fullstack</span>
              </div>
            </div>
          </div>

          <div className="skills-grid">
            <div className="skill-row">
              <div className="skill-label">Programming Languages</div>
              <div className="skill-items">
                <SiJavascript color="#F7DF1E" size={32} />
                <SiPython color="#3776AB" size={32} />
              </div>
            </div>
            
            <div className="skill-row">
              <div className="skill-label">Speaking Languages</div>
              <div className="skill-items text-items">
                English, Hindi, German
              </div>
            </div>

            <div className="skill-row">
              <div className="skill-label">Tools & Framework</div>
              <div className="skill-items">
                <SiReact color="#61DAFB" size={32} />
                <SiNodedotjs color="#339933" size={32} />
                <SiMongodb color="#47A248" size={32} />
                <SiTailwindcss color="#06B6D4" size={32} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
