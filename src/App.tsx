import React from 'react';
import Icons from './components/Icons';
import Hero from './containers/Hero';
import Navbar from './containers/Navbar';
import './styles.css'

const App = () => {
    return (
        <div className="flex flex-col gap-[4rem]">
            <Navbar />
            <Hero />
            <Icons />
        </div>
    )
}

export default App