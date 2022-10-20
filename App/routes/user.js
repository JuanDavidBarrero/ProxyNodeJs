import {Router} from "express";
import { usuariosGet } from "../controllers/user.js";

const router =  Router();

router.get('/', usuariosGet);

export default router;