import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {

    return (
        <div onClick={props.click} className="char">
            <p>{props.letra}</p>
        </div>
    );
}

export default charComponent;