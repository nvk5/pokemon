import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { hideMenu } from '../../redux/actions';

const AdditionalPage = ({ hideMenu }) => {

    useEffect(() => hideMenu(), [hideMenu]);

    return (
        <section>
            <h1>Additional Page Content</h1>
        </section>
    )
}

const mapDispatchToProps = { hideMenu };

export default connect(null, mapDispatchToProps)(AdditionalPage);