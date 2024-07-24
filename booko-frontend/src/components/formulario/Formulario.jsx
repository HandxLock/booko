import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './formulario.css';
import MyNavbar from '../navbar/Navbar';
import recibirFecha from '../../../service/fechaService'
// import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Formulario({ formType }) {
  // Estado para la fecha
  const [date, setDate] = useState('');
  // Estado para el tipo de formulario
  const [formNumber, setFormNumber] = useState('');
  // const navigate = useNavigate();

  

  useEffect(() => {
    switch (formType) {
      case 'areadetrabajo':
        setFormNumber(1);
        break;
      case 'primeranecesidad':
        setFormNumber(2);
        break;
      case 'recreacion':
        setFormNumber(3);
        break;
      default:
        setFormNumber(0);
        break;
    }
  }, [formType]);

  // Manejar cambios en el campo de fecha
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();// Prevenir el comportamiento por defecto del formulario
    try {
        await recibirFecha(date, formNumber)
        // navigate('/areadetrabajo/fecha')

    } catch (error) {
        console.log(error)
    }


   
  };

  const renderFormContent = () => {
    switch (formType) {
      case 'areadetrabajo':
        return <p>Formulario para Área de Trabajo</p>;
      case 'primeranecesidad':
        return <p>Formulario para Primera Necesidad</p>;
      case 'recreacion':
        return <p>Formulario para Recreación</p>;
      default:
        return <p>Formulario genérico</p>;
    }
  };

  return (
    <div>
      <MyNavbar />
      <div className='formulario-container'>
        <div className='formulario'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <div className='calendario'>
                <label htmlFor="start">Fecha de Reserva:</label>
                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value={date}
                  onChange={handleDateChange}
                  min="2024-01-08"
                  max="2025-01-01"
                />
              </div>            
            </Form.Group>

            {renderFormContent()}

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;



