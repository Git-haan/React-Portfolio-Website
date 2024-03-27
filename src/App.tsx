import { useState } from 'react';
import styles from './App.module.scss';
import { Intro } from './components/intro/intro';
import { Navbar } from './components/navbar/navbar';
import { Contact } from './components/contact/contact';
import { Port } from './components/port/port';
import { Quiz } from './components/quiz/quiz';
import { Route, Routes } from 'react-router-dom';


function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Routes>
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/port" element={<Port />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Intro />} />
            </Routes>        
        </div>
    );
}

export default App;
