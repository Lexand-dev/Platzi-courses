/* En este desafío tendrás que crear un closure que nos permita almacenar datos de mascotas en cualquier momento.

Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá para crear nuestra lista en un inicio mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.

Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.  */

function createPetList() {
  const petList = [];
  return function (pet) {
    if (pet) {
      petList.push(pet);
      return petList;
    }
    return petList;
  };
}

const myPetList = createPetList();

console.log(myPetList("michi"));
console.log(myPetList("firulais"));
console.log(myPetList());
