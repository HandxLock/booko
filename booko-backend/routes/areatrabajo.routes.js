import { Router } from 'express'
import {obtenerReservaPorDiaController,registrarReserva} from '../src/controllers/reservaController.js'

const router = Router()

router.get("/calendario/:date/:area_id" , obtenerReservaPorDiaController)
router.post("/reserva", registrarReserva)

export default router