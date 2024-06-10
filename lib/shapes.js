class Shape {
    constructor(color) {
        this.color = color;
        this.textCenterValues = 'y="120" font-size="60"';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `fill="${this.color}"`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" ${super.render()} />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="70" y="20" width="160" height="160" ${super.render()} />`
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
        this.textCenterValues = 'y="135" font-size="55"';
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" ${super.render()} />`
    }
}

module.exports = { Circle, Square, Triangle };