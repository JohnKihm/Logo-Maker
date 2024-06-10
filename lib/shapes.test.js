const { Circle, Square, Triangle } = require('./shapes.js');

describe('Circle', () => {
    it('should return a string that would construct a circle in svg', () => {
        const shape = new Circle('green');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    })
});

describe('Square', () => {
    it('should return a string that would construct a square in svg', () => {
        const shape = new Square;
        shape.setColor('#F75590');
        expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="#F75590" />');
    })
});

describe('Triangle', () => {
    it('should return a string that would construct a triangle in svg', () => {
        const shape = new Triangle;
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});