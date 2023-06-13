import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export const Users = () => {
    const {users, isLoading, error } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(_ => {},[])
  return (
    <div>
        <p>It is loading {isLoading}</p>
        <p>There is an {error}</p>
        <ul>
            {users.map(item => (
                <li key={item.id}>
                    firstName: {item.lastName} {'  '} 
                    lastName: {item.lastName}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Users;