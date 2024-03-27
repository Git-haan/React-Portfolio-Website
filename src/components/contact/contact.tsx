import classNames from 'classnames';
import styles from './contact.module.scss';
import { useState } from 'react';
import Lottie from 'lottie-react';
import form from '../../assets/form-animation.json';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Contact = ({ className }: ContactProps) => {
    const [query, setQuery] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleParam = () => (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const formSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        });
        const submitForm = await fetch('https://getform.io/f/eapdmdqa', {
            method: 'POST',
            body: formData,
        }).then(() => {
            setQuery({ name: '', email: '', message: '' });
            setSubmitted(true);
        });
    };

    return (
        <div className={classNames(styles.root, className)}>
            {submitted && (
                <div className={styles['animation-wrapper']}>
                    <Lottie
                        animationData={form}
                        loop={false}
                        className={styles['form-animation']}
                    />
                </div>
            )}
            {!submitted && (
                <>
                    <form onSubmit={formSubmit} className={styles.form}>
                        <label className={styles.label}>Your Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={query.name}
                            onChange={handleParam()}
                            className={styles.input}
                        />
                        <label className={styles.label}>Your Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className={classNames('form-control', styles.input)}
                            value={query.email}
                            onChange={handleParam()}
                        />
                        <label className={styles.label}>Share your thoughts</label>
                        <textarea
                            name="message"
                            required
                            className={classNames('form-control', styles.input, styles.input)}
                            value={query.message}
                            onChange={handleParam()}
                        />
                        <button type="submit" className={styles.submit}>
                            SHARE YOUR FEEDBACK
                        </button>
                    </form>

                    <div className={styles['form-div']}>
                        <h2 className={styles['form-title']}>Contact Me</h2>
                        <h4 className={styles['label']}>
                            It is very important for me to keep in touch with
                        </h4>
                        <h4 className={styles['label']}>
                            you, so I am always ready to answer any{' '}
                        </h4>
                        <h4 className={styles['label']}>question that interests you. Shoot!</h4>
                    </div>
                </>
            )}
        </div>
    );
};
