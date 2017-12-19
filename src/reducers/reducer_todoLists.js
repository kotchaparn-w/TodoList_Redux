import { ADD_TODOLISTS } from '../actions/add_todoLists';
import { EDIT_TODOLISTS } from '../actions/edit_todoLists';
import { DELETE_TODOLISTS } from '../actions/delete_todoLists';
import _ from 'lodash';

// set initial id
let id = 0;
export default function todoLists(state={[id]:{}}, action) {

    switch (action.type) {
        case ADD_TODOLISTS: 
            const { list, date } = action.payload;
            // increment id each time when added new obj
            id++;
            return {...state, [id]: {note: list, date, completed: false}};

        case EDIT_TODOLISTS:

            const { note, newDate } = action.payload;
           
            // splice that object and add new object
            state.splice(id, 1, {id, note, newDate});

            // return a spliced state
            return[ ...state];
        
        case DELETE_TODOLISTS:
            console.log('selected id',action.payload);
            // splice the seleted id (index in array)
            
            console.log('New state inside delete', id);
            // return new state
            return _.mapKeys(_.omit(state, action.payload), (value,key)=>{ return id = 0; key = id++ }  );

        default:
        // if the fist obj is an empty obj return empty state
            if (_.isEmpty(state[0])){
                return(state={});
            } 
            return state;
    }
}