import joi from 'joi';

export const userSchema = joi.object({
  email: joi.string().max(255).min(1).email().required(),
  password: joi.string().min(8).max(16).required(),
});
