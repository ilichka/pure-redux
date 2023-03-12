import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/use-typed-selector.hook";
import {useActions} from "../../hooks/use-actions.hook";

const UserList:FC = () => {
    const {users,loading,error} = useTypedSelector(state=>state.users)
    const dispatch = useDispatch()
    const {fetchUsers} = useActions()

    useEffect(()=>{
        fetchUsers()
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                    <div key={user.id}>{user.name}</div>
                )}
        </div>
    );
};

export default UserList;