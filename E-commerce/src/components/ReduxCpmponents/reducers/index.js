import {combineReducers} from 'redux';
import { IncDecComp } from './IncDecComp';
import { nameChange } from '../actions';

export default combineReducers({
    IncDecComp,
    nameChange
})