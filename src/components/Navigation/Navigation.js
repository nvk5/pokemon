import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../HomePage/Search';
import NavBurger from '../NavBurger';
import './Navigation.scss';

const Navigation = ({ showMobMenu }) => {

    useEffect(() => {
        if (showMobMenu) {
            document.body.classList.add('menu-open')
        } else {
            document.body.classList.remove('menu-open')
        }
    }, [showMobMenu])

    return (
        <>
            <NavBurger/>
            <nav className="nav">
                <Search sm/>
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

const mapStateToProps = ({ showMobMenu }) => ({ showMobMenu });


export default connect(mapStateToProps)(Navigation);