import { findByEmail, createUser } from 'handlers/model/user'
import { validUserPassword } from 'handlers/model/utils/auth'
import { MODEL_DNE } from 'variables/errors/model'
import { SECRET_KEY } from 'config'
import jwt from 'jsonwebtoken'

function createToken(user) {
  const token = jwt.sign(
    {
      userId: user.id
    },
    SECRET_KEY
  );
  return token;
}

export async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body
    const user = await findByEmail(email)
    const validPass = await validUserPassword(password, user.password);
    if (validPass) {
      const token = createToken(user);
      return res.status(200).json({
        ...user.toJSON(),
        token
      });
    } else {
      return next({
        status: 401,
        message: "Invalid email/password combinations"
      });
    }
  } catch (error) {
    if (error == MODEL_DNE) {
      return next({ status: 401, message: "Invalid email" })
    }
    console.log(error)
    return next({
      status: 500,
      message: "Unable to login"
    });
  }
}

export async function signupUser(req, res, next) {
  try {
    const user = await createUser(req.body)
    const token = createToken(user);
    return res.status(200).json({
      ...user.toJSON(),
      token
    });
  } catch (error) {
    return next({ status: 400, message: error.message });
  }
}