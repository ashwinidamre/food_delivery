import React from 'react'
import InstagramIcons from '@mui/icons-material/Instagram'
import TwitterIcons from '@mui/icons-material/Twitter'
import FacebookIcons from '@mui/icons-material/Facebook'
import LinkedInIcons from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
    <div className="socialMedia">
    <InstagramIcons />
    <TwitterIcons />
    <FacebookIcons />
    <LinkedInIcons />
    </div>
    <a>&copy; 2021 pedrotechpizza.com</a>
    </div>
  )
}

export default Footer
