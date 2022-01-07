import React , { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { CountryName, filterActivity, filterContinent, orderName, resetFilters, orderPopulation, getCountry, getActivity } from '../redux/actions/actions.js'
import img from './img/pin-de-mapa.png';
import './styles/Nav.css'

function Nav() {
    const dispatch = useDispatch();
    const activity = useSelector(state => state.activities)
    const [country, setCountry] = useState("");
    const [, setOrder] = useState('');

    useEffect(() => {
        dispatch(getCountry())
        dispatch(getActivity())
    },[dispatch])

    const handleChange = (e) => {
        e.preventDefault()
        setCountry(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(CountryName(country))
        setCountry('')
    }

    const handleContinentFilter = (e) => {
        dispatch(filterContinent(e.target.value))
        setOrder(e.target.value);
      }
    
      const handleActivityFilter = (e) => {
        dispatch(filterActivity(e.target.value))
        setOrder(e.target.value);
      }
      
      const handleSortName = (e) => {
          e.preventDefault();
          dispatch(orderName(e.target.value));
          setOrder(e.target.value);
      }

      const handleSortPop = (e) => {
          e.preventDefault();
          dispatch(orderPopulation(e.target.value));
          setOrder(e.target.value);
      }

      function handleClick(e) {
        e.preventDefault();
        dispatch(getCountry());
      }
    
      const onClick = (e) => {
        e.preventDefault();
        dispatch(getCountry());
        dispatch(resetFilters())
        resetSelectsFilters();
      }
    
      const resetSelectsFilters = () => {
        document.getElementById('selectPopulation').value = 'defaultValue'
        document.getElementById('selectContinent').value = 'all'
        document.getElementById('selectActivity').value = 'all'
        document.getElementById('selectOrder').value = 'defaultValue'
      }

    return (
        <div className='divNav'>
            <button className='icon' onClick={e => {handleClick(e)}}>
                <img src={img} style={{"height":"30px", "width":"30px"}} alt="img not found" />
            </button>
            <div className='divBtns'>
                <Link className='addactivity' to='/activity'>Add Activity</Link>
            </div>
            <div className='search'>
                <form onSubmit={e => handleSubmit(e)}>
                <input className='inputsearch' type='text' value={country} placeholder='Search Countries...' onChange={e => handleChange(e)} />
                <button className='btnsearch' type="submit" onClick={e => handleSubmit(e)}>Search</button>
                </form>
            </div>
            <div className='filtercontinent'>
                <div>
                    <label className='labelco'>Filter Continent</label>
                    <select id='selectContinent' name="filters" onChange={e => handleContinentFilter(e)}>
                        <option value="all">All</option>
                        <option value="Americas">Americas</option>
                        <option value="Antarctic">Antarctic</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                <div className='filteractivity'>
                    <label className='labelac'>Filter Activity</label>
                    <select id='selectActivity' name="filters" onChange={e => handleActivityFilter(e)}>
                        <option value="all">All</option>
                        { activity ?
                            activity.map(a => {
                                return (
                                    <option key={a.id} value={a.name}>{a.name}</option>
                                )
                            }) :
                            <option disabled>No activities</option> }
                    </select>
                </div>
                <div className='filterorderaz'>
                    <label className='labelor'>Order</label>
                    <select id='selectOrder' name="orders" onChange={e => handleSortName(e)}>
                            <option value="defaultValue">-</option>
                            <option value="A-Z">ASC</option>
                            <option value="Z-A">DESC</option>
                    </select>
                </div>
                <div className='filterpopulation'>
                    <label className='labelpo'>Order Population</label>
                    <select id="selectPopulation" name="population" onChange={e => handleSortPop(e)}>
                            <option value="defaultValue">-</option>
                            <option value="Less">Less</option>
                            <option value="More">More</option>
                    </select>
                </div>
            </div>
            <div className='resetfilters'>
                <button className='btnreset' onClick={onClick}>Reset Filters</button>
            </div>
      </div>
    )
}

export default Nav;
