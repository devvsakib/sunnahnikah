import { sign, verify } from 'jsonwebtoken';

const secret = 'abc';

export const createToken = (userId) => sign({ userId }, secret, { expiresIn: '1h' });

export const verifyToken = (token) => verify(token, secret);
// utils/auth.js
export const isAuthenticated = () => {
    return true;
  };
  