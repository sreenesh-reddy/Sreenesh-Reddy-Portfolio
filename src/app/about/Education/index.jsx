import styles from './style.module.scss'
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from '../animation';


export default function Index() {
    const phrase1 = "I am a final year undergraduate student pursuing a Bachelor of Technology degree in Computer Science with a specialization in Artificial Intelligence and Machine Learning (AIML) at Chaitanya Bharathi Institute of Technology, Gandipet. With a CGPA of 8.73/10 up to the 6th semester, I have consistently demonstrated strong academic performance."
    const phrase2 = "Prior to my undergraduate studies, I completed a diploma in Computer Science Engineering at Quli Qutub Shah Government Polytechnic College, Hyderabad. This foundational program provided me with a solid understanding of computer science principles and practical skills."
    const phrase3 = "My earlier education includes schooling at G. Narayanamma High School up to the 10th grade, where I achieved a GPA of 8.2. This early academic success has laid the groundwork for my continued pursuit of excellence in the field of computer science."
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div className={styles.container}>
            <div className={styles.title}>
            <motion.span variants={opacity} animate={isInView?"open":"closed"}>
                My Education
                </motion.span>
            </div>
            
            <div ref={description} className={styles.body}>
                <p>
                    {phrase1.split(" ").map((word, index) => {
                        return <span index={index} className={styles.mask}>
                                <motion.span animate={isInView ? "open" : "closed"} variants={slideUp} key={index} custom={index}>{word}</motion.span></span>
                    })}
                <br/> <br/>
                    {phrase2.split(" ").map((word, index) => {
                        return <span className={styles.mask} index={index}>
                                <motion.span key={index} variants={slideUp} custom={index} animate={isInView?"open":"closed"}>{word}</motion.span>
                        </span>
                    })}
                                    <br/> <br/>

                    {phrase3.split(" ").map((word, index) => {
                        return <span className={styles.mask} index={index}>
                                <motion.span key={index} variants={slideUp} custom={index} animate={isInView?"open":"closed"}>{word}</motion.span>
                        </span>
                    })}
                </p>
            </div>
        </div>);
}