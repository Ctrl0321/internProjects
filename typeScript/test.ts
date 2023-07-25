
import { Animal, Fish, User } from "./interface";
import { combine, getDayName, printDetails ,printPetDetails,reverseArray} from "./Functions";
import { DaysOfWeek } from "./enum";
import { Addition, Multiplication, Substraction } from "./classes";


// const array:number[]=[1,2,3]

//Question1
const user:User={
    name:"Aathiq",
    age:22,
    email:"aaa@gmail.com"
}

//Question2
 const numbers: number[] = [1, 2, 3, 4, 5];

//Question3
 const cat: Animal = {
    name: "meow",
    isAlive: true,
    legs:4
  };
  
  const shark: Fish = {
    name: "shark",
    isAlive: true,
    color: "blue"
  };


  //Question6
  const objectOfAddition=new Addition
  const objectOfSubstraction=new Substraction
  const objectOfMultiplication=new Multiplication




printDetails(user)
reverseArray(numbers)
printPetDetails(cat)
printPetDetails(shark)
console.log(combine("Hi","Aathiq"));
console.log(getDayName(DaysOfWeek.MONDAY));
console.log(objectOfAddition.calculate(5,2));
console.log(objectOfSubstraction.calculate(5,2));
console.log(objectOfMultiplication.calculate(5,2))



