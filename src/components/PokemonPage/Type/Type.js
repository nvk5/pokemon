import React from 'react';
import useNoData from '../../customHooks/useNoData';
import './Type.scss';

const View = ({ data }) => (
    data.map((item, index) => (
        <li className="type__item pokemon__extra-list-item" key={index}>{item}</li>
    ))
)

const Type = ({ data = [] }) => (
    <div className="type">
        <h3 className="type__headline pokemon__details-headline">Type</h3>
        <ul className="type__list pokemon__extra-list">
            {useNoData(data, <View data={data} />)}
        </ul>
    </div>
)

export default Type;