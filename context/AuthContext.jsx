import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);

  const login = (email, password, type) => {
    console.log('AuthContext login called with type:', type); 
    setUser({ email });
    setUserType(type);
  };

  const logout = () => {
    console.log('AuthContext logout called'); 
    setUserType(null);
  };

  console.log('AuthContext current userType:', userType);

  return (
    <AuthContext.Provider value={{ user, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}