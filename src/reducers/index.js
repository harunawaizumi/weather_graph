import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;


// axios return promise here 3:00