import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/users/usersSlice";

export const Users = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect((_) => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <p>{isLoading}</p>
      <p>{error}</p>
      <ul>
        {users.map((item) => (
          <li key={item.id.value}>
            {item.name.title} {item.name.first} {item.name.last}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
