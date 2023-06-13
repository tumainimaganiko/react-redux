import { useSelector } from "react-redux"

export const Users = () => {
    const {users, isLoading, error } = useSelector(state => state.users)
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