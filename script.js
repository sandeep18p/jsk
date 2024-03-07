/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr.filter(employee => employee.profession === "developer");
  developers.map(dev => console.log(dev));
}

function PrintDeveloperbyForEach() {
  const developers = [];
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      developers.push(employee);
    }
  });
  developers.forEach(dev => console.log(dev));
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log("Added employee:", newEmployee);
}

function removeAdmin() {
  arr = arr.filter(employee => employee.profession !== "admin");
  console.log("Array after removing admins:", arr);
}

function concatenateArray() {
  const newArray = [
    { id: 4, name: "emma", age: "22", profession: "designer" },
    { id: 5, name: "peter", age: "25", profession: "manager" },
    { id: 6, name: "lisa", age: "23", profession: "analyst" }
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log("Concatenated array:", concatenatedArray);
}

PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();
