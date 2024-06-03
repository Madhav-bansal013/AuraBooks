import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
function Footer() {
  return (
    <div>
        <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-800 dark:text-white">
  <nav className="grid grid-flow-col gap-4">
    <a href='/about' className="link link-hover">About Us</a>
    <a href='/contactus' className="link link-hover">Contact</a>
    {/* <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a> */}
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.linkedin.com/in/madhav-bansal-08355822b" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
      <a href="mailto:madhavbsnl013@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="xl" /></a>
      <a href='https://github.com/Madhav-bansal013' target='blank'><FontAwesomeIcon icon={faGithub} size='xl'/></a>
    </div>
  </nav> 
  <aside>
    <p>© 2024 - Madhav. All rights reserved.</p>
  </aside>
</footer>
    </div>
  )
}
export default Footer