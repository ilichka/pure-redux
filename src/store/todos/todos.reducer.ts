import {TodosAction, TodosActionTypes, TodosState} from "./todos.interface";

const initialState:TodosState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const todosReducer = (state = initialState, action: TodosAction): TodosState => {
    switch (action.type) {
        case TodosActionTypes.FETCH_TODOS:
            return {...state, loading: true}
        case TodosActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodosActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case TodosActionTypes.SET_TODOS_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}