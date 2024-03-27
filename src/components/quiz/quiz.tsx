import classNames from 'classnames';
import styles from './quiz.module.scss';
import QuestionComp from './Question';
import StatBar from './StatBar';
import questions from './questions.json';
import { Questions } from './types';
import { useState } from 'react';
import Reset from './Reset';
import Answer_module from './Answer.module.scss';
import App_module from './App.module.scss';
import { motion } from 'framer-motion';

export interface QuizProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Quiz = ({ className }: QuizProps) => {
    // Grabs questions from the JSON file
    const allQuestions = questions as Questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [correctAnswer, setCorrect] = useState(0);
    const [incorrectAnswer, setIncorrect] = useState(0);

    const [waitingToAdvance, setWaitingToAdvance] = useState(false);

    // Function that handles user submission
    const onSubmit = (correct: boolean) => {
        if (correct) setCorrect(correctAnswer + 1);
        else setIncorrect(incorrectAnswer + 1);

        setWaitingToAdvance(true);
    };

    // Function that advances the question
    const advance = () => {
        setWaitingToAdvance(false);
        setCurrentQuestionIdx(currentQuestionIdx + 1);
    };

    // Function that resets the game
    const reset = () => {
        setCurrentQuestionIdx(0);
        setCorrect(0);
        setIncorrect(0);
        setWaitingToAdvance(false);
    };

    // Handles the reset screen
    if (currentQuestionIdx >= allQuestions.questions.length)
        return (
            <Reset
                totalQuestions={allQuestions.questions.length}
                correctQuestions={correctAnswer}
                onPress={reset}
            />
        );

    return (
        <div className={classNames(styles.root, className)}>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={styles.title}
            >
                Get To Know Me
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


            <StatBar
                currentQuestion={currentQuestionIdx + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswer}
                incorrect={incorrectAnswer}
            />
            <QuestionComp
                question={allQuestions.questions[currentQuestionIdx]}
                onSubmit={onSubmit}
            />

            {waitingToAdvance && (
                <button
                    onClick={advance}
                    className={classNames(Answer_module.answer)}
                >
                    Next Question
                </button>
            )}
        </div>
    );
};
