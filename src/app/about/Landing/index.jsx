import styles from './style.module.scss';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

 export default function Index(){
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
            <a href='resume'>Download resume</a>
    </div>
    </div>
    </div>)
}