import React from 'react';
import useNoData from '../../customHooks/useNoData';
import './Weaknesses.scss';

const View = ({ data }) => (
    data.map((item, index) => (
        <li className="weaknesses__item pokemon__extra-list-item" key={index}>{item}</li>
    ))
)

const Weaknesses = ({ data = [] }) => (
    <div className="weaknesses">
        <h3 className="weaknesses__headline pokemon__details-headline">Weaknesses</h3>
        <ul className="weaknesses__list pokemon__extra-list">
            {useNoData(data, <View data={data}/>)}
        </ul>
    </div>
)

export default Weaknesses;