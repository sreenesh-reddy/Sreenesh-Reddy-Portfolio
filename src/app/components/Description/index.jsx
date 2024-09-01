import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef,useLayoutEffect } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {

    const phrase = "I am a final year Bachelor of Engineering student specializing in Artificial Intelligence and Machine Learning at Chaitanya Bharathi Institute of Technology, Hyderabad.";
    const description = useRef(null);
    const isInView = useInView(description)
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;
    // useLayoutEffect( () => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.to(slider.current, {
    //       scrollTrigger: {
    //         trigger: document.documentElement,
    //         scrub: 0.25,
    //         start: 0,
    //         end: window.innerHeight,
    //         onUpdate: e => direction = e.direction * -1
    //       },
    //       x: "-500px",
    //     })
    //     requestAnimationFrame(animate);
    //   }, [])
    const animate = () => {
        if(xPercent < -100){
          xPercent = 0;
        }
        else if(xPercent > 0){
          xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
      }
    return (
        <div id="description" ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}> Driven by a passion for learning and innovation, I aspire to create impactful solutions.</motion.p>

                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p><a href="./about">About me</a></p>
                    </Rounded>
                </div>
                {/* <div className={styles.skills}>
                    <div className={styles.sliderContainer}>
                        <div ref={slider} className={styles.slider}>
                            <p ref={firstText}>Web development-AIML-</p>
                            <p ref={secondText}>Web development-AIML-</p>
                        </div>
                    </div>
                    <div data-scroll data-scroll-speed={0.1} className={styles.description}>

                    </div>
                </div> */}
            </div>
        </div>
    )
}
