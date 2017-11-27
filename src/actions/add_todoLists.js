import * as moment from 'moment';

export const ADD_TODOLISTS = 'add_todoLists';
export function addTodoLists(list){

    // assign date and pass to payload
    const date = moment().format('LLLL');

    return{
        type: ADD_TODOLISTS,
        payload: {
            list, date
        }
    }
}