import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './404.scss';

const NonExistentPage = () => {
    useEffect(() => {
        document.title = '404 - Page does not exists'
    })

    const { goBack } = useHistory();

    return (
        <div className="non-existent-page">
            <div className="non-existent-page__text">
                <h1>404</h1>
                <p>page not found</p>
                <button className="non-existent-page__back" onClick={goBack}>Go back</button>
            </div>
        </div>
    )
}

export default NonExistentPage;