import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Weaknesses from './Weaknesses';
import Strengths from './Strengths';
import Type from './Type';
import FilteredTypes from './FilteredTypes';

const DetailTypes = ({ data: { types, weaknesses, strengths } }) => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${path}`}>
                <Type data={types} />
                <Weaknesses data={weaknesses} />
                <Strengths data={strengths} />
            </Route>
            <Route path={`${path}/:type`}>
                <FilteredTypes />
            </Route>
        </Switch>
    )
}

export default DetailTypes;