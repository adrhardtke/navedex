import React from 'react';

import { CardContent } from './styles';

function Card({imageUrl, name, skill}) {
    return (
        <CardContent>
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p>{skill}</p>
            <div className="buttons">
                <button type="button">
                    EDIT
                </button>
                <button type="button">
                    DELETE
                </button>
            </div>
        </CardContent>
    )
}

export default Card;