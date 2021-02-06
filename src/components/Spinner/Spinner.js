import React, { useCallback, useEffect, useRef } from 'react';
import './Spinner.scss';
import Pokemon1 from './5IPv.gif';
import Pokemon2 from './5Q0v.gif';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Spinner = ({home}) => {
    const spinner = useRef(null);
    
    const setRandomSpinner = useCallback(() => {
        const images = [Pokemon1, Pokemon2];

        return images[getRandomInt(0, images.length - 1)]
    }, []);

    useEffect(() => {
        spinner.current.src = setRandomSpinner();
    }, [setRandomSpinner])

    return (
        <div className={home ? "spinner spinner--home" : "spinner spinner--pokemon"}>
            <img className="spinner__img img" alt="spinner" ref={spinner} />
            <p className="spinner__text">loading...</p>
        </div>
    )
}

export default Spinner;