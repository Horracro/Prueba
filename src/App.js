import React from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import Tareas from './components/Tareas'

console.log(tasks);

class Hello extends React.Component {
  state = { show: false }
  render() {
    if (this.state.show) {
      return (
        <div id="holi" >
          <h1>{this.props.text}</h1>
          <Shrek burro="Shrek is love, Shrek is life" />
          <button onClick={() => this.setState({ show: false })}>Ocultar contenido</button>
        </div>
      );
    }
    else {
      return (
        <div>Hidden Quote
       <button onClick={() =>  this.setState({ show: true }) }>Mostrar  contenido</button>
        </div>

      );
    }
  }
}
const LogoReact = () => <div><img id="react" src="./logo512.png" alt="shrek" /></div>

function Shrek(burro) {
  return (
    <div>
      <img id="shrk" src="./Shrek.png" alt="correr"></img>
      <br />
      <h1 id="love">{burro.burro}</h1>
      <button onClick={function pres(){ alert(burro.burro);}}>Presiona </button>
    </div>
  );
}

class Mapeo extends React.Component{
  state = {
    tasks:tasks
  }
  render(){
    return(
      <div>
        {this.state.tasks.map(e=><p key={e.id}>
          {e.title}<br/>
          {e.description}<br/>
          {e.done}
        </p>)}
      </div>

    );
  }
}

function App() {
 
  return (
    
    <div className="App">
      <h1 id="love">FRASES DEL CHUEK</h1>
      <Hello text="Los Ogros son como cebollas" subtitle="Shrek es amor" />
      <Hello text="Qué estas haciendo en mi pantano!?" subtitle="BOB ESPONJA" />
      <Hello text="Deveritas Deveritas" />
      <LogoReact />
      <hr/>
      <h1>PARTE 2</h1>
     <Mapeo/>
     <Tareas />
     
    </div>
   
  );
}


export default App;
