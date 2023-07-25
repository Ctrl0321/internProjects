interface  User{
    name:string,
    age:number,
    email:string
}

interface Animal{
    name:string,
    isAlive:boolean,
    legs:number




}
interface Fish{
    name:string,
    isAlive:boolean,
    color:string,   
}

interface MathOperator{
    calculate(numberOne:number,numberTwo:number):number
}



export {User,Animal,Fish,MathOperator}