import asyncHandler from 'express-async-handler'
import User from '../models/user.js'
import generateToken from '../utils/generateToken.js'

// @desc  create new user
// @route POST /api/users/
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
    res.status(400)
    throw new Error('User already exists')
  }

  const newUser = await User.create({
    name,
    email,
    password,
  })

  if (newUser) {
    res.status(201).json({})
  }
})

// @desc  Auth user && get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    const { _id, name, email, isAdmin } = user
    res.json({
      _id,
      name,
      email,
      isAdmin,
      token: generateToken(_id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc  Get user profile
// @route GET /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  const { _id, name, email, isAdmin } = req.user

  const user = await User.findById(_id)

  if (user) {
    res.json({
      _id,
      name,
      email,
      isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export { authUser, getUserProfile }
