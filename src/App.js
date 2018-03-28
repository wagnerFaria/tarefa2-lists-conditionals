import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    qtdLetras: 0,
    texto: '',
    textoDoInput: ''
  }

  deleteLetterHandler = (indice) => {
    let texto = [...this.state.textoDoInput];
    texto.splice(indice, 1);
    this.setState({
      textoDoInput: texto.join('')
    });
  }

  qtdLetrasHandler = (event) => {
    const palavra = event.target.value;
    
    const numeroLetras = [...palavra].length;
    this.setState({
      qtdLetras: numeroLetras
    });

    if(this.state.qtdLetras <= 4){
      this.setState({
        texto: 'Text too short'
      });
    } else {
      this.setState({
        texto: 'Text long enought'
      });
    }

    this.setState({
      textoDoInput: event.target.value
    });
  }

  render() {
    let letras = '';

    letras = [...this.state.textoDoInput].map((quebrado, index) => {
      return <CharComponent click={this.deleteLetterHandler.bind(this, index)} letra={quebrado} />
    });
    return (
      <div className="App">
        <input onChange={(event) => this.qtdLetrasHandler(event)} type="text" value={this.state.textoDoInput}/>
        <p>Numero de Letras: {this.state.qtdLetras}</p>
        <ValidationComponent texto={this.state.texto}/>
        {letras}
      </div>
    );
  }
}

export default App;
