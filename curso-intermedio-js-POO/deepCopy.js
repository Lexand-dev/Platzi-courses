// esta funcion es para hacer una copia profunda de un objeto o array de objetos y evitar que se modifique el objeto original con la funcion Object.seal() o Object.freeze() que es una funcion que no permite modificar el objeto original y tampoco permite agregar nuevas propiedades al objeto original y tampoco permite eliminar propiedades del objeto original y tampoco permite modificar las propiedades de los objetos que estan dentro de un array de objetos y tampoco permite agregar nuevas propiedades a los objetos que estan dentro de un array de objetos.
function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}
// funcion para hacer una copia profunda de un objeto o array de objetos.
function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

/* const juan = deepCopy(studentBase); */
Object.seal(juan);
// juan.name = "Juanito";

//12.Factory pattern y RORO
// Module pattern y namespaces: propiedades privadas en JavaScript con closures y objetos inmutables.

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
  };

  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    readName() {
      return private["_name"];
    },
    changeName(newName) {
      private["_name"] = newName;
    },
  };

  Object.defineProperty(public, "readName", {
    writable: false,
    configurable: false,
  });
  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });

  return public;
}

const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });

//Getter y setter en JavaScript con Object.defineProperty() y Object.defineProperties(). Propiedades privadas en JavaScript con closures y objetos inmutables. Factory pattern y RORO. Module pattern y namespaces.

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = { _name: name };
  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: { twitter, instagram, facebook },
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
  };
  return public;
}
const miguel = createStudent({
  email: "miguelito@frijoles.co",
  name: "miguelito",
});
