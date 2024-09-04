import styles from './style.module.scss';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

 export default function Landing(){
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return(<div className={styles.container}>
    <div>
    <div>Engineering the Future,
    One Challenge at a Time</div>
    <br/>
    <div>— Final Year Student with a Passion for Innovation and Impact.</div>
    </div>
    <div data-scroll data-scroll-speed={0.1} className={styles.but}>
    <div className={styles.resumeButton}>
            <a target='_blank' href='https://drive.google.com/file/d/1u-bloAFXci4blDNbPNquQLTaZrqgboyE/view?usp=drive_link'>Download resume</a>
    </div>
    </div>
    </div>)
}