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
        case DaysOfWeek.moday:
            return "monday"
        case DaysOfWeek.tuesday:
            return "tuesday"
        case DaysOfWeek.wednesday:
            return "wednesday"   
        case DaysOfWeek.thursday:
            return "Thursday" 
        case DaysOfWeek.friday:
            return "friday"
        case DaysOfWeek.saturday:
            return "saturday"
        case DaysOfWeek.sunday:
            return "sunday"
        default:
            return "Invalid Day"
            
        
    }

}


export{printDetails,reverseArray,printPetDetails,combine,getDayName}