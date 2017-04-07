import { combineReducers } from 'redux';
import BookReducer from "./reducer_books";


const rootReducer = combineReducers({
//  state: (state = {}) => state
    books: BooksReducer    
});

export default rootReducer;
