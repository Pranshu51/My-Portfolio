import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 }
};


const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000);
      
     animateLetter(letter, min + (max - min) * intensity);  
    });
  };

  const handleMouseLeave = () => letters.forEach((letter) => animateLetter(letter, base ,0.3));

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  }
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const mobileSubtitleRef = useRef(null);
    const mobileTitleRef = useRef(null);

    // Desktop/tablet hover animation (original behavior)
    useGSAP(() =>{
      if (typeof window !== 'undefined' && window.innerWidth < 640) return;

      const titleCleanup = setupTextHover(titleRef.current, 'title');
      const subtitleCleanup = setupTextHover(subtitleRef.current, 'subtitle');
      return () => {
        titleCleanup && titleCleanup();
        subtitleCleanup && subtitleCleanup();
      };
    },[]);

    // Mobile-only wave/flow animation
    useGSAP(() =>{
      if (typeof window === 'undefined' || window.innerWidth >= 640) return;

      const mobileSubtitle = mobileSubtitleRef.current;
      const mobileTitle = mobileTitleRef.current;
      if (!mobileSubtitle || !mobileTitle) return;
        
      const subtitleLetters = mobileSubtitle.querySelectorAll("span");
      const titleLetters = mobileTitle.querySelectorAll("span");
        
      subtitleLetters.forEach((letter, i) => {
        gsap.fromTo(letter, 
          { opacity: 0, y: 10 },
          { 
            opacity: 1, 
            y: 0,
            duration: 0.3,
            delay: i * 0.05,
            ease: "power2.out"
          }
        );
      });
        
      titleLetters.forEach((letter, i) => {
        gsap.fromTo(letter, 
          { opacity: 0, y: 10 },
          { 
            opacity: 1, 
            y: 0,
            duration: 0.3,
            delay: subtitleLetters.length * 0.05 + i * 0.05,
            ease: "power2.out"
          }
        );
      });
    },[]);

  return <>
    <section id="welcome" className="hidden max-sm:flex">
      <div className="text-center">
        <p ref={mobileSubtitleRef}>{renderText("Hey,I'm Pranshu!", 'text-sm font-georama',100)}</p>
        <h1 ref={mobileTitleRef} className='text-xl font-bold italic mt-2'>{renderText("portfolio", "font-georama")}</h1>
      </div>
    </section>
    
    <section id="welcome" className="max-sm:hidden">
      <p ref={subtitleRef}>{renderText("Hey,I'm Pranshu! Welcome to my", 'text-3xl font-georama',100)}</p>
      <h1 ref={titleRef} className='mt-7'>{renderText("portfolio", "text-9xl italic font-georama")}</h1>
    </section>
  </>
}

export default Welcome
