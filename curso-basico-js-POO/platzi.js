////////////////////////DEFINICIÓN DE LA CLASE INSTRUCTOR
class Instructor {
  constructor({ name, username, courses = [], email, yearsOfinstruction }) {
    this.name = name;
    this.username = username;
    this.courses = courses;
    this.email = email;
    this.yearsOfinstruction = yearsOfinstruction;
  }
}

const freddyVega = new Instructor({
  name: "Freddy Vega",
  username: "Freddier",
  email: "elgranfreddyv@gmail.com",
  yearsOfinstruction: 12,
  courses: [cursoProgBasica],
});

const diegoDGranda = new Instructor({
  name: "Diego De Granda",
  username: "DDGranda",
  email: "DDGranda7898@gmail.com",
  yearsOfinstruction: 6,
  courses: [cursoDefinitivoHTML, cursoPracticoHTML],
});

///////////////////////////////DEFICION DE CLASE "CLASE"
class Clase {
  constructor({ name, instructor, level }) {
    this.name = name;
    this.instructor = instructor;
    this.level = level;
  }
}

const introProg = new Clase({
  name: "¿Qué es la programación?",
  instructor: freddyVega,
  level: "Basic",
});
const asincroProg = new Clase({
  name: "Asínscronismo en la programación",
  instructor: freddyVega,
  level: "Advanced",
});
const queEsHTML = new Clase({
  name: "¿Qué es HTML",
  instructor: diegoDGranda,
  level: "Basico",
});
const semanticaHTML = new Clase({
  name: "Código semántico",
  instructor: diegoDGranda,
  level: "Advanced",
});
const planteamientoProyecto = new Clase({
  name: "¿Qué vamos a hacer en este curso práctico?",
  instructor: diegoDGranda,
  level: "Basico",
});
const ajusteDeDetalles = new Clase({
  name: "Últimos detalles a nuestro proyecto",
  instructor: diegoDGranda,
  level: "Advanced",
});

////////////////////////DEFINICION DE CLASE COURSE

class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

const cursoProgBasica = new Course({
  name: "Curso de Programación Básica",
  classes: [introProg, asincroProg],
});
const cursoDefinitivoHTML = new Course({
  name: "Curso definitivo de HTML y CSS",
  classes: [queEsHTML, semanticaHTML],
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  classes: [planteamientoProyecto, ajusteDeDetalles],
});

/////////////////////DEFINICION DE CLASE LEARNINGPATH

class LearningPath {
  constructor({
    name,
    courses = [],
    coursesNumber,
    category,
    instructors = [],
    projects = [],
    blogPosts = [],
    blogPostsNumber,
  }) {
    this.name = name;
    this.courses = courses;
    this.coursesNumber = coursesNumber;
    this.category = category;
    this.instructors = instructors;
    this.projects = projects;
    this.blogPosts = blogPosts;
    this.blogPostsNumber = blogPostsNumber;
  }
}

const escuelaDeDesarrolloWeb = new LearningPath({
  name: "Escuela de desarrollo web",
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
  coursesNumber: 102,
  category: "Development and engineering",
  blogPostsNumber: 678,
});

const escuelaDeEmprendimiento = new LearningPath({
  name: "escuela De Emprendimiento",
  coursesNumber: 23,
  category: "Entreprenurship",
  blogPostsNumber: 2,
});

const escuelaDeMatematicas = new LearningPath({
  name: "Escuela de matemáticas",
  coursesNumber: 7,
  category: "Sciences",
  blogPostsNumber: 6,
});

const escuelaDeVideojuegos = new LearningPath({
  name: "Escuela de Videojuegos",
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
  coursesNumber: 17,
  category: "Development and Engineering",
  blogPostsNumber: 32,
});

/////////////////////DEFINICION DE CLASE ESTUDIANTE

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter: twitter,
      instagram: instagram,
      facebook: facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc1",
  email: "juanito20@gmail.com",
  twitter: "fjuandc",
  learningPaths: [escuelaDeDesarrolloWeb, escuelaDeMatematicas],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "Miguelonazo",
  email: "juanito20@gmail.com",
  instagram: "miguelito@gmail.com",
  learningPaths: [escuelaDeEmprendimiento, escuelaDeVideojuegos],
});
