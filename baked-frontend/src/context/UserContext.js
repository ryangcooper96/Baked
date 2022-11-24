import React from "react";
import userService from "../utils/userService";
const initialState = {
  user: {},
};

export const UserContext = React.createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, setState] = React.useState({});

  React.useEffect(() => {
    async function getAndSetUser() {
      const id = await userService.getUser();
      const userInfo = await userService.getUserInfo();
      const user = { id, ...userInfo };
      console.log(user);
      setState({ user });
    }
    getAndSetUser();
  }, []);

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};
