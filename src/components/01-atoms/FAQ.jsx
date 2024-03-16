import React from 'react';

import './FAQ.scss';

export const FAQ = ({...props}) => {
    let renderedQuestionParagraphs = [];
    if (Array.isArray(props.answer)) {
        props.answer.forEach((answer) => {
            if (answer.type && answer.type == "embedded-list") {
                let renderedListElements = [];
                answer.elements.forEach((ele) => {
                    renderedListElements.push((<li>{ele}</li>))
                });
                renderedQuestionParagraphs.push((<ul>{renderedListElements}</ul>));
            } else {
             renderedQuestionParagraphs.push((<p>{answer}</p>));
            }
        });
    } else {
        renderedQuestionParagraphs = [
            (<p dangerouslySetInnerHTML={{__html: props.answer}}></p>)
        ]
    }
    return (
        <div className="faq-question">
            <h4>{props.question}</h4>
            {renderedQuestionParagraphs}
        </div>
    );
};