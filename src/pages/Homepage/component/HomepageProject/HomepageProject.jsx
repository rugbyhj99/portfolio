import React from 'react';
import './HomepageProject.style.css';
import HomepageProjectList from './HomepageProjectList/HomepageProjectList';

const HomepageProject = () => {
  return (
    <section className='project-container'>
        <div className='project-title'>
            <h1>Project</h1>
        </div>                
        <HomepageProjectList/>        
    </section>
  )
}

export default HomepageProject