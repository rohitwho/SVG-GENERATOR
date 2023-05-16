
class Shapes {
    constructor(color) {


        this.color = "";


    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shapes {

    getShape() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`
    }

}
class Square extends Shapes {


    getShape() {
        return `<rect x="0" y="0" height="100%" width="100%" fill="${this.color}" />`

    }
}

class Triangle extends Shapes {

    getShape() {

        return `<polygon points="50 10, 90 90, 10 90" fill="${this.color}" />`
    }


}

module.exports = { Circle, Square, Triangle };


