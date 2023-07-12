// Parent class
open class Vehicle(private val name: String) {
    open fun wheelCount() {
        println("$name has  wheels")
    }
}

// Child class inheriting from Vehicle
class Car(name: String) : Vehicle(name) {
    override fun wheelCount() {  //this is polymorphism  ,we are overriding a method
                                 // from parent class
        println("Car has 4 wheels")
    }
}

// Child class inheriting from Vehicle
class Bike(name: String) : Vehicle(name) {
    override fun wheelCount() {
        println("Bike has 2 wheels")
    }
}

fun main() {
    val vehicle: Vehicle = Vehicle("Bus") //this is the object of Vehicle class
    vehicle.wheelCount()

    val bmw: Vehicle = Car("BMW") //this is the object of Car class
    bmw.wheelCount()

    val pulsar: Vehicle = Bike("pulsar")  //this is the object of Bike class
    pulsar.wheelCount()
}
