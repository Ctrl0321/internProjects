import { DaysOfWeek } from "./enum";
import { Animal, Fish, User } from "./interface";

function printDetails(user :User):void{
    console.log(`name: ${user.name}`);
    console.log(`age: ${user.age}`);
    console.log(`email: ${user.email}`);
    
  }


function reverseArray<T>(array: T[]): void {
    console.log(array.reverse()); 
  }

function printPetDetails(pet:Animal|Fish):void{
    console.log(`Name: ${pet.name}`);
    console.log(`isAlive: ${pet.isAlive}`);

    
    if ("legs" in pet) {
      console.log(`Legs: ${pet.legs}`);
    }
    if ("color" in pet) {
        console.log(`Legs: ${pet.color}`);
      }
    
}

function combine<A,B>(a:A,b:B){
    return `${a} ${b}`
}
  
function  getDayName(day:DaysOfWeek):String{
    switch(day){
        case DaysOfWeek.MONDAY:
            return "monday"
        case DaysOfWeek.TUESDAY:
            return "tuesday"
        case DaysOfWeek.WEDNESDAY:
            return "wednesday"   
        case DaysOfWeek.THURSDAY:
            return "Thursday" 
        case DaysOfWeek.FRIDAY:
            return "friday"
        case DaysOfWeek.SATURDAY:
            return "saturday"
        case DaysOfWeek.SUNDAY:
            return "sunday"
        default:
            return "Invalid Day"
            
        
    }

}


export{printDetails,reverseArray,printPetDetails,combine,getDayName}