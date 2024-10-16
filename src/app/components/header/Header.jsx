'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav/Nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';

export default function Header() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect(() => {
        if (isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0.2,
                end: window.innerHeight * 0.5,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)) }
            }
        })
    }, [])

    return (
        <>

            <div className={styles.HeaderSmall}>
                <div className={styles.headerButtonContainer}>
                    <Rounded onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    </Rounded>
                </div>
                <AnimatePresence mode="wait">
                    {isActive && <Nav />}
                </AnimatePresence>
            </div>

            <div className={styles.HeaderMedium}>
                <div ref={header} className={styles.header}>
                    <div className={styles.logo}>
                        <p className={styles.copyright}>©</p>
                        <div className={styles.name}>
                            <p className={styles.codeBy}>Code by Sreenesh Reddy</p>
                        </div>
                    </div>
                    <div className={styles.nav}>
                        <Magnetic><a href="..">
                            <div className={styles.el}>
                                Home
                                <div className={styles.indicator}></div>
                            </div>
                        </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="/projects">
                                <div className={styles.el}>
                                    Projects
                                    <div className={styles.indicator}></div>
                                </div>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#about">
                                <div className={styles.el}>
                                    About
                                    <div className={styles.indicator}></div>
                                </div>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="/contact">
                                <div className={styles.el}>
                                    Contact
                                    <div className={styles.indicator}></div>
                                </div>
                            </a>
                        </Magnetic>
                    </div>
                </div>
                <div ref={button} className={styles.headerButtonContainer}>
                    <Rounded onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    </Rounded>
                </div>
                <AnimatePresence mode="wait">
                    {isActive && <Nav />}
                </AnimatePresence>
            </div>
        </>
    )
}