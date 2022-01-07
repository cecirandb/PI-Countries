import { POST_ACTIVITY, LOADING, ORDER_POPULATION, ORDER_NAME, GET_ACTIVITY, GET_COUNTRY, GET_COUNTRY_DETAIL, CLEAR_COUNTRY_DETAILS, COUNTRY_NAME, FILTER_CONTINENT, FILTER_ACTIVITY, RESET_FILTERS } from "../actions/actionsTypes.js";

const initialState = {
    countries: [],
    countries2: [],
    loading: false,
    activities: [],
    countryDetail: {}
}
  
const rootReducer = (state = initialState, { type, payload }) => {
    switch(type) {
  
        case GET_COUNTRY:
            return {
                ...state,
                countries: payload,
                countries2: payload
            };

        case GET_ACTIVITY:
            return {
                ...state,
                activities: payload
            }

        case LOADING:
            return {
                ...state,
                loading: payload
            }
  
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: payload
            }
  
        case CLEAR_COUNTRY_DETAILS:
            return {
                ...state,
                countryDetail: {}
            }

        case POST_ACTIVITY:
            return {
                ...state
            }

        case COUNTRY_NAME:
            return {
                ...state,
                countries: payload
            }

        case FILTER_CONTINENT:
            const filterContinent = state.countries2.filter(c => c.continent.includes(payload));
            return {
                ...state,
                countries: payload === "all"? state.countries2 : filterContinent
            }

        case FILTER_ACTIVITY:
            const activitiesFilter = state.countries.filter(c => c.activities && c.activities.map(a => a.name).includes(payload))
      return {
        ...state,
        countries2: payload === "all" ? state.countries : activitiesFilter
      }

        case ORDER_NAME:
            if (payload === 'A-Z') {
            return {
            ...state,
            countries: [...state.countries2.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)]
            }   
            } else if (payload === 'Z-A') {
            return {
            ...state,
            countries: [...state.countries2.sort((a, b) => b.name > a.name ? 1 : b.name < a.name ? -1 : 0)]
            }
        }

        case ORDER_POPULATION: 
            if (payload === 'More')
            return {
            ...state,
            countries: [...state.countries2].sort((a, b) => a.population > b.population ? 1 : -1)
            }
            return {
            ...state,
            countries: [...state.countries2].sort((a, b) => a.population > b.population ? -1 : 1)
            }

        case RESET_FILTERS:
            return {
                ...state,
                countries: state.countries
            }
  
        default: return state;
    }
}
  
export default rootReducer;