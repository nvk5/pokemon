import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Search from '../HomePage/Search';
import NavBurger from '../NavBurger';
import './Navigation.scss';

const Navigation = () => {
    const { showMenu } = useSelector(state => state.navigationSm);

    useEffect(() => {
        if (showMenu) {
            document.body.classList.add('menu-open')
        } else {
            document.body.classList.remove('menu-open')
        }
    }, [showMenu])

    return (
        <>
            <NavBurger />
            <nav className="nav">
                <Search sm />
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink className="nav__link link" to={{ pathname: '/' }} exact>Home</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink className="nav__link link" to={{ pathname: '/additional' }}>Additional Page</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;