class Admin{
    var name:String="Aathiq"
    var age :Int=22
}

fun main(){
    val person:Admin?=null
   person?.run {
       println(this.name)
       println(this.age)
   }

}