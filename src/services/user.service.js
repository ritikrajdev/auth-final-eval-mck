import { NotFoundError } from '../../errors.js';
import db from '../models/index.js';
import { hashPassword } from '../utils/hash.js';

export async function createUser(email, password) {
  const hashedPassword = hashPassword(password);
  const user = await db.User.create({
    email,
    password: hashedPassword,
  });
  delete user.dataValues.password;
  return user.dataValues;
}

export async function getUserByEmailAndPassword(
  email,
  password
) {
  const hashedPassword = hashPassword(password);
  const user = await db.User.findOne({
    where: { email, password: hashedPassword },
  });
  if (user === null) {
    throw new NotFoundError(
      'user with these credentials does not exist'
    );
  }
  return user.dataValues;
}
