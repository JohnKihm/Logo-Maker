class Shape {
    constructor(color) {
        this.color = color
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `fill="${this.color}"`;
    }
}

class Circle extends Shape {}

class Square extends Shape {}

class Triangle extends Shape {}

module.exports = Shape, Circle, Square, Triangle;