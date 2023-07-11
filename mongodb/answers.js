conn = new Mongo();
db = conn.getDB("hsenid");
db.createCollection("employee");
db.createCollection("department");
db.createCollection("faction");
db.createCollection("sub");
printjson(
  "Count of people are working at HMS are ",
  db.employee.find().count()
);
printjson(
  "Count of people are working at ENG are ",
  db.employee.find({ department_id: "2" }).count()
);
printjson(
  "Count of people are working at ENG and working pn API sbu ",
  db.employee
    .find({
      $and: [{ department_id: "2" }, { sbu_id: "2" }],
    })
    .count()
);