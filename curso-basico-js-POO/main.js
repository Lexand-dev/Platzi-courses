// de esta forma creamos un objeto literal en JavaScript y lo almacenamos en la constante natalia. El objeto literal es un objeto que se crea directamente en el código. No es necesario crear una función constructora para crearlo.
const natalia = {
  name: "Natalia",
  points: 0,
  cursos: ["JavaScript", "React", "Angular", "Vue", "Node"],
  aprobarCurso(nuevoCurso) {
    this.cursos.push(nuevoCurso);
  },
};

// Prototipos Por medio de la palabra reservada new, creamos un nuevo objeto a partir de la función constructora Student que hemos creado. El objeto que se crea se almacena en la constante juan.

function student(name, points, cursos) {
  this.name = name;
  this.points = points;
  this.cursos = cursos;
}

const juan = new student("Juan", 5, [
  "JavaScript",
  "React",
  "Angular",
  "Vue",
  "Node",
]);

student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursos.push(nuevoCurso);
};

// Prototipos con clases En JavaScript, las clases son funciones. Por lo tanto, podemos agregar métodos a las clases de la misma manera que lo hacemos con las funciones. Para agregar un método a una clase, debemos agregarlo al prototipo de la clase.
class Student2 {
  constructor({ name, cursosAprobados = [], age, email }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}
const miguelito = new Student2({
  name: "Miguel",
  age: 28,
  email: "miguelito@platzi.com",
});
