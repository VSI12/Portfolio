import React from 'react'
import './scrollup.css'

const Scrollup = () => {
    document.addEventListener('DOMContentLoaded', () => {
        window.addEventListener('scroll', function () {
          const scrollup = document.querySelector('.scrollup');
          if (window.scrollY >= 560) {
            scrollup.classList.add('show-scroll');
          } else {
            scrollup.classList.remove('show-scroll');
          }
        });
      });
      
  return (
    <a href="#d" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default Scrollup