


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







// const inquirer = require("inquirer");
// const fs = require("fs");
// const { Circle, Square, Triangle } = require("./lib/shapes.js")



// // Prompts to get user Input
// const userInput = [
//   {
//     type: "list",
//     name: "chosenShape",
//     message: "Pick a shape for your SVG :",
//     choices: ["Circle", "Triangle", "Square"]

//   },
//   {
//     type: "input",
//     name: "svgColor",
//     message: "Pick color for your SVG. Now you can also use Hex Codes eg: (#305da6) :",

//   },
//   {
//     type: "input",
//     name: "text",
//     message: "Add Some text in your SVG (only three words) :",

//   },
//   {
//     type: "input",
//     name: "textColor",
//     message: "Pick color for your Text. Now you can also use Hex Codes eg: (#ffffff) :"
//   },

// ]

// // Class Constructor 
// class Getvalue {
//   constructor() {
//     this.text = "";
//     this.shape = "";

//   }

//   getShape() {
//     return `<svg version="1.1"  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape}${this.text}</svg>`
//   }

//   pushText(text, textColor) {

//     return this.text = ` <text x="50%" y="55" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>`
//   }
//   pushShape(shape) {

//     return this.shape = shape.getShape()
//   }
// }

// function writeToFile(fileName, data) {
//   return fs.writeFileSync(fileName, data, (err) => {
//     if (err) throw err;
//   });


// }

// // TODO: Create a function to initialize app
// function generateSvg() {
//   inquirer.prompt(userInput).then(response => {
//     let userText = "";
//     // This Function will check for User text!
//     function checkChars() {
//       if (response.text.length > 3) {
//         console.log("Looks like you have more than 3 characters! Please only use 3 characters.");
//         throw new Error("More than 3 characters detected");
//       }
//       else {
//         userText = response.text;
//       }
//     }

//     checkChars();

  
   
//     let chosenTextColor = response.textColor;
//     let chosenShapeColor = response.svgColor;
//     let chosenShapeType = response["chosenShape"];


//     let newShape;
//     if (chosenShapeType === "Square") {
//       newShape = new Square();
//     } else if (chosenShapeType === "Circle") {
//       newShape = new Circle();
//     } else if (chosenShapeType === "Triangle") {
//       newShape = new Triangle();
//     }


//     newShape.setColor(chosenShapeColor);

//     var updateInfo = new Getvalue();

//     updateInfo.pushText(userText, chosenTextColor);

//     updateInfo.pushShape(newShape);

//     let data = "";
//     data = updateInfo.getShape();

   
//     let fileName = "./SVG/Finished SVG.svg"

//     return fs.writeFileSync(fileName, data, (err) => {
//       console.log("Your SVG is ready please check the SVG folder.")
//       if (err) throw err;
//     })



//   });


// }


// // Function call to initialize app
// generateSvg();