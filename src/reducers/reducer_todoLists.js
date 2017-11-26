import { ADD_TODOLISTS } from '../actions/add_todoLists';


export default function todoLists(state = [], action) {

    console.log('this is a state', state);
    // assign id to each list to keep track 
    let newId =  state.length;
    
    switch (action.type) {

        case ADD_TODOLISTS:  
            return [...state, {id : newId + 1, note: action.payload}];
        default:
            return state;
    }
}