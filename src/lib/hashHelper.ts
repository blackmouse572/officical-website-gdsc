import * as bcrypt from 'bcrypt';

export const hashPassword = (password: string, salt: string): string => {
  return bcrypt.hashSync(password, salt);
};

export const genSalt = (round?: number): string => {
  return bcrypt.genSaltSync(round);
};

export const isPasswordValid = (password: string, hash: string): boolean => {
  return bcrypt.compareSync(password, hash);
};
