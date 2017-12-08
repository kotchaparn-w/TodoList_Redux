import * as moment from 'moment';
export const EDIT_TODOLISTS = 'edit_todoLists';
// taking note as an agument that passes by dispatch in Card container
export function editTodoLists(id, note){
    
    console.log('This is called from editTodoLists action creator ',id, note);
        // assign date and pass to payload
        const newDate = moment().format('LLLL');
    
        return{
            type: EDIT_TODOLISTS,
            payload: {
                id, note, newDate
            }
        }
    }