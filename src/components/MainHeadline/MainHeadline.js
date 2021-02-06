import React from 'react';
import './MainHeadline.scss';

const MainHeadline = ({ headline = 'Choose your pokemon!', home }) => (
    <h1 className={home ? "main-headline main-headline--home" : "main-headline main-headline--pokemon"}>{headline}</h1>
)

export default MainHeadline;