import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Footer = () => {
  return (
    <footer className="footer-distributed bg-dark">

      <div className="footer-right">

        <a className="" href="#"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x" /></a>
        <a className="" href="#"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /></a>
        <a className="" href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" /></a>
        <a className="" href="#"><FontAwesomeIcon icon={['fab', 'github']} size="2x" /></a>

      </div>

      <div className="footer-left">

        <p className="footer-links">
          <a href="/">Home</a>
            ·
          <a href="#">About</a>
            ·
          <a href="#">Faq</a>
      
        </p>

        <p>Jon McNeil &copy; 2018</p>
      </div>

    </footer>
  )
}

export default Footer
