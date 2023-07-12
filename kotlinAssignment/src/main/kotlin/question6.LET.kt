fun main(){
    var name:String?=null;

    name?.let {
        println(it.length)
        println(it.reversed())
    }
}