
// Factory Function
// function convertColor(r,g,b) {
//     const color = {}

//     color.r = r
//     color.g = g
//     color.b = b

//     color.rgb = function() {
//         const {r, g, b} = this
//         return `rgb(${r}, ${g}, ${b})`
//     }

//     color.hex = function() {
//         const {r, g, b} = this
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//     }

//     return color
// }

// NEW as constructor
// Ini memungkin kan kita menanamkan method function di dalam protoype sesuai dengan semestinya bukan di dalam suatu object seperti contoh sebelumnya

// function Color(r,g,b) {
//     this.r = r
//     this.g = g
//     this.b = b
// };

// Color.prototype.rgb = function () {
//     const {r, g, b} = this
//     return `rgb(${r}, ${g}, ${b})`
// };

// Color.prototype.hex = function () { 
//     const {r, g, b} = this
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// };


// Color.prototype.rgba = function ( a = 1.0) {
//     const {r, g, b} = this
//     return `rgb(${r}, ${g}, ${b}, ${a})`
// }

// object color
// class Color {

//     constructor(r,g,b, name){
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//         this.calcHSL();
//     }
//     // method fungsi didalam suatu object

//     innerRGB() {
//         const {r,g,b} = this;
//         return `${r}, ${g}, ${b}`
//     }
    
//     colorName() {
//         console.log(`The color name is ${this.name}`)
//     }
    
//     rgb() {
//         return (`rgb(${this.innerRGB()})`)
//     }

//     rgba(a=1.0) {
//         return `rgba(${this.innerRGB()}, ${a})`
//     }

//     hex() {
//         const {r,g,b} = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//     }

//     hsl() {
//         const {h, s, l} = this;
//         return `hsl(${h},${s}%,${l}%)`
//     }

//     fullySaturated() {
//         const {h, l}= this;
//         return `hsl(${h},100%,${l}%)`;
//     }

//     opposite() {
//         const {h, s, l} = this;
//         const newHue = (h + 180) % 360;
//         return `hsl(${newHue},${s}%,${l}%)`;
//     }

//     calcHSL() {
//             let { r, g, b } = this;
//             // Make r, g, and b fractions of 1
//             r /= 255;
//             g /= 255;
//             b /= 255;

//             // Find greatest and smallest channel values
//             let cmin = Math.min(r, g, b),
//                 cmax = Math.max(r, g, b),
//                 delta = cmax - cmin,
//                 h = 0,
//                 s = 0,
//                 l = 0;
//             if (delta == 0) h = 0;
//             else if (cmax == r)
//                 // Red is max
//                 h = ((g - b) / delta) % 6;
//             else if (cmax == g)
//                 // Green is max
//                 h = (b - r) / delta + 2;
//             // Blue is max
//             else h = (r - g) / delta + 4;

//             h = Math.round(h * 60);

//             // Make negative hues positive behind 360°
//             if (h < 0) h += 360;
//             // Calculate lightness
//             l = (cmax + cmin) / 2;

//             // Calculate saturation
//             s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//             // Multiply l and s by 100
//             s = +(s * 100).toFixed(1);
//             l = +(l * 100).toFixed(1);
//             this.h = h;
//             this.s = s;
//             this.l = l;
//         }    
// }

// const colorSage = new Color(222, 232, 206, 'Sage')
// const colorOrange = new Color(240, 139, 8, 'Orange')
// const colorBrown = new Color(187, 102, 83, 'Brown')
// console.log(colorSage)
// console.log(colorOrange)
// console.log(colorBrown)
// console.log(colorSage.rgb())
// console.log(colorOrange.hex())
// console.log(colorBrown.rgba())
// console.log(colorSage.hsl())
// // document.body.style.backgroundColor = colorSage.rgb()
// // document.body.style.backgroundColor = colorOrange.hex()
// // document.body.style.backgroundColor = colorBrown.rgba(0.8)
// // document.body.style.backgroundColor = colorSage.hsl()
// // document.body.style.backgroundColor = colorSage.fullySaturated()
// document.body.style.backgroundColor = colorSage.opposite()

// OOP
// class Cat {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `${this.name} sedang makan`
//     }
// }

// const newCat = new Cat('Kiyoo', 4)
// console.log(newCat)
// console.log(newCat.name)
// console.log(newCat.age)
// console.log(newCat.eat())

// class Dog {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `${this.name} sedang makan`
//     }
// }

// const newDog = new Dog('Bolt', 8)
// console.log(newDog)
// console.log(newDog.name)
// console.log(newDog.age)
// console.log(newDog.eat())

class Pet {
    // Parent class/object yang bersifat menyimpan segala hal yang general yang dimiliki semua child
    constructor(name, age) {
        console.log('parent executed')
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} sedang makan`
    }
}
class Cat extends Pet{
    // Child class/object, memiliki method spesific untuk class itu sendiri dan tidak dimiliki oleh class lain
    // menambahkan atau mengubah nilai baru tanpa mengubah nilai yang dimiliki parent dan mempengaruhi class child lainnya
    constructor(name, age, lives) {
        console.log('child executed')
        super(name, age) // 
        this.lives = lives
    }
    meow() {
        return `Miaaww! ${this.name} Miaaww!`
    }
}

const newCat = new Cat('Kiyoo', 4, 9)
console.log(newCat)
console.log(newCat.name)
console.log(newCat.age)
console.log(newCat.eat())
console.log(newCat.meow())
console.log(newCat.lives)

class Dog extends Pet{ 
    // Child class/object, memiliki method spesific untuk class itu sendiri dan tidak dimiliki oleh class lain
    barking() {
        return `Guk Guk! ${this.name} Guk Guk!`
    }
}

const newDog = new Dog('Bolt', 8)
console.log(newDog)
console.log(newDog.name)
console.log(newDog.age)
console.log(newDog.eat())
console.log(newDog.barking())