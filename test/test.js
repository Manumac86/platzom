//If we are going to create a test for any function, 
//then we need to make sure that the function by itself, 
//separate from everything around, should do what it is intended to do, 
//not more, not less and mock rest of things which are not under test. 
//And that’s basic principle of unit test.


//Mocha is a JavaScript Test Framework.
//Runs on Node.js and Browser



const expect = require('chai').expect
const platzom = require('..').default

// var assert = require('assert');
// describe('Basic Mocha String Test', function () {
//  it('should return number of charachters in a string', function () {
//         assert.equal("Hello".length, 4);
//     });
//  it('should return first charachter of the string', function () {
//         assert.equal("Hello".charAt(0), 'H');
//     });
// });

describe ('#platzom', function(){
    //Aqui van los test a correr
    it('Si la palabra termina con "ar", se le quitan esas dos letras', function(){
        const translation = platzom("Programar")
        expect(translation).to.equal("Program")
    })
    it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
        const translation = platzom("Zorro")
        const translation2 = platzom("Zarpar")
        expect(translation).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
    })
    it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function(){
        const translation = platzom("abecedario")
        expect(translation).to.equal("abece-dario")
    })
    it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function(){
        const translation = platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})