fun main(){
    val numbers= mutableListOf<Int>(1,2,3,4)

    numbers.also {
        println("Print the numbers $it")
        it.remove(1)
        println("Print the numbers $it")
    }
}