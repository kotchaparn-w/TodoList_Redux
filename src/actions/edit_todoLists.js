
// taking note as an agument that passes by dispatch in Card container
export function editTodoLists(note){
    
        // assign date and pass to payload
        const date = moment().format('LLLL');
    
        return{
            type: EDIT_TODOLISTS,
            payload: {
                note, date
            }
        }
    }