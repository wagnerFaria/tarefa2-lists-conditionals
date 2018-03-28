import React from 'react';

const validationComponent = (props) => {
    return (
        <div>
            <p onChange={props.change}>{props.texto}</p>
        </div>
    );
}

export default validationComponent;