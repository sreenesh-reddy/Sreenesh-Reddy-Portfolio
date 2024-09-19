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
    <div>Get in touch, Let's work together!</div>
    <br/>
    <div> &quot; Alone, we can do so little; together, we can do so much.&quot;</div>
    </div>
    </div>)
}