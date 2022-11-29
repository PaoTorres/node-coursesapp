const db = require("../utils/database");
const { Users, Categories, Instructors, Courses, Videos, UsersCourses} = require('../models');
const initModels = require("../models/initModels");

initModels();

// arreglos con la información que se va a plantar
const users = [
  { firstname: "Paola", lastname: "Torres", email: "pao@gmail.com", password: "1234"},
  { firstname: "Tatiana", lastname: "guerrero", email: "taty@gmail.com", password: "1234"},
  { firstname: "Carlos", lastname: "Payares", email: "car@gmail.com", password: "1234"},
  { firstname: "Martha", lastname: "Osorio", email: "martha@yahoo.com", password: "1234"}, //instructor
  { firstname: "Laura", lastname: "Aguirre", email: "lau@gmail.com", password: "1234"},
  { firstname: "Ian", lastname: "Rosas", email: "ian@gmail.com", password: "1234"}, //instructor
  { firstname: "Liseth", lastname: "Herrera", email: "liseth@gmail.com", password: "1234"},//instructor
  { firstname: "Cristian", lastname: "Martinez", email: "cmartinez@gmail.com", password: "1234"},
  { firstname: "Sonia", lastname: "Castro", email: "Sonia@gmail.com", password: "1234"},
  { firstname: "Juan", lastname: "Velez", email: "juancho@gmail.com", password: "1234"},
  { firstname: "Julies", lastname: "Torres", email: "tjul@hotmail.com", password: "1234"},
];

const categories = [
    { name: "tecnologia" },
    { name: "cocina" },
    { name: "belleza" },
    { name: "trabajo" }
  ];

const instructors = [
  {userId: 4},
  {userId: 6},
  {userId: 7}
];

const courses =[
  {title:"Nodejs" , description:"Curso basico de node js", instructorId:2, categoryId:1},
  {title:"Reactjs", description:"Curso de react", instructorId:2, categoryId:1},
  {title:"Cocina internacional" , description:"Curso de cocina internacional, conoce los sabores del mundo.", instructorId:1, categoryId:2},
  {title:"SGSST" , description:"Curso de seguridad y salud en el trabajo.", instructorId:1, categoryId:4},
  {title:"Automaquillaje" , description:"Maquillaje basico de día y de fiesta.", instructorId:3, categoryId:3}
];

const videos = [
{ title:"Aprende Node.js y Express - Curso desde Cero", url:"https://www.youtube.com/watch?v=1hpc70_OoAg", courseId:1},
{ title:"Bcryptjs - Cómo hacer hashing de una password", url:"https://www.youtube.com/watch?v=2qZfnjOIMmA&t=219s", courseId:1},
{ title:"REACT consumir API usando POST con AXIOS FACIL", url:"https://www.youtube.com/watch?v=UXAQUGbDJZw", courseId:2},
{ title:"¿Qué es React.js y cómo funciona?", url:"https://www.youtube.com/watch?v=lWQ69WX7-hA", courseId:2},
{ title:"Chow Mein con pollo y brocoli. Comida China", url:"https://www.youtube.com/watch?v=egm5gpmbclU", courseId:3},
{ title:"Receta paella valenciana auténtica", url:"https://www.youtube.com/watch?v=zrSyyNugKYo", courseId:3},
{ title:"Normatividad sobre Seguridad y Salud en el Trabajo", url:"https://www.youtube.com/watch?v=dnsaZQlF378", courseId:4},
{ title:"Concepto de seguridad y salud en el trabajo", url:"https://www.youtube.com/watch?v=y6jhr7QLNug", courseId:4},
{ title:"Maquillaje en tonos cálidos", url:"https://www.youtube.com/watch?v=hMrSeJ4qAGQ", courseId:5}
];


const usersCourses = [
  {userId:1, courseId:1},
  {userId:1, courseId:2},
  {userId:1, courseId:3},
  {userId:2, courseId:1},
  {userId:2, courseId:2},
  {userId:3, courseId:4},
  {userId:5, courseId:4},
  {userId:8, courseId:2},
  {userId:8, courseId:2},
  {userId:9, courseId:5},
  {userId:10, courseId:1},
  {userId:11, courseId:5},
];

db.sync({ force: true }).then(() => {
  console.log("Iniciando plantación");

  users.forEach(async (item) => await Users.create(item));

  setTimeout(() => {
    categories.forEach(async (item) => await Categories.create(item));
  }, 100);

  setTimeout(() => {
    instructors.forEach(async (item) => await Instructors.create(item));
  }, 300);

  setTimeout(() => {
    courses.forEach(async (item) => await Courses.create(item));
  }, 500);

  setTimeout(() => {
    videos.forEach(async (item) => await Videos.create(item));
  }, 700);

  setTimeout(() => {
    usersCourses.forEach(async (item) =>await UsersCourses.create(item));
  }, 900);

});