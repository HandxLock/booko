import React from 'react';
import MyNavbar from '../../components/navbar/Navbar';
import ZonadetrabajoCard from '../../components/cards/Cards';
import "./homepage.css";

const Homepage = () => {
  return (
    <>
      <MyNavbar />
      <div className='cardsContainer'>
      <ZonadetrabajoCard
      titulo="Area de Trabajo"
      text="Descubre nuestras zonas de trabajo, desde oficinas privadas a espacios colaborativos."
      src="\src\assets\images\1.png"
      ruta="/areatrabajo"
      />
      <ZonadetrabajoCard 
      titulo="Primera Necesidad"
      text="Disfruta de nuestros espacios de cocina, baños y descanso."
      src="\src\assets\images\2.png"
      ruta="/primeranecesidad"
      />
      <ZonadetrabajoCard 
      titulo="Recreacion"
      text="Recargate de energia en nuestros entornos: gimnasio, sala de juegos y espacios al aire libre."
      src="\src\assets\images\3.png"
      ruta="/recreacion"
      />
      </div>
    </>
  );
}

export default Homepage;
