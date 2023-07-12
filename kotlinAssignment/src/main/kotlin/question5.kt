class Aathiq {
    var qualification : String = "null"

    fun getQualification() {
        print(qualification)
    }
}
fun main(args: Array<String>) {
    var  firstQualification = Aathiq()
    firstQualification.qualification = "Computer Scientist"
    //a1.printMySkills()

    var  secondQualification = Aathiq()
    secondQualification.qualification= "data scientist"
    //a2.printMySkills()

    var  toalQulafication = Aathiq()
    toalQulafication.qualification = firstQualification.addQualification(secondQualification)
    toalQulafication.getQualification()
}
fun Aathiq.addQualification(user:Aathiq):String{
    var a4 = Aathiq()
    a4.qualification = this.qualification + " and " +user.qualification
    return a4.qualification
}