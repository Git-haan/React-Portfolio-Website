import classNames from 'classnames';
import styles from './portfolio.module.scss';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import website1 from '../../assets/website-1.jpg';
import website2 from '../../assets/website-2.jpg';
import website3 from '../../assets/website3.jpg';

export interface PortfolioProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Portfolio = ({ className }: PortfolioProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['portfolio-wrapper']}>
                <h3 className={styles.h3}>My Portfolio</h3>
                <motion.svg
                    height="4"
                    viewBox="0 0 204 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.line}
                >
                    <motion.path
                        d="M2 2L202 1.99998"
                        stroke="url(#paint0_linear_6_519)"
                        stroke-width="3"
                        stroke-linecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        className={styles['path-line']}
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_6_519"
                            x1="202.5"
                            y1="2"
                            x2="0.999995"
                            y2="2"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#DC3284" />
                            <stop offset="1" stop-color="#DC3232" />
                        </linearGradient>
                    </defs>
                </motion.svg>
                <p className={styles.p}>
                    I am a CS student with a passion for creating beautiful and functional projects.
                    I have a strong understanding of <span className={styles.span}>Python</span>{' '}
                    with a keen interest for <span className={styles.span}>Typescript</span> and
                    back-end frameworks. I am also an aspiring{' '}
                    <span className={styles.span}>graphic designer</span>, and I am always looking
                    for new ways to grow my knowledge.
                </p>
            </div>
            <p className={styles.p}></p>
            <div className={styles['grid-items']}>
                <motion.div className={styles['grid-item']}>
                    <img src={website2} className={styles['grid-img']} />
                    <div className={styles['visit-portfolio']}>
                        <h4>Python Chat Room App -</h4>
                        <a
                            href="https://github.com/Git-haan/React-Trivia-Game"
                            className={styles.anchor}
                        >
                            Visit{' '}
                        </a>
                    </div>
                </motion.div>

                <motion.div className={styles['grid-item']}>
                    <img src={website3} className={styles['grid-img']} />
                    <div className={styles['visit-portfolio']}>
                        <h4>Python Mini Games -</h4>
                        <a
                            href="https://github.com/Git-haan/python_mini_games/tree/main"
                            className={styles.anchor}
                        >
                            Visit{' '}
                        </a>
                    </div>
                </motion.div>

                <motion.div className={styles['grid-item']}>
                    <img src={website1} className={styles['grid-img']} />
                    <div className={styles['visit-portfolio']}>
                        <h4>React Trivia App -</h4>
                        <a
                            href="https://github.com/Git-haan/Tkinter-Chat-App"
                            className={styles.anchor}
                        >
                            Visit{' '}
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/ishaan-r-05-/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={styles['social-svg']}
                    >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                </a>
                <a href="https://github.com/Git-haan/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={styles['social-svg']}
                    >
                        <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(1.5)"/>
                    </svg>
                </a>
                <a href="https://www.youtube.com/@fyrremc6673">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={styles['social-svg']}
                    >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                    </svg>
                </a>

            </div>
        </div>
    );
};
