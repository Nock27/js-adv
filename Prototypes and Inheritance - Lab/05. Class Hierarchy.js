// class Figure{
//     constructor(){
//         this.units = 'cm';
//     }
//     get area() {
//         return "Not implemented";
//       }
    
//     changeUnits(units) {
//         this.units = units;
//       }
      
//     toString(){
//         return `Figures units: ${this.units}`
//     }
// }
// class Circle extends Figure{
//     constructor(units = "cm",radius){
//       super(units = "cm")
//       this.radius = radius;
//     }
//     get area(){
//         return Math.PI * (this.radius * this.radius);
//     }
//     toString(){
//         return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
//     }
// }
// class Rectangle extends Figure{
//     constructor(units = "cm", width, height){
//         super(units = "cm")
//         this.width = width;
//         this.height = height
//       }
//       get area(){
//           return this.width * this.height;
//       }
//       toString() {
//         return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
//       }
// }
// function createFigureClasses() {
    
//     return {
//       Figure,
//       Circle,
//       Rectangle,
//     };
//   }

// const { Circle, Rectangle } = createFigureClasses();

// let c = new Circle(5);
// console.log(c.area); // 78.53981633974483
// console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
// let r = new Rectangle(3, 4, 'mm');
// console.log(r.area); // 1200
// console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
// r.changeUnits('cm');
// console.log(r.area); // 12