import './App.css';
import HelloWorld from './components/Helloworld';
import Frase from './Frase';
import DigaMeuNome from './components/DigaMeunome';



function App() {
  const nome = "Rodrigo "
  return (
    <div className="App">
        <h1>Meu primeiro react</h1>
        <Frase/>
        <HelloWorld/>
        <Frase/>
        <HelloWorld/>
        <DigaMeuNome nome="Bryan"/>
        <DigaMeuNome nome={nome}/>

    </div>
  );
}

export default App;
