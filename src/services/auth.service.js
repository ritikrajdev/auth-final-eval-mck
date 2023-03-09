import jwt from 'jsonwebtoken';
import {
  EXPIRATION_TIME_IN_SECONDS,
  JWT_SECRET,
} from '../../config.js';
import redisCliet from '../utils/redisClient.js';
import { getUserByEmailAndPassword } from './user.service.js';

export async function login(email, password) {
  const user = await getUserByEmailAndPassword(
    email,
    password
  );
  const token = jwt.sign(user, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: EXPIRATION_TIME_IN_SECONDS,
  });

  await redisCliet.set(token, 1, {
    EX: EXPIRATION_TIME_IN_SECONDS,
  });

  return token;
}

export async function validateToken(token) {
  let responseData = {
    isValidToken: false,
  };
  try {
    const exists = await redisCliet.get(token);
    if (!exists) {
      return responseData;
    }

    const verifiedPayload = jwt.verify(token, JWT_SECRET);
    responseData.isValidToken = true;
    responseData = { ...responseData, ...verifiedPayload };
    return responseData;
  } catch (err) {
    return responseData;
  }
}
