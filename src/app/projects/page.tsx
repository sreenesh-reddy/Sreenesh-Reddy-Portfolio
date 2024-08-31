// components/Projects.js
"use client"
import React from 'react';
import styles from './style.module.scss';
import { useRef, useEffect,useState } from 'react';
import Landing from './Landing';
import { AnimatePresence } from 'framer-motion';
import Preloader from './Preloader';
import Image from 'next/image';

const projects = [
  {
    title: "Personal finance tool",
    description: "Design & Development",
    year: 2024,
    imageUrl: "/expensetracker.png",
  },
  {
    title: "E-Commerece Web app",
    description: "Design & Development",
    year: 2024,
    imageUrl: "/images/background.jpg",
  },
  // Add more projects as needed
];

const Projects = () => {
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
          }, 20)
      }
    )()
  }, [])
  return (<>
  
  <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
  <Landing/>
    <div className={styles.container}>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.imageContainer}>
            <Image src={project.imageUrl} alt={project.title} className={styles.image} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.year}</span>
          </div>
        ))}
      </div>
    </div>
  </>);
};

export default Projects;
