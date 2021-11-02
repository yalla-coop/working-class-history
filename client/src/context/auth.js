import { createContext, useState, useContext } from 'react';

const initialUserState = {
  id: null,
  email: '',
  fullName: '',
};

const AuthContext = createContext({
  user: initialUserState,
  setUser: () => {},
  logout: () => {},
});

const getUserInfoFromStorage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.id) {
    return user;
  } else {
    return initialUserState;
  }
};

const storeUserInfoIntoStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const clearUserInfoIntoStorage = (user) => {
  localStorage.removeItem('user');
};

const AuthProvider = (props) => {
  const [user, setUser] = useState(getUserInfoFromStorage);

  const _setUser = (data) => {
    // set User in local storage
    storeUserInfoIntoStorage(data);
    // set user in state
    setUser(data);
  };

  const logout = async () => {
    clearUserInfoIntoStorage();
    setUser(initialUserState);
  };

  const value = {
    user,
    setUser: _setUser,
    logout,
  };

  return <AuthContext.Provider value={value} {...props} />;
};

const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
};

export { AuthProvider, useAuth };
export default AuthContext;
