import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.scss';
import cv from '../../assets/images/cv.webp';

export const Skills = () => {
    const skillsRef = useRef(null);

    const frontSkills = [
        { name: 'HTML', level: 60 },
        { name: 'CSS / SCSS', level: 70 },
        { name: 'javascript', level: 60 },
        { name: 'React.js', level: 60 },
    ];
    const backSkills = [
        { name: 'Node.js', level: 50 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 60 },
    ];
    const projectSkills = [
        { name: 'GitHub', level: 60 },
        { name: 'Trello', level: 60 },
        { name: 'Wave / Lighthouse / Heading maps', level: 70 },
    ];
    const designSkills = [
        { name: 'Figma', level: 50 },
        { name: 'Gimp', level: 40 },
    ];

    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),

        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={styles.Container}>
            <div className={styles.Skills} ref={skillsRef}>
                <h2>Competences</h2>
                <h3>Front-End</h3>
                {frontSkills.map(skill => (
                    <div className={styles.skillContainer}>
                        <p>{skill.name}</p>
                        <div className={styles.barContainer}>
                            <div
                                className={`${styles.bar} ${isIntersecting ? styles.filled : ''}`}
                                style={{ '--fill-percent': `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
                <h3>Back-End</h3>
                {backSkills.map(skill => (
                    <div className={styles.skillContainer}>
                        <p>{skill.name}</p>
                        <div className={styles.barContainer}>
                            <div
                                className={`${styles.bar} ${isIntersecting ? styles.filled : ''}`}
                                style={{ '--fill-percent': `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
                <h3>Gestion de Projet</h3>
                {projectSkills.map(skill => (
                    <div className={styles.skillContainer}>
                        <p>{skill.name}</p>
                        <div className={styles.barContainer}>
                            <div
                                className={`${styles.bar} ${isIntersecting ? styles.filled : ''}`}
                                style={{ '--fill-percent': `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
                <h3>Design</h3>
                {designSkills.map(skill => (
                    <div className={styles.skillContainer}>
                        <p>{skill.name}</p>
                        <div className={styles.barContainer}>
                            <div
                                className={`${styles.bar} ${isIntersecting ? styles.filled : ''}`}
                                style={{ '--fill-percent': `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
            <img src={cv} alt="curriculum-vitae Romain Bories"></img>
        </div>
    )
}