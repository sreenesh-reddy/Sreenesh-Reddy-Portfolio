import styles from './style.module.scss'
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from '../animation';


export default function Education() {
    const phrase1 = "I am a final year undergraduate student pursuing a Bachelor of Technology degree in Computer Science with a specialization in Artificial Intelligence and Machine Learning (AIML) at Chaitanya Bharathi Institute of Technology, Gandipet. I have consistently demonstrated strong academic performance."
    const phrase2 = "Prior to my undergraduate studies, I completed a diploma in Computer Science Engineering at Quli Qutub Shah Government Polytechnic College, Hyderabad. This program provided me with a solid understanding of computer science principles and practical skills."
    const phrase3 = "My earlier education includes schooling at G. Narayanamma High School up to the 10th grade."
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <motion.span variants={opacity} animate={isInView ? "open" : "closed"}>
                Education
                </motion.span>
            </div>
            <div ref={description} className={styles.body}>
                <div className={styles.inBody}>
                    <p>
                        {phrase1.split(" ").map((word, index) => {
                            return <span index={index} className={styles.mask}>
                                <motion.span animate={isInView ? "open" : "closed"} variants={slideUp} key={index} custom={index}>{word}</motion.span></span>
                        })}
                    </p>
                    <motion.p variants={opacity} animate={isInView ? "open" : "closed"} style={{ justifyContent: "center", display: "flex", flexDirection: "column", gap: "30px" }}>
                        <img src="/cbitlogo.png" className={styles.logo}/>
                        <span>2022 - Present</span>
                        <span>8.7 CGPA</span>
                    </motion.p>
                </div>
                <br /> <br />
                <div className={styles.inBody}>
                    
                    <p>
                        {phrase2.split(" ").map((word, index) => {
                            return <span className={styles.mask} index={index}>
                                <motion.span key={index} variants={slideUp} custom={index} animate={isInView ? "open" : "closed"}>{word}</motion.span>
                            </span>
                        })}
                    </p>
                    <motion.p variants={opacity} animate={isInView ? "open" : "closed"} style={{ justifyContent: "center", display: "flex", flexDirection: "column", gap: "30px" }}>
                    <img src="/qqgptlogo.png" className={styles.logo}/>
                        <span>2019 - 2022</span>
                        <span>9.4 CGPA</span>
                    </motion.p>
                </div>

                <br /> <br />
                <div className={styles.inBody}>
                    <p>
                        {phrase3.split(" ").map((word, index) => {
                            return <span index={index} className={styles.mask}>
                                <motion.span key={index} variants={slideUp} custom={index} animate={isInView ? "open" : "closed"}>{word}</motion.span>
                            </span>
                        })}
                    </p>
                </div>
            </div>
        </div>);
}