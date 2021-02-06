import React from 'react';
import useNoData from '../../customHooks/useNoData';
import './Strengths.scss';

const View = ({ data }) => (
    data.map((item, index) => (
        <li className="strengths__item pokemon__extra-list-item" key={index}>{item}</li>
    ))
)

const Strengths = ({ data = [] }) => (
    <div className="strengths">
        <h3 className="strengths__headline pokemon__details-headline">Strengths</h3>
        <ul className="strengths__list pokemon__extra-list">
            {useNoData(data, <View data={data}/>)}
        </ul>
    </div>
)

export default Strengths;