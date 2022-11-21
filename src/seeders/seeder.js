const db = require("../utils/database");
const initModels = require("../models/initModels");

const Users = require("./users.models");
const Categories = require("./categories.models");
const Courses = require("./courses.models");
const Videos = require("./videos.models");
const UsersCourses = require("./usersCourses.models");
const CatCourses = require("./catCourses.models");

/*const Address = require("../models/addresses.models");
const Tasks = require("../models/tasks.models");
const TaskCategories = require("../models/tasksCategories.models");
*/

// arreglos con la información que se va a plantar
initModels();

const users = [
  { firstname: "Paola", lastname: "Torres", email: "pao@gmail.com", password: "1234facil"},
  { firstname: "Tatiana", lastname: "guerrero", email: "taty@gmail.com", password: "otra433"},
  { firstname: "Ian", lastname: "Rosas", email: "ian@gmail.com", password: "871profe"},
];

const categories = [
    { name: "tecnologia" },
    { name: "cocina" },
    { name: "belleza" },
    { name: "trabajo" },
    { name: "deporte" }
  ];

const instructor = [
    {userId: 3},
    {userId: 1}
];

db.sync({ force: true }).then(async () => {
  console.log("Iniciando plantación");

  users.forEach((user) => Users.create(user));

  setTimeout(() => {
    addresses.forEach((address) => Address.create(address));
  }, 100);
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 200);
  setTimeout(() => {
    tasks.forEach((task) => Tasks.create(task));
  }, 300);
  setTimeout(() => {
    tc.forEach((t) => TaskCategories.create(t));
  }, 400);
});