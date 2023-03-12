import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer, UsersActionCreators} from './users'
import {todosReducer, TodosActionCreators} from './todos'

export const rootReducer = combineReducers({
    users: userReducer,
    todos: todosReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default {
    ...UsersActionCreators,
    ...TodosActionCreators
}