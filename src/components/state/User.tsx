import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // using type assertion for USER Would NEVER NULL after this component mounted
  const [user, setUser] = useState({} as AuthUser); // type assertion
  const handleLogin = () => {
    setUser({ name: 'Viem', email: 'tve@acm.com' });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
