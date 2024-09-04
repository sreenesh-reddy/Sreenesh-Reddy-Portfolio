'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import { useRef, useEffect,useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader/Preloader';
import Personalfinance from './projects/Personalfinance';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import Description from './components/Description/Description';
// import SlidingImages from './components/SlidingImages';
import Contact from './components/Contact/Contact';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  
  
  return (
    <main className={styles.Main}>
     
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <div className={styles.rest}>
      <Description />
      <section id="projects">
      <Projects />
      </section>
      <Contact/>
      </div>
    </main>
  )
}



