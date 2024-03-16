import React from 'react';

import './FAQSection.scss';
import { FAQ } from '../01-atoms/FAQ';

export const FAQSection = (props) => {
    let renderedQuestions = [];
    props.questions.forEach((question) => {
        renderedQuestions.push((<FAQ question={question.question} answer={question.answer} />))
    });

    return (
        <section className="faq-section">
            <h3 className="faq-section-title">{props.title}</h3>

            {renderedQuestions}
        </section>
    );
}