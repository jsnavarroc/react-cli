// Dependencies 
import { combineReducers } from 'redux';

//Share Reducers
import device from './devicesReducer';



const rootReducers = combineReducers({
    device
})

export default rootReducers;