import { Router } from "express";
import UserController from "../controllers/User/UserController.js";

const router = Router();

router.get('/users', UserController.index)
router.get('/users/:id', UserController.show)
router.post('/users', UserController.store)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)

export default router
