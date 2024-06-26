import React, { useEffect, useState } from 'react';
import './HomepageMain.style.css';
import { throttle } from 'lodash';

const HomepageMain = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setOffsetY(window.scrollY);
    }, 100); // 100ms마다 실행

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="main-container">
      <h2 className="main-transition" style={{ transform: `translateX(-${Math.max(0, offsetY - 50)}px)` }}>HEOLLO, I'M</h2>
      <h2 style={{ transform: `translateX(${Math.max(0, offsetY - 200)}px)` }}>HO JAE LEE</h2>
      <p style={{ transform: `translateX(-${Math.max(0, offsetY - 350)}px)` }}>FRONTEND</p>
      <p style={{ transform: `translateX(${Math.max(0, offsetY - 500)}px)` }}>DEVELOPER</p>
    </section>
  );
}

export default HomepageMain;