import { Router } from 'express'
const router = Router()
import v1Routes from './v1'

router.use('/v1', v1Routes)

router.route('/').get((req, res, next) => {
  res.status(200).json({ message: "Hello World" })
})

export default router