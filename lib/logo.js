const { Circle, Square, Triangle } = require('./shapes.js');

function createLogo(text, textColor, shape, shapeColor) {
    let logoShape;

    switch (shape) {
        case 'circle':
            logoShape = new Circle(shapeColor);
            break;
        case 'square':
            logoShape = new Square(shapeColor);
            break;
        case 'triangle':
            logoShape = new Triangle(shapeColor);
    }

    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 ${logoShape.render()}

 <text x="150" y="125" font-size="50" font-family="Lucida Console" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;
}

module.exports = createLogo;
