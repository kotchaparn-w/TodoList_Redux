export const COMPLETE_TODOLISTS = 'complete_todolists';

export function completeTodoLists(selectedId){
    return{
        type: COMPLETE_TODOLISTS,
        payload: selectedId
    }
}