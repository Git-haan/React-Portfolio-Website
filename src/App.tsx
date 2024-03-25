import { useState } from 'react';
import styles from './App.module.scss';
import { Intro } from './components/intro/intro';
import { Navbar } from './components/navbar/navbar';
import { Contact } from './components/contact/contact';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Intro />} />
            </Routes>        
        </div>
    );
}

export default App;
