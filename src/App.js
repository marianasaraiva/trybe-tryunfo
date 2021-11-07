import React from 'react';

import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validacao = this.validacao.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      // // hasTrunfo= false,
      isSaveButtonDisabled: true,
      // onInputChange=() => 'a',
      // onSaveButtonClick={() => 'a'},
    };
  }

  onInputChange(event) {
    event.preventDefault();
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    }, this.validacao);
  }

  validacao() {
    const valueMax = 90;
    const valueMin = 0;
    const sumTotal = 210;
    // const text = '';
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if ((cardName.length
      && cardDescription.length
      && cardImage.length
      && cardRare.length !== 0)
      && cardAttr1 >= valueMin && cardAttr2 >= valueMin && cardAttr3 >= valueMin
      && cardAttr1 <= valueMax && cardAttr2 <= valueMax && cardAttr3 <= valueMax
      && (sum <= sumTotal)) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  // onSaveButtonClick() {
  //   const {
  //     cardName,
  //     cardDescription,
  //     cardAttr1,
  //     cardAttr2,
  //     cardAttr3,
  //     cardImage,
  //     cardRare,
  //     cardTrunfo,
  //   } = this.state;

  //   this.setState({
  //     isSaveButtonDisabled:
  //     cardName: teste,
  //   });
  // }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo= { false },
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
