import { useState } from "react"
import "./header.css"
const Header = () => {

    const [Toggle, setToggle] = useState(false)

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Victor</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="about.html" className="nav__link">
                            <i className="uil uil-user nav__icon"></i>About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="skills.html" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="services.html" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i>Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="portfolio.html" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i>Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="contact.html" className="nav__link">
                            <i className="uil uil-message nav__icon"></i>Contact
                        </a>
                    </li>   
                </ul>

                <i className="uil uil-times nav__close" onClick={() => setToggle(!Toggle)}></i>
            </div>

            <div className="nav__toggle " onClick={() => setToggle(!Toggle)} id="nav-toggle">
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
      
  )
}

export default Header
