import React from 'react';
import { FaTrash } from 'react-icons/fa'
import { MdModeEdit } from 'react-icons/md'

import { CardContent, Image } from './styles';

function Card({imageUrl, name, skill}) {
    return (
        <CardContent>
            <Image src={imageUrl} className="image" />
            <h2>{name}</h2>
            <p>{skill}</p>
            <div className="buttons">
                <button type="button">
                    <MdModeEdit size={24} color="#212121" />
                </button>
                <button type="button">
                    <FaTrash size={24} color="#212121" />
                </button>
            </div>
        </CardContent>
    )
}

export default Card;