

const { Circle, Square, Triangle } = require("./shapes.js")


describe( "Triangle" ,()=>{
    test("check for the code", () => {
        const shape = new Triangle();
        const chosenColor = "blue"
        shape.setColor(chosenColor);
        expect(shape.getShape()).toEqual(`<polygon points="50 10, 90 90, 10 90" fill="${chosenColor}" />`);
    })
    

})


describe( "Square" ,()=>{
test("check for the code", () => {
    const squareShape = new Square();
    const chosenColor = "blue"
    squareShape.setColor(chosenColor);
    expect(squareShape.getShape()).toEqual(`<rect x="0" y="0" height="100%" width="100%" fill="${chosenColor}" />`);
})
})


describe( "Circle" ,()=>{
test("check for the code", () => {
    const circleShape = new Circle();
    const chosenColor = "blue"
    circleShape.setColor(chosenColor);
    expect(circleShape.getShape()).toEqual(`<circle cx="50" cy="50" r="40" fill="${chosenColor}" />`);
})

});