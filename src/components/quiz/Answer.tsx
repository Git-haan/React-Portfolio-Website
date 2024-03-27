import Answer_module from './Answer.module.scss';
import Classnames from 'classnames';
type Props = {
    onPress: () => void;
    test: string;
    color?: string;
    disabled?: boolean;
};

// Displays the answer choices with style tag
function Answer(props: Props) {
    const style = props.color ? { color: props.color } : {};

    return (
        <button
            onClick={props.onPress}
            disabled={props.disabled}
            className={Classnames(Answer_module.answer, Answer_module['answer-opp'])}
        >
            <span style={style}>{props.test}</span>
        </button>
    );
}

export default Answer;
