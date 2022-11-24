import React from "react";
import { UserContext } from "../context/UserContext";
import userService from "../utils/userService";

export default function useUser() {
  const [state, setState] = React.useContext(UserContext);

  const handleSignupOrLogin = () => {
    async function getAndSetUser() {
      const id = await userService.getUser();
      const userInfo = await userService.getUserInfo();
      const user = { id, ...userInfo };
      console.log(user);
      setState({ user });
    }
    getAndSetUser();
  };

  const handleLogout = () => {
    userService.logout();
    setState({ user: null });
  };

  return {
    user: state.user,
    handleSignupOrLogin,
    handleLogout,
  };
}
