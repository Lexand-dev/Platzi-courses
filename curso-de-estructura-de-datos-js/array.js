class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  // recibe un indice y un elemento y lo inserta en el indice indicado
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  //
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }
  // recibe un indice y lo corre a la izquierda
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  // agregar un elemento al inicio del array y retorna el nuevo largo del array
  unshift(item) {
    if (!item) {
      return this.length;
    }
    if (this.length !== 0) {
      for (let i = this.length - 1; i >= 0; i--) {
        this.data[i + 1] = this.data[i];
      }
    }

    this.data[0] = item;
    this.length++;
    return this.length;
  }
  //borra el primer elemento del array y lo retorna
  shift() {
    // Tu código aquí 👈
    if (this.length == 0) {
      return undefined;
    }
    //obtengo el primer elemento
    const firstItem = this.data[0];
    // corrijo el numero de indice de cada elemento
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    // remuevo el ultimo slot que queda con undefined
    delete this.data[this.length - 1];
    // corrijo el largo del array
    this.length--;

    return firstItem;
  }
}

const myArray = new MyArray();
