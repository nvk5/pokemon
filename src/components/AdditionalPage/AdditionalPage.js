import React from 'react';
import useDocumentTitle from '../customHooks/useDocumentTitle';
import useNavigationSm from '../customHooks/useNavigationSm';

const AdditionalPage = () => {
    useNavigationSm();
    useDocumentTitle('Additional Page');

    return (
        <section>
            <h1>Additional Page Content</h1>
        </section>
    )
}

export default AdditionalPage;
