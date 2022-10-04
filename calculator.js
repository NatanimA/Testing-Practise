class Calculator {
    constructor(numOne,numTwo){
        this.numOne=numOne
        this.numTwo=numTwo
    }

   add(){
    return this.numOne+ this.numTwo
   }

   subtract(){
    return this.numOne - this.numTwo
   }

   multiply (){
    return this.numOne * this.numTwo
   }

   divide(){
    if(this.num > this.numTwo){
        return this.numOne / this.numTwo
    }
    return this.numTwo/this.numOne
    
   }
}

const calc = new Calculator(10,15)

module.exports = Calculator