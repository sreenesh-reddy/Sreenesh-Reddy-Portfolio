'use client'
import styles from './style.module.scss'
import { useRef, useEffect,useState } from 'react';
import Landing from './Landing'
import ContactForm from './ContactForm'
import { AnimatePresence } from 'framer-motion';
import Preloader from './Preloader';

// import SlidingImages from './components/SlidingImages';


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

    <div className={styles.contactbody}>
    <ContactForm/>

    <AnimatePresence mode='wait'>
      {isLoading && <Preloader />}
    </AnimatePresence>
  </div>
     
  </>
  )
}



