import { createStore, combineReducers} from 'redux';
import Cart from '../reducer/cart';
import Infor from '../reducer/infor'

const rootReducer = combineReducers({
    Infor: Infor,
    Cart: Cart
})
export default createStore(rootReducer)