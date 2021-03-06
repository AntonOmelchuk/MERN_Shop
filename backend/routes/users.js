import { Router } from 'express'
import { authUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/users.js'
import { protect } from '../middleware/auth.js '

const router = Router()

router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/:id').get(protect, getUserProfile)
router.route('/profile').put(protect, updateUserProfile)

export default router
