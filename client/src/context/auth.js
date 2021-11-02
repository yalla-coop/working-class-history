import { createContext, useState, useContext, useEffect } from 'react';
import { login } from '../api-calls/User';

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
  if (user?.id) {
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

  useEffect(() => {
    const getUserInfo = async () => {
      const user = await getUserInfoFromStorage();
      if (user?.Approved) {
        const { data } = await login({
          PIN: user.pin,
          email: user.email,
        });
        if (data?.results[0]?.id) {
          _setUser(user);
        } else {
          clearUserInfoIntoStorage();
          setUser(initialUserState);
        }
      } else {
        clearUserInfoIntoStorage();
        setUser(initialUserState);
      }
    };

    getUserInfo();
  }, []);

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
