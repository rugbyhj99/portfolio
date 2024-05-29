import React, { useEffect } from 'react';
import './HomepageAbout.style.css';
import me from '../../image/me.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomepageAbout = () => {

  useEffect(() => {
    AOS.init({
        duration: 2000 // 애니메이션 지속 시간 (밀리초)
    });
}, []); // 초기 렌더링 시 한 번만 호출
  
  return (
    <section className='about-container' >
      <div className='about-title'>
        <h1>About</h1>
      </div>
      <div className='about-content-title' data-aos="fade-left" data-aos-delay="0">
        <h2><span className='about-content-title-point1'>D</span>o More:</h2>
        <h2 className='about-content-title-contents'>[<span className='about-content-title-point2'>P</span>hrase] 미래를 위한 새로운 <span className='about-content-title-point3'>도전</span>에 과감히 더 나아가다.</h2>
      </div>
      <div className='about-contents' data-aos="fade-left" data-aos-delay="700">
        <div className='about-content1'>
          <img src={me}/>
        </div>
        <div className='about-content2'>
          <p>안녕하세요, 저는 끊임없이 도전하는 용감한 여정에 함께할 준비가 된 이호재입니다.</p>
          <p>어려움을 극복하고 새로운 가능성을 탐험하기 위해 항상 노력하는 개발자로서,</p>
          <p>사용자 중심의 접근으로 보기 편하면서도 뛰어난 작품을 만들어내고자 합니다.</p>
          <p>시작이 늦었지만, 더 많은 것을 이루기 위해 끊임없이 노력하겠습니다.</p>
          <p className='about-content2-last-p'>저의 개발자 꿈을 향한 도전을 멈추지 않고 끈질기게 나아가겠습니다.</p>
          <ul className='about-content2-box'>
            <li>React</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JQuery</li>
          </ul>

            
        </div>
      </div>
    </section>
  )
}

export default HomepageAbout