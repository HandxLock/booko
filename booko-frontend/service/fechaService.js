import axios from './axios'

const recibirFecha = async (date, formNumber) => {
  try {
    const disponibilidad = { date, formNumber }
    console.log(disponibilidad)
    return await axios.post('/calendario/date/formNumber', disponibilidad)
  } catch (error) {
    console.log(error)
  }
}



export default recibirFecha