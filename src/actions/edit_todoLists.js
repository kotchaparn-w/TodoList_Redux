import * as moment from 'moment';
export const EDIT_TODOLISTS = 'edit_todoLists';
// taking note as an agument that passes by dispatch in Card container
export function editTodoLists(Id, note){
    
        // assign date and pass to payload
        const newDate = moment().format('LLLL');
    
        return{
            type: EDIT_TODOLISTS,
            payload: {
                Id, note, newDate
            }
        }
    }