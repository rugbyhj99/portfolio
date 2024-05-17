import React from 'react'
import "./Homepage.style.css"
import HomepageMain from './component/HomepageMain/HomepageMain.jsx'
import HomepageAbout from './component/HomepageAbout/HomepageAbout.jsx'
import HomepageProject from './component/HomepageProject/HomepageProject.jsx'
import HomepageContact from './component/HomepageContact/HomepageContact.jsx'

const Homapage = () => {
  
  return (
    <div >
      <HomepageMain/>
      <HomepageAbout/>
      <HomepageProject/>
      <HomepageContact/>
    </div>
  )
}

export default Homapage