import React from 'react';

import './TitledSubsection.scss';

export const TitledSubsection = (props) => {
    return (
        <section className="subsection">
            <h2 className="subsection-title">{props.title}</h2>
            { props.children }
        </section>
    );
}
