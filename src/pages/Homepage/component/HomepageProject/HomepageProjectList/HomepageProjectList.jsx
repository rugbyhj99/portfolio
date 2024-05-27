import React, { useEffect, useState } from 'react'
import './HomepageProjectList.style.css';
import github from '../../../image/github.webp';
import chrome from '../../../image/chrome_os.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomepageProjectList = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500 // 애니메이션 지속 시간 (밀리초)
        });
    }, []); // 초기 렌더링 시 한 번만 호출

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
                    <div className='list-container' key={index} data-aos="zoom-in-up">
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