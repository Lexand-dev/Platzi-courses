function greeting() {
  let userName = "Ana"; // esta variable solo sera accesible dentro de la function. (local)
  console.log(userName);

  if (userName === "Ana") {
    console.log(`hello ${userName}`);
  }
}

greeting();

console.log(userName); // userName is not defined esta vaariable no esta en global por lo tanto no se puede acceder a esta.
