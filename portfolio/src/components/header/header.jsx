import "./header.css"
export default function header() {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Victor</a>

            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <i className="uil uil-estate nav__icon"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="about.html" className="nav__link">
                            <i className="uil uil-user nav__icon"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="skills.html" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="services.html" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="portfolio.html" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
      
  )
}
