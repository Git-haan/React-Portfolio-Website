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
                    <img src={website3} className={styles['grid-img']} />
                    <div className={styles['visit-portfolio']}>
                        <h4>React Trivia Game</h4>
                        <a
                            href="https://github.com/Git-haan/python_mini_games/tree/main"
                            className={styles.anchor}
                        >
                            Visit{' '}
                        </a>
                    </div>
                </motion.div>

                <motion.div className={styles['grid-item']}>
                    <img src={website2} className={styles['grid-img']} />
                    <div className={styles['visit-portfolio']}>
                        <h4>Python Chat Room App</h4>
                        <a
                            href="https://github.com/Git-haan/React-Trivia-Game"
                            className={styles.anchor}
                        >
                            Visit{' '}
                        </a>
                    </div>
                </motion.div>

                <motion.div className={styles['grid-item']}>
                    <img src={website1} className={styles['grid-img']} />
                    <div className={styles['visit-portfolio']}>
                        <h4>Python Mini-Games Repository</h4>
                        <a
                            href="https://github.com/Git-haan/Tkinter-Chat-App"
                            className={styles.anchor}
                        >
                            Visit{' '}
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className={styles.socials} />
        </div>
    );
};
