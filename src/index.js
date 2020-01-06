// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css"
import "./global.css"

// import Badge from './components/Badge'
import BadgeNew from "./pages/BadgeNew";

// const name = 'Agneto';

// const element = <h1>Hello {name}!!!!!</h1>;

// const element2 = React.createElement('h1', {}, `Hola, soy ${name}`);

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(<Badge
//     firstName="Des"
//     lastName="AN"
//     avatarUrl="https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
//     jobTitle="Frontend Engineer"
//     twitter="desagneto23"/>, container);

ReactDOM.render(<BadgeNew />, container);
