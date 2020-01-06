// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge'

const name = 'Agneto';

const element = <h1>Hello {name}!!!!!</h1>;

const element2 = React.createElement('h1', {}, `Hola, soy ${name}`);

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge />, container);
