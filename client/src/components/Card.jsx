import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Card.css';

function Card({id, flags, name, continent}) {
    return (
        <Link to={`/countries/${id}`}>
            <div className='divCard'>
                <h2 className='name'>{name}</h2>
                <img className='flag' src={flags} alt={name} />
                <h3 className='continent'>{continent}</h3>
            </div>
        </Link>
    )
}

export default Card;
