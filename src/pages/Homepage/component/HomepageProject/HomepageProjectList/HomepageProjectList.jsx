import React, { useEffect, useState } from 'react'
import './HomepageProjectList.style.css';
import github from '../../../image/github.webp';
import chrome from '../../../image/chrome_os.svg';

const HomepageProjectList = () => {
    const [ projectList, setProjectList ] = useState([]);

    const getProjects = async() => {
        let url = `https://my-json-server.typicode.com/rugbyhj99/portfolio/project`
        let response = await fetch(url);
        let data = await response.json();
        setProjectList(data);
    }

    useEffect(() => {        
        getProjects()
    }, [])

    console.log(projectList);
  return (   
    <div>  
        {
            projectList.map(function(project, index){
                return (
                    <div className='list-container' key={index}>
                        <div className='list-img'>
                            <img src={project.img} alt={project.title} />
                        </div>
                        <div className='list-content'>
                            <h3>{project.type}</h3>
                            <h2>{project.title}</h2>
                            <p>{project.content}</p>
                            <div className='list-content-shortcut'>
                                <div>
                                    <a href={project.giturl} >
                                        <img src={github} alt="GitHub" />
                                    </a>                                    
                                </div>
                                <div>
                                    <a href={project.url}>
                                        <img src={chrome} alt="Live Site"/>
                                    </a>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })

        }
            
    </div>
  )
}

export default HomepageProjectList