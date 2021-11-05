import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-cart">
          Nome da carta
          <input
            data-testid="name-input"
            type="text"
            name="name-cart"
          />
        </label>

        <label htmlFor="description-cart">
          Descrição da carta
          <input
            data-testid="description-input"
            type="textarea"
            name="description-cart"
          />
        </label>

        <label htmlFor="atribute-one-cart">
          Primeiro atributo
          <input
            data-testid="attr1-input"
            type="number"
            name="atribute-one-cart"
          />
        </label>

        <label htmlFor="atribute-two-cart">
          Segundo atributo
          <input
            data-testid="attr2-input"
            type="number"
            name="atribute-two-cart"
          />
        </label>

        <label htmlFor="atribute-three-cart">
          Terceiro atributo
          <input
            data-testid="attr3-input"
            type="number"
            name="atribute-three-cart"
          />
        </label>

        <label htmlFor="image-cart">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="image-cart"
          />
        </label>

        <label htmlFor="select-cart">
          Raridade da carta
          <select data-testid="rare-input" name="select-cart">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="super-trunfo">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="super-trunfo"
          />
        </label>

        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
