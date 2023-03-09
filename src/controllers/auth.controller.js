import * as authService from '../services/auth.service.js';

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
}

export async function validateToken(req, res, next) {
  try {
    const { token } = req.body;
    const tokenData = await authService.validateToken(
      token
    );
    res.status(200).json(tokenData);
  } catch (err) {
    next(err);
  }
}
