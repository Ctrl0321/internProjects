class Aathiq {
    var qualification : String = "null"

    fun getQualification() {
        print(qualification)
    }
}
fun main() {
    var  firstQualification = Aathiq()
    firstQualification.qualification = "Computer Scientist"
    //a1.printMySkills()

    var  secondQualification = Aathiq()
    secondQualification.qualification= "data scientist"
    //a2.printMySkills()

    var  totalQualification = Aathiq()
    totalQualification.qualification = firstQualification.addQualification(secondQualification)
    totalQualification.getQualification()
}
fun Aathiq.addQualification(user:Aathiq):String{
    var a4 = Aathiq()
    a4.qualification = this.qualification + " and " +user.qualification
    return a4.qualification
}