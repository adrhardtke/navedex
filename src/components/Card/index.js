import React from 'react';
import { Link } from 'react-router-dom'

// Icons
import { FaTrash } from 'react-icons/fa'
import { MdModeEdit } from 'react-icons/md'
import { AiOutlineEye } from 'react-icons/ai'

// Assets & Styles
import { CardContent, Image } from './styles';

function Card({imageUrl, name, naverId, skill, onDelete, onOpen}) {
    return (
        <CardContent>
            <Image src={imageUrl} className="image" />
            <h2>{name}</h2>
            <p>{skill}</p>
            <div className="buttons">
                <Link to={`/edit/${naverId}`}>
                    <MdModeEdit size={24} color="#212121" />
                </Link>

                <button type="button" onClick={onDelete}>
                    <FaTrash size={24} color="#212121" />
                </button>
                <button type="button" onClick={onOpen}>
                    <AiOutlineEye size={24} color="#212121" />
                </button>

            </div>
        </CardContent>
    )
}

export default Card;