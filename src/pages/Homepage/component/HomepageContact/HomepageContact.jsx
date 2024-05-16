import React from 'react';
import './HomepageContact.style.css';


const HomepageContact = () => {
  return (
    <section className='contact-container'>
        <div className='contact-title'>
            <h1>Contact</h1>
        </div>
        <div className='contact-content'>
            <div className='contact-content1'>
              <p>모든 말씀을 귀중히 여기며 배우겠습니다.</p>
              <p>작은 의견도 감사히 받아들이겠습니다.</p>
            </div>
            <ul>
                <li>Phone : 010 2956 3468</li>
                <li>E-mail : rugbyhj99@naver.com</li>
                <li>Github : https://github.com/rugbyhj99</li>                
                <li>Blog : https://rugbyhj99.tistory.com/</li>
            </ul>
        </div>
    </section>
  )
}

export default HomepageContact