import * as userService from '../services/user.service.js';

export async function createUser(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await userService.createUser(
      email,
      password
    );
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}
