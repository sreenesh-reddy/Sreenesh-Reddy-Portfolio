// 'use client';
// import styles from './style.module.scss'
// import { useState, useEffect, useRef } from 'react';
// import Project from './components/project';
// import { motion } from 'framer-motion';
// import gsap from 'gsap';
// import Image from 'next/image';
// import Rounded from '../../common/RoundedButton';
// import { Margarine } from 'next/font/google';

// const projects = [
//   {
//     title: "Personal finance",
//     href:"/projects",
//     src: "c2montreal.png",
//     core:"ReactJS",
//     color: "#000000"
//   },
//   // {
//   //   title: "E-Commerce",
//   //   href:"/projects/personalfinance",
//   //   src: "officestudio.png",
//   //   core:"NextJs",
//   //   color: "#8C8C8C"
//   // },
//   {
//     title: "File sharing",
//     href:"/projects",
//     src: "locomotive.png",
//     core:"Django",
//     color: "#EFE8D3"
//   },
//   {
//     title: "Fitness Portfolio",
//     href:"/projects",
//     core:"NextJs",
//     src: "silencio.png",
//     color: "#706D63"
//   }
// ]

// const scaleAnimation = {
//     initial: {scale: 0, x:"-50%", y:"-50%"},
//     enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
//     closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
// }

// export default function Projects() {

//   const [modal, setModal] = useState({active: false, index: 0})
//   const { active, index } = modal;
//   const modalContainer = useRef(null);
//   const cursor = useRef(null);
//   const cursorLabel = useRef(null);

//   let xMoveContainer = useRef(null);
//   let yMoveContainer = useRef(null);
//   let xMoveCursor = useRef(null);
//   let yMoveCursor = useRef(null);
//   let xMoveCursorLabel = useRef(null);
//   let yMoveCursorLabel = useRef(null);

//   useEffect( () => {
//     //Move Container
//     xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
//     yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
//     //Move cursor
//     xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
//     yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
//     //Move cursor label
//     xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
//     yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
//   }, [])

//   const moveItems = (x, y) => {
//     xMoveContainer.current(x)
//     yMoveContainer.current(y)
//     xMoveCursor.current(x)
//     yMoveCursor.current(y)
//     xMoveCursorLabel.current(x)
//     yMoveCursorLabel.current(y)
//   }
//   const manageModal = (active, index, x, y) => {
//     moveItems(x, y)
//     setModal({active, index})
//   }

//   return (
//   <main onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
//     <div className={styles.body}>
//     <h2 className={styles.project}>Projects</h2>
//       {
//         projects.map( (project, index) => {
//           return <Project index={index} title={project.title} href={project.href} key={index} core={project.core}/>
//         })
//       }
//     </div>
//     <Rounded>
//       <p><a href="projects" style={{textDecoration:"none", color:"black"}}>show more</a></p>
//     </Rounded>
//   </main>
//   )
// }


// components/Projects.js
"use client"
import React from 'react';
import styles from './style.module.scss';
import { useRef, useEffect,useState } from 'react';


const projects = [
  {
    title: "Personal finance tool",
    description: "Design & Development",
    year: 2024,
    imageUrl: "/expensetracker.png",
    webUrl:"https://personalfinance-lilac.vercel.app/",
  },
  {
    title: "Fitness Trainer Web app",
    description: "Design & Development",
    year: 2024,
    imageUrl: "/fitnessport.png",
    webUrl:"https://vinay-fitness-trainer-portfolio.vercel.app/",
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
    <div className={styles.container}>
    <h1 style={{width:"100vw", textAlign:"center", fontSize:"100px", fontWeight:"300"}}>Projects</h1>

      <div data-scroll data-scroll-speed={0.1} className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.imageContainer}>
            <img src={project.imageUrl} alt={project.title} className={styles.image} />
            </div>
            <a href={project.webUrl} target='_new'><h3>{project.title}</h3></a>
            <p>{project.description}</p>
            <span>{project.year}</span>
          </div>
        ))}
      </div>
    </div>
  </>);
};

export default Projects;

