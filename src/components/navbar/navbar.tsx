import classNames from 'classnames';
import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className, styles.nav)}>
            <Link to={'/'}>
                <h1 className={styles.logo}>Ishaan Reddy</h1>
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link to={'/'} className={styles.links}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to={'/contact'} className={styles.links}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};
