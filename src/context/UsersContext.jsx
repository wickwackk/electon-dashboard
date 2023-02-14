import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const UsersContext = createContext();

export function useUsers() {
  return useContext(UsersContext);
}

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:2020/users").then((res) => setUsers(res.data));
  }, [isChanged]);
  return (
    <UsersContext.Provider
      value={{
        users: users,
        setUsers: setUsers,
        isChanged: isChanged,
        setIsChanged: setIsChanged,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
