import { MathOperator } from "./interface";

class Addition implements MathOperator{
    calculate(numberOne: number, numberTwo: number): number {
        return numberOne+numberTwo
    }
}

class Substraction implements MathOperator{
    calculate(numberOne: number, numberTwo: number): number {
        return numberOne-numberTwo
    }
}

class Multiplication implements MathOperator{
    calculate(numberOne: number, numberTwo: number): number {
        return numberOne*numberTwo
    }
}


export{Addition,Substraction,Multiplication}
