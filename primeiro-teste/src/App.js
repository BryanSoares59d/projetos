import './App.css';
import Evento from './Evento';
import Formulario from './Formulario';

function App() {
  const nome = "Rodrigo "
  return (
    <div className="App">
        <h1>Testando eventos</h1>
        <Evento numero="1"/>
        <Evento numero="2"/>
        <Formulario />
    </div>
  );
}

export default App;
