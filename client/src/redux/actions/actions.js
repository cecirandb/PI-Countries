import axios from 'axios';
import { LOADING, GET_ACTIVITY, FILTER_CONTINENT, FILTER_ACTIVITY, RESET_FILTERS, GET_COUNTRY, GET_COUNTRY_DETAIL, CLEAR_COUNTRY_DETAILS, COUNTRY_NAME, ORDER_POPULATION, ORDER_NAME } from './actionsTypes.js';
import constantes from '../../constantes.js';

export const getCountry = () => {
    return async (dispatch) => {
      try {
        const countries = await axios.get(constantes.COUNTRY_URL);
        return dispatch({ type: GET_COUNTRY, payload: countries.data });
      } catch (err) { console.error(err) }
    };
  };

export const CountryName = (name) => {
    return async (dispatch) => {
      try {
        var countries = await axios.get(constantes.COUNTRY_NAME + name);
        return dispatch({ type: COUNTRY_NAME, payload: countries.data })
      } catch (err) { console.log(err) }
    }
}

export const getActivity = () => {
  return async (dispatch) => {
    const activities = await axios.get(constantes.ACTIVITY_URL)
    return dispatch({ type: GET_ACTIVITY, payload: activities.data })
  }
}

export const postActivity = (payload) => {
  return async (dispatch) => {
    const newActivity = await axios.post('http://localhost:3001/activity', payload);
    return newActivity;
  }
}

export const getCountryDetails = (id) => {
    return async (dispatch) => {
      try {
        const details = await axios.get(constantes.COUNTRY_DETAILS + id);
        return dispatch({ type: GET_COUNTRY_DETAIL, payload: details.data });
      } catch (err) { console.log(err) }
    }
  }

export const clearCountryDetail = () => {
  return({ type: CLEAR_COUNTRY_DETAILS })
}

export const filterContinent = (payload) => {
  return ({ type: FILTER_CONTINENT, payload })
}

export const filterActivity = (payload) => {
  return ({ type: FILTER_ACTIVITY, payload })
}

export const orderPopulation = (payload) => {
  return ({ type: ORDER_POPULATION, payload })
}

export const orderName = (payload) => {
  return ({ type: ORDER_NAME, payload })
}

export const resetFilters = () => {
  return ({ type: RESET_FILTERS })
}

export const loading = (payload) => {
  return ({ type: LOADING, payload })
}