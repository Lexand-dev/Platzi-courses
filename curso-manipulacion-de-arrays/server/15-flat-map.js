const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

// con map y flat obtenemos un array con los atributos de cada usuario y con flat aplanamos el array para obtener un array con todos los atributos de todos los usuarios y lo guardamos en la variable rta que es un array y lo imprimimos por consola con el console.log que esta al final del codigo y nos muestra por consola  ["Nice", "Cute", "Lovely", "Nice", "Cool"]

const rta = users.map((user) => user.attributes).flat();
const rta2 = users.flatMap((user) => user.attributes);
console.log("map-flat", rta);
console.log("rta2", rta2);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

//con flatMap obtenemos un array con todas las fechas de todos los calendarios y lo guardamos en la variable rta3 que es un array y lo imprimimos por consola con el console.log que esta al final del codigo y nos muestra por consola  [2021-02-01T22:00:00.000Z, 2021-02-01T23:30:00.000Z, 2021-02-01T23:00:00.000Z, 2021-02-01T23:00:00.000Z, 2021-02-01T21:00:00.000Z, 2021-02-01T21:30:00.000Z, 2021-02-01T20:00:00.000Z, 2021-02-01T20:00:00.000Z]
const rta3 = Object.values(calendars).flatMap((item) => {
  return item.map((date) => date.startDate);
});
console.log(rta3);
