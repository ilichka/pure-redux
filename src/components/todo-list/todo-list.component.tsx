import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/use-typed-selector.hook";
import {useActions} from "../../hooks/use-actions.hook";

const TodoList: FC = () => {
    const {todos,loading,limit,error,page} = useTypedSelector(state => state.todos)
    const {fetchTodos, setTodosPage} = useActions()
    const pages = [1,2,3,4,5]

    useEffect(()=>{
        fetchTodos(page, limit)
    }, [page])

    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {todos.map((todo)=><div>{todo.id} - {todo.title}</div>)}
            <div style={{display: 'flex'}}>
                {pages.map(pageItem=><div onClick={() => setTodosPage(pageItem)} style={{border:pageItem === page ? '2px solid green' : '1px solid gray', padding: 10}}>{pageItem}</div>)}
            </div>
        </div>
    );
};

export default TodoList;