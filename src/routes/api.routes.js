import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';
import * as userController from '../controllers/user.controller.js';
import { generateValidationMiddleware } from '../middlewares/schemaValidator.js';
import { tokenSchema } from '../schemas/token.schema.js';
import { userSchema } from '../schemas/user.schema.js';

const router = Router();

router.post(
  '/users',
  generateValidationMiddleware(userSchema),
  userController.createUser
);

router.post(
  '/login',
  generateValidationMiddleware(userSchema),
  authController.login
);

router.post(
  '/token/validate',
  generateValidationMiddleware(tokenSchema),
  authController.validateToken
);

export default router;
