import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userActions";
const UserContainer = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const { loading, data, error } = userData;
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <h1>Loading...</h1>
      ) : userData && data && data.length ? (
        data.map((user, index) => <p key={user.index}>{user.name}</p>)
      ) : (
        ""
      )}
    </div>
  );
};

export default UserContainer;
