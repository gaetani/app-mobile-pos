
import { combineReducers } from 'redux';
import routes from './routes'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    routes,
    form:formReducer
});

export default rootReducer;