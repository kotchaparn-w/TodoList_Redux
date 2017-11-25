export const ADD_TODOLISTS = 'add_todoLists';

export function addTodoLists(list){

    return{
        type: ADD_TODOLISTS,
        payload: list
    }
}