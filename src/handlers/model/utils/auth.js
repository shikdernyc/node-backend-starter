import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function hashPassword(password) {
  const SALT_ROUNDS = 10;
  try {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    return hash;
  } catch (error) {
    return new Error("Could not hash password");
  }
}

export async function validUserPassword(plainTextPassword, hash) {
  try {
    const valid = await bcrypt.compare(plainTextPassword, hash);
    return valid;
  } catch (error) {
    throw error;
  }
};