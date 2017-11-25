import { ADD_TODOLISTS } from '../actions/add_todoLists';


export default function todoLists(state = [], action) {
    state = [
        {id: 1, note: 'asdfg'},
        {id: 2, note: 'jkl;'}
    ]
    console.log('call action ',  action);
    switch (action.type) {
        case ADD_TODOLISTS:
        return [...state, {id : 3, note: action.payload}]      
    }
    return state;
}