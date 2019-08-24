import React, {Fragment} from 'react';
import { directive } from '@babel/types';

function App() {
  const empleado = {
    nombre: "Juan Pablo",
    trabajo: "Desarrollador Web"
  }




  return (
    <Fragment>
      <h1>{empleado.nombre}</h1>
      <h1>{empleado.trabajo}</h1>
      {2+2}
    </Fragment>
  );
}

export default App;
