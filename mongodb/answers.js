conn = new Mongo();
db = conn.getDB("hsenid");
db.createCollection("employee");
db.createCollection("department");
db.createCollection("faction");
db.createCollection("sub");



db.employee.insertMany([
  {
       "employee_id" :"1",
       "first_name":"Aathiq",
       "last_name":"Ahamed",
       "age":"22",
       "gender":"Male",
       "designation":"Intern",
       "address":"554,washington",
       "email":"aa45@gmail.com",
       "mobile_number":"1234567890",
       "department_id":"2",
       "faction_id":"2",
       "sbu_id":"3",
       "last_modified_date":"2022-08-08"

  },
  {
      "employee_id" :"2",
      "first_name":"Adheeb",
      "last_name":"Azahim",
      "age":"22",
      "gender":"Male",
      "designation":"Intern",
      "address":"554,London",
      "email":"ada45@gmail.com",
      "mobile_number":"1234567890",
      "department_id":"4",
      "faction_id":"3",
      "sbu_id":"5",
      "last_modified_date":"2022-08-08"

 }
 ,
 {
  "employee_id" :"3",
  "first_name":"Azhar",
  "last_name":"Yoosuf",
  "age":"22",
  "gender":"Male",
  "designation":"Intern",
  "address":"554,sydney",
  "email":"ay45@gmail.com",
  "mobile_number":"1234567890",
  "department_id":"2",
  "faction_id":"1",
  "sbu_id":"5",
  "last_modified_date":"2022-08-08"

},
{
  "employee_id" :"4",
  "first_name":"Mujithaba",
  "last_name":"farahi",
  "age":"22",
  "gender":"Male",
  "designation":"Intern",
  "address":"554,Daka",
  "email":"mf45@gmail.com",
  "mobile_number":"1234567890",
  "department_id":"2",
  "faction_id":"2",
  "sbu_id":"3",
  "last_modified_date":"2022-08-08"

},
{
  "employee_id" :"5",
  "first_name":"shabeer",
  "last_name":"Ahamed",
  "age":"22",
  "gender":"Male",
  "designation":"Intern",
  "address":"554,swiss",
  "email":"sa45@gmail.com",
  "mobile_number":"1234567890",
  "department_id":"3",
  "faction_id":"2",
  "sbu_id":"3",
  "last_modified_date":"2022-08-08"

}
,{
  "employee_id" :"6",
  "first_name":"Sandarenu",
  "last_name":"kumar",
  "age":"22",
  "gender":"Male",
  "designation":"Intern",
  "address":"554,swiss",
  "email":"sa45@gmail.com",
  "mobile_number":"1234567890",
  "department_id":"1",
  "faction_id":"2",
  "sbu_id":"3",
  "last_modified_date":"2022-08-08"

}
])

printjson(
  "Number of people are working at HMS are ",
  db.employee.find().count()
);
printjson(
  "Number of people are working at ENG are ",
  db.employee.find({ department_id: "2" }).count()
);
printjson(
  "Number of people are working at ENG and working pn API sbu ",
  db.employee
    .find({
      $and: [{ department_id: "2" }, { sbu_id: "3" }],
    })
    .count()
);
printjson(
  "Working department ID of Sandarenu is ",
  db.employee.findOne({ first_name: "Sandarenu" }).department_id
);

printjson(
  "Number of people are working at ENG and working pn API sbu ",
  db.employee
    .find({
      $and: [{ department_id: "2" }, { sbu_id: "3" }],
    })
    .count()
);
printjson(
  "Number of people are working at ENG and working pn APIGO sbu ",
  db.employee
    .find({
      $and: [{ department_id: "2" }, { sbu_id: "5" }],
    })
    .count()
);
printjson(
  "Count of people are working at IMPL and working pn API sbu ",
  db.employee
    .find({
      $and: [{ department_id: "3" }, { sbu_id: "3" }],
    })
    .count()
);
// printjson(
//   "Sbu list which has more than 15 employees",
//   db.employee
//     .find({
//       $and: [{ department_id: "3" }, { sbu_id: "3" }],
//     })
//     .count()
// );

