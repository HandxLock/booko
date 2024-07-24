import  { nuevaReserva, obtenerReservaPorDia } from '../models/reservaModel.js'


const obtenerReservaPorDiaController = async (req, res) => {
  try {
    const {date,area_id } = req.params;
    console.log(area_id)
    console.log(date)
    const reservasDia = await obtenerReservaPorDia(date,area_id)
    res.json(reservasDia) 
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}


const registrarReserva = async (req, res) => {
  const { area_id, user_id, start_time, end_time } = req.body;

  try {
    // Verifica si el área ya está reservada en el rango de tiempo solicitado
    const existeReserva = await pool.query(
      `SELECT * FROM Reservations WHERE area_id = $1 AND (
          (start_time < $3 AND end_time > $2) OR
          (start_time >= $2 AND start_time < $3)
      )`,
      [area_id, start_time, end_time]
    );
    console.log(existeReserva)

    if (existeReserva.rows.length > 0) {
      return res.status(400).json({ error: 'El área ya está reservada en el rango de tiempo solicitado' });
    }

    const nuevaReservaa = await nuevaReserva(area_id, user_id, start_time, end_time);
    res.json(nuevaReservaa);

  } catch (error) {
    res.status(500).json({ error: 'Error al hacer la reserva' });
  }
};
export { obtenerReservaPorDiaController, registrarReserva}