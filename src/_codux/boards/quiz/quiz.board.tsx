import { createBoard } from '@wixc3/react-board';
import { Quiz } from '../../../components/quiz/quiz';

export default createBoard({
    name: 'Quiz',
    Board: () => <Quiz />,
    isSnippet: true,
});