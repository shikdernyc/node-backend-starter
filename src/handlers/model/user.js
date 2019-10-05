import { UserSchema } from './schemas'
import { User } from 'models'
import { hashPassword } from './utils/auth'

export async function createUser(userSchema) {
  try {
    await UserSchema.validate(userSchema)
    // console.log(User)
    const hashedPw = await hashPassword(userSchema.password);
    const userData = { ...userSchema, password: hashedPw }
    let dbUser = await User.create(userData)
    return dbUser
  } catch (error) {
    if (error.message == "Validation error") {
      throw new Error(error.errors[0].message);
    }
    throw error
  }
}

export async function findByEmail(email) {
  try {
    const dbUser = await User.findOne({ where: { email } })
    const user = new UserModel(dbUser)
    return user
  } catch (error) {
    throw error
  }
}