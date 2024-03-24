import { createBoard } from '@wixc3/react-board';
import { Portfolio } from '../../../components/portfolio/portfolio';

export default createBoard({
    name: 'Portfolio',
    Board: () => <Portfolio />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1001,
        canvasHeight: 1255,
        windowHeight: 1214,
    },
});
