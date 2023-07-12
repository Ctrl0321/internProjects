class Person{
    var name:String="Aathiq"
    var age :Int=22
}

fun main(){
    val person=Person()
    with(person){
        println(this.name)
        println(this.age)
    }
}