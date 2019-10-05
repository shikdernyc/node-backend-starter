import mongoose from 'mongoose'
import { DATABASE_URL } from 'config'

mongoose.Promise = global.Promise

export async function connectToDB() {
  try {
    await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  } catch (error) {
    throw error
  }
}