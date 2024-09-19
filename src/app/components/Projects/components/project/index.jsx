'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title,href,core,manageModal}) {

    return (
        <div className={styles.project}>
            <h2><a href={href}>{title}</a></h2>
            <p>{core}</p>
        </div>
    )
}
