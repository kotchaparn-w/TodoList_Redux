export const DELETE_TODOLISTS = 'delete_todolists';

export function deleteTodoLists(selectedId){
    return{
        type: DELETE_TODOLISTS,
        payload: selectedId
    }
}