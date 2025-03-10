import express from 'express'

import { createAccount, login } from '../controllers/AuthController.js'


const router = express.Router()

// create account
router.post("/create-account" , createAccount)

router.post("/login" , login)


export default router