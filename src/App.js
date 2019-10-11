import React from 'react';
import './App.css';

/*const App = () => <div>Esto es verdad: <Hello/></div>

class App extends react.Component{
  render(){
    return <div>Esto es verdad: <Hello/></div>
  }
}*/

/* function Hello(props){
  return(
    <div id="holi" >
      <h1>{props.subtitle}</h1>
     {props.text}
    </div>
  ); */
class Hello extends React.Component{
  state={
    show: false
  }
  
  render(){
    if (this.state.show){
    return(
  <div id="holi" >
    <h1>{this.props.subtitle}</h1>
     {this.props.text}
      <button onClick={()=>this.setState({show:false})}>Cambiar estado</button>
  </div>

    );
  }
  else {return(
    <div>NO HAY ELEMENTOS
      <button onClick={()=>this.setState({show: true})}>Cambiar estado</button>
    </div>
     
  );
}
  }
}


function App() {
  return (
   <div className="App">
    HOLA MUNDO: <Hello text="Shrek es vida" subtitle="Shrek es amor"/> 
    <Hello text="Paulo es mi hermano"/> 
    <Hello text=" mi papa no me da dineros" />    
    <img src="./logo192.png"/>
   </div>
  );
}

export default App;
