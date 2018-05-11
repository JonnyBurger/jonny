import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const size = 80;

const name = 'JONYBURGER';
let position = 0;

context.fillStyle = "#333333"
context.font = `${size}px "Arial Black"`;
context.textAlign="center"; 

const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillText(name[position++ % name.length], 32, size- 18);
    const link = document.getElementById('favicon');
    link.href = canvas.toDataURL('image/png');
    document.head.appendChild(link);
};
draw()
setInterval(draw, 1000);
