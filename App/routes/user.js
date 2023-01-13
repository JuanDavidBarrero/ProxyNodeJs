import {Router} from "express";
import { DeleteUsuario, postUsuario, PutUsuario, usuariosGet } from "../controllers/user.js";

const router =  Router();

router.get('/', usuariosGet);
router.post('/', postUsuario);
router.put('/:id', PutUsuario);
router.delete('/:id', DeleteUsuario);

export default router;