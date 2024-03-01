import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.scss';

export const Skills = () => {
    const htmlRef = useRef(null);
    const cssRef = useRef(null);
    const jsRef = useRef(null);
    const reactRef = useRef(null);
    const nodeRef = useRef(null);
    const sassRef = useRef(null);
    const optiRef = useRef(null);

    const skills = [
        { name: 'html', level: 90, ref: htmlRef },
        { name: 'css', level: 70, ref: cssRef },
        { name: 'javascript', level: 60, ref: jsRef },
        { name: 'React.js', level: 80, ref: reactRef },
        { name: 'Node.js', level: 60, ref: nodeRef },
        { name: 'Sass', level: 80, ref: sassRef },
        { name: 'optimisation de site', level: 80, ref: optiRef },
    ];

    const [isHTMLIntersecting, setHTMLIntersecting] = useState(false);
    const [isCSSIntersecting, setCSSIntersecting] = useState(false);
    const [isjsIntersecting, setjsIntersecting] = useState(false);
    const [isreactIntersecting, setreactIntersecting] = useState(false);
    const [isnodeIntersecting, setnodeIntersecting] = useState(false);
    const [issassIntersecting, setsassIntersecting] = useState(false);
    const [isoptiIntersecting, setoptiIntersecting] = useState(false);

useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            switch (entry.target) {
                case htmlRef.current:
                    setHTMLIntersecting(entry.isIntersecting);
                    break;
                case cssRef.current:
                    setCSSIntersecting(entry.isIntersecting);
                    break;
                case jsRef.current:
                    setjsIntersecting(entry.isIntersecting);
                    break;
                case reactRef.current:
                    setreactIntersecting(entry.isIntersecting);
                    break;
                case nodeRef.current:
                    setnodeIntersecting(entry.isIntersecting);
                    break;
                case sassRef.current:
                    setsassIntersecting(entry.isIntersecting);
                    break;
                case optiRef.current:
                    setoptiIntersecting(entry.isIntersecting);
                    break;
                default:
                    break;
            }
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }
    );

    if (htmlRef.current) {
        observer.observe(htmlRef.current);
    }
    if (cssRef.current) {
        observer.observe(cssRef.current);
    }
    if (jsRef.current) {
        observer.observe(jsRef.current);
    }
    if (reactRef.current) {
        observer.observe(reactRef.current);
    }
    if (nodeRef.current) {
        observer.observe(nodeRef.current);
    }
    if (sassRef.current) {
        observer.observe(sassRef.current);
    }
    if (optiRef.current) {
        observer.observe(optiRef.current);
    }

    return () => {
        observer.disconnect();
    };
}, []);
    
    const isIntersecting = (ref) => {
        switch (ref) {
            case htmlRef:
                return isHTMLIntersecting;
            case cssRef:
                return isCSSIntersecting;
            case jsRef:
                return isjsIntersecting;
            case reactRef:
                return isreactIntersecting;
            case nodeRef:
                return isnodeIntersecting;
            case sassRef:
                return issassIntersecting;
            case optiRef:
                return isoptiIntersecting;
            default:
                return false;
        }
    };
    
    return (
        <div className={styles.Skills}>
            <h2>Competences</h2>
            {skills.map(skill => (
                <div className={styles.skillContainer}>
                    <p>{skill.name}</p>
                    <div
                        className={`${styles.bar} ${isIntersecting(skill.ref) ? styles.filled : ''}`}
                        ref={skill.ref}
                        style={{ '--fill-percent': skill.level / 100 }}
                    ></div>
                </div>
            ))}
        </div>
    )
}