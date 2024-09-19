'use client'
import styles from './style.module.scss'
import { useEffect,useState } from 'react';
import Landing from './Landing/Landing'
import Education from './Education/Education'
import Skills from './Skills/Skills'
import { AnimatePresence } from 'framer-motion';
import Preloader from './Preloader/Preloader';


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
          }, 100)
      }
    )()
  }, [])

  
  
  return (<>
    <Landing/>
    <Education/>
    <Skills/>
    <div className={styles.aboutbody}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
    </div>
    </>
  )
}



