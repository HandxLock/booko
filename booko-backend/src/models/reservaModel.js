import pool from '../../db/config.js'

const obtenerReservaPorDia = async (date,area_id) => {
  try {
    const query = await pool.query(`SELECT * FROM Reservations WHERE DATE(start_time) = $1 AND area_id = $2`,[date,area_id])
    console.log(query.rows)
    return query.rows
  } catch (error) {
    console.error('Error al obtener reserva dia :', error.message)
  }

}

const nuevaReserva = async (area_id, user_id, start_time, end_time) => {
    try {
        const result = await pool.query(
            `INSERT INTO Reservations (area_id, user_id, start_time, end_time, status)
             VALUES ($1, $2, $3, $4, 'Ocupado') RETURNING *`,
            [area_id, user_id, start_time, end_time]
        );

        return result.rows[0];
    } catch (error) {
        console.error('Error al crear nueva reserva :', error.message);
        throw error;
    }
};
export  { obtenerReservaPorDia, nuevaReserva}