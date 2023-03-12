export interface TodosState {
    todos: Todo[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export interface Todo {
    title: string;
    id: number
}

export enum TodosActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODOS_PAGE = 'SET_TODOS_PAGE',
}

export interface FetchTodosAction {
    type: TodosActionTypes.FETCH_TODOS
}

export interface FetchTodosSuccessAction {
    type: TodosActionTypes.FETCH_TODOS_SUCCESS,
    payload: Todo[]
}

export interface FetchTodosErrorAction {
    type: TodosActionTypes.FETCH_TODOS_ERROR,
    payload: string;
}

export interface SetTodosPage {
    type: TodosActionTypes.SET_TODOS_PAGE,
    payload: number
}

export type TodosAction = FetchTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction | SetTodosPage