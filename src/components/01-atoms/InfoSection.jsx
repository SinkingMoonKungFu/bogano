import React from 'react';

import "./InfoSection.scss";

export const InfoSection = (props) => {
    console.log("sidebar: ", props.sidebar);
    return (
        <section className={props.sidebar ? "infoSection withSidebar" : "infoSection noSidebar"}>
            <div className="textContent">
                {props.content}
                <img className="textContent-image" src={props.mainImage} alt={`${props.title} Image`}></img>
                {props.children}
            </div>
            { props.sidebar }
        </section>
    );
}
