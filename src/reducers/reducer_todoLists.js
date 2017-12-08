import { ADD_TODOLISTS } from '../actions/add_todoLists';
import { EDIT_TODOLISTS } from '../actions/edit_todoLists';

export default function todoLists(state = [], action) {

    // console.log('this is a state', state, action);
    // assign id to each list to keep track 
    
    switch (action.type) {
        case ADD_TODOLISTS: 
            const { list, date } = action.payload;

            return [...state, {id : state.length, note: list, date}];

        case EDIT_TODOLISTS:
            // console.log("inside edit", state)
            const { id, note, newDate } = action.payload;
           
            // splice that object and add new object
            state.splice(id, 1, {id, note, newDate})

            // return a spliced state
            return[ ...state ];

        default:
            return state;
    }
}