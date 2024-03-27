import { createBoard } from '@wixc3/react-board';
import { Port } from '../../../components/port/port';

export default createBoard({
    name: 'Port',
    Board: () => <Port />,
    isSnippet: true,
});