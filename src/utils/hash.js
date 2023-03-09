import crypto from 'crypto';

export function hashPassword(password) {
  // console.log(password);
  const hash = crypto.createHash('sha256');
  return hash.update(password).digest('hex');
}
