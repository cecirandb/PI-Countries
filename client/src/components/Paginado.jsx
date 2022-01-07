import React from "react";
import './styles/Paginado.css';

export default function Paginado({ countriesPerPage, allConutries, paginado }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allConutries/countriesPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <nav className='navpag'>
            <ul className="paginado">
                { pageNumbers && pageNumbers.map(num => (
                    <span className="num" key={num}>
                    <a onClick={() => paginado(num)}>{num}</a>
                    </span>
                ))}
            </ul>
        </nav>
    )
}
