import classNames from 'classnames';
import styles from './port.module.scss';
import { motion } from 'framer-motion';
import website1 from '../../assets/website-1.jpg';
import website3 from '../../assets/website-3.jpg';

export interface PortProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Port = ({ className }: PortProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['portfolio-wrapper']}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.title}
                >
                    What I Am Great At
                </motion.h2>
            </div>
            <p className={styles.p}></p>
            <div className={styles.skills}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles['social-svg']}
                    viewBox="0 0 128 128"
                >
                    <path d="M 54.918785,9.1927421e-4 C 50.335132,0.02221727 45.957846,0.41313697 42.106285,1.0946693 30.760069,3.0991731 28.700036,7.2947714 28.700035,15.032169 v 10.21875 h 26.8125 v 3.40625 h -26.8125 -10.0625 c -7.792459,0 -14.6157588,4.683717 -16.7499998,13.59375 -2.46181998,10.212966 -2.57101508,16.586023 0,27.25 1.9059283,7.937852 6.4575432,13.593748 14.2499998,13.59375 h 9.21875 v -12.25 c 0,-8.849902 7.657144,-16.656248 16.75,-16.65625 h 26.78125 c 7.454951,0 13.406253,-6.138164 13.40625,-13.625 v -25.53125 c 0,-7.2663386 -6.12998,-12.7247771 -13.40625,-13.9374997 C 64.281548,0.32794397 59.502438,-0.02037903 54.918785,9.1927421e-4 Z m -14.5,8.21875012579 c 2.769547,0 5.03125,2.2986456 5.03125,5.1249996 -2e-6,2.816336 -2.261703,5.09375 -5.03125,5.09375 -2.779476,-1e-6 -5.03125,-2.277415 -5.03125,-5.09375 -10e-7,-2.826353 2.251774,-5.1249996 5.03125,-5.1249996 z" />
                    <path d="m 85.637535,28.657169 v 11.90625 c 0,9.230755 -7.825895,16.999999 -16.75,17 h -26.78125 c -7.335833,0 -13.406249,6.278483 -13.40625,13.625 v 25.531247 c 0,7.266344 6.318588,11.540324 13.40625,13.625004 8.487331,2.49561 16.626237,2.94663 26.78125,0 6.750155,-1.95439 13.406253,-5.88761 13.40625,-13.625004 V 86.500919 h -26.78125 v -3.40625 h 26.78125 13.406254 c 7.792461,0 10.696251,-5.435408 13.406241,-13.59375 2.79933,-8.398886 2.68022,-16.475776 0,-27.25 -1.92578,-7.757441 -5.60387,-13.59375 -13.406241,-13.59375 z m -15.0625,64.65625 c 2.779478,3e-6 5.03125,2.277417 5.03125,5.093747 -2e-6,2.826354 -2.251775,5.125004 -5.03125,5.125004 -2.76955,0 -5.03125,-2.29865 -5.03125,-5.125004 2e-6,-2.81633 2.261697,-5.093747 5.03125,-5.093747 z" />
                </svg>
                <h5 className={styles['skill-title']}>2023 - Present</h5>
                <h4 className={styles['skill-title']}>Python Mastery</h4>
                <p className={styles['skill-text']}>
                    I have been working on the fundementals of Python for a year, creating a variety
                    of projects ranging from algorithms to UI development.
                </p>
            </div>
            <div className={styles.skills}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles['social-svg']}
                    viewBox="0 0 128 128"
                >
                    <path d="M5.562 2H74.437C76.405 2 78 3.595 78 5.562V74.437C78 76.405 76.405 78 74.438 78H5.562C3.595 78 2 76.405 2 74.438V5.562C2 3.595 3.595 2 5.562 2Z"/>
                    <path d="M46.093 61.059V69.387C47.442 70.081 49.038 70.601 50.88 70.948C52.722 71.295 54.664 71.469 56.705 71.469C58.694 71.469 60.584 71.278 62.374 70.897C64.165 70.515 65.734 69.886 67.084 69.01C68.433 68.134 69.501 66.989 70.288 65.575C71.075 64.161 71.468 62.413 71.468 60.331C71.468 58.822 71.243 57.499 70.794 56.362C70.344 55.226 69.696 54.215 68.848 53.33C68.001 52.445 66.984 51.651 65.8 50.949C64.615 50.246 63.279 49.583 61.791 48.958C60.701 48.507 59.724 48.069 58.859 47.644C57.994 47.219 57.259 46.785 56.654 46.343C56.049 45.901 55.582 45.432 55.253 44.938C54.924 44.444 54.76 43.884 54.76 43.259C54.76 42.686 54.907 42.17 55.201 41.711C55.495 41.251 55.91 40.857 56.446 40.527C56.982 40.197 57.639 39.942 58.418 39.759C59.196 39.577 60.061 39.486 61.013 39.486C61.705 39.486 62.436 39.538 63.206 39.642C63.976 39.746 64.75 39.907 65.528 40.123C66.306 40.34 67.063 40.613 67.798 40.943C68.533 41.273 69.212 41.654 69.835 42.088V34.307C68.572 33.821 67.193 33.461 65.697 33.227C64.201 32.993 62.484 32.876 60.547 32.876C58.575 32.876 56.707 33.089 54.943 33.514C53.179 33.939 51.626 34.603 50.286 35.505C48.945 36.407 47.886 37.557 47.108 38.953C46.33 40.35 45.94 42.019 45.94 43.963C45.94 46.444 46.654 48.561 48.081 50.313C49.508 52.065 51.675 53.549 54.581 54.763C55.723 55.231 56.786 55.691 57.772 56.142C58.758 56.593 59.61 57.061 60.328 57.547C61.046 58.033 61.612 58.562 62.027 59.134C62.443 59.707 62.65 60.357 62.65 61.086C62.65 61.624 62.521 62.123 62.261 62.582C62.002 63.042 61.608 63.441 61.08 63.779C60.552 64.117 59.895 64.382 59.108 64.573C58.321 64.764 57.4 64.859 56.345 64.859C54.546 64.859 52.764 64.543 51 63.909C49.233 63.276 47.598 62.326 46.093 61.059ZM32.105 40.329H42.969V33.469H12.688V40.329H23.499V70.875H32.105V40.329Z" fill="white" />
                </svg>
                <h5 className={styles['skill-title']}>2024 - Present</h5>
                <h4 className={styles['skill-title']}>Typescript Mastery</h4>
                <p className={styles['skill-text']}>
                    Exploring the world of Typescript, I have been working on a variety of projects using React and Node.js.
                </p>
            </div>
            <div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.title}
                >
                    Recent Projects
                </motion.h2>
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
                        transition={{ delay: 1 }}
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
                            <stop stop-color="#a9e95d" />
                            <stop offset="1" stop-color="#a9e95d" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>
            <div className={styles['grid-items']}>
                <motion.div className={styles['grid-item']}>
                    <img src={website1} className={styles['grid-img']} />
                    <div className={styles['visit-portfolio']}>
                        <h4>Python Chat Room App</h4>
                        <a
                            href="https://github.com/Git-haan/React-Trivia-Game"
                            className={styles.anchor}
                        >
                            Learn More{' '}
                        </a>
                    </div>
                </motion.div>

                <motion.div className={styles['grid-item']}>
                    <img src={website3} className={styles['grid-img']} />
                    <div className={styles['visit-portfolio']}>
                        <h4>React Trivia App</h4>
                        <a
                            href="https://github.com/Git-haan/Tkinter-Chat-App"
                            className={styles.anchor}
                        >
                            Learn More{' '}
                        </a>
                    </div>
                </motion.div>
            </div>
            <div />
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
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                            transform="scale(1.5)"
                        />
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
