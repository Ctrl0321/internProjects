conn = new Mongo();
db = conn.getDB("hsenid");
db.createCollection("employee");
db.createCollection("department");
db.createCollection("faction");
db.createCollection("sub");

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
  "Working department of Sandarenu is ",
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

