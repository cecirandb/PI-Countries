import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountry } from "../redux/actions/actions.js";
import Cards from './Cards.jsx'
import Nav from './Nav.jsx'
import Paginado from './Paginado.jsx';
import './styles/Home.css';
// import Loading from "./Loading/Loading.jsx";

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector(s => s.countries);

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(9);

    let lastCountrieInPage = currentPage * countriesPerPage;
    let firstCountrieInPage = lastCountrieInPage - countriesPerPage;

    let currentCountryItems = countries?.slice(firstCountrieInPage, lastCountrieInPage);

    function pagination(pagNumber) {
        setCurrentPage(pagNumber);
    }

    useEffect(() => {
        dispatch(getCountry())
    }, [dispatch])

    return (
        <>
            <Nav/>
                <div className="divHome">
                    <Paginado countriesPerPage={countriesPerPage} allConutries={countries.length} paginado={pagination}/>
                    <Cards className='cardss' countries={currentCountryItems}/>
                </div>
        </>
    )
}

export default Home;