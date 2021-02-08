import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../redux/actions';
import './NavBurger.scss';

const NavBurger = ({ toggleMenu }) => (
    <button className="nav-burger" aria-label="navigation" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
    </button>
)

const mapDispatchToProps = { toggleMenu };

export default connect(null, mapDispatchToProps)(NavBurger);