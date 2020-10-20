import { Router } from 'express'
import { authUser, getUserProfile } from '../controllers/users.js'
import { protect } from '../middleware/auth.js '

const router = Router()

router.route('/login').post(authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
