import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./cards.css"

function ZonadetrabajoCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} className='card-img-top'/>
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text className='cardText'>
          {props.text}
        </Card.Text>
        <div className='buttonContainer'>
          <Button variant="primary" className='cardButton'><a href={props.ruta} className="btn btn-primary">Reservar Ahora</a>
          </Button>
        </div>  
      </Card.Body>
    </Card>
  );
}

export default ZonadetrabajoCard;