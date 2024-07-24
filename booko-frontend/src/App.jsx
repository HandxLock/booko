import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './view/homepage/Homepage';
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Areadetrabajo from './view/areadetrabajo/Areadetrabajo';

function App() {
  
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
        <Route path="/areatrabajo" element={<Areadetrabajo />} />
        <Route path="/primeranecesidad" element={<Primeranecesidad />} />
        <Route path="/recreacion" element={<Recreacion />} />
			</Routes>
		</BrowserRouter>
  )
}

export default App
