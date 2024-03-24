import styles from './App.module.scss';
import { Intro } from './components/intro/intro';

function App() {
    return (
        <div className={styles.App}>
            <Intro />
        </div>
    );
}

export default App;
