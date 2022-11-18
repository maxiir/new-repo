import { Router } from "express";
import controller from '../controller/controller.js'

const router = Router()

router.post('/api/newuser', controller.newUser)

export default router;