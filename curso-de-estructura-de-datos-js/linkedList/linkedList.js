// ¿Cómo se ve una linked list?

//El null permite un colocar un nodo nuevo
1 --> 2 --> 3 --> 4 --> 5 -->null//La linked List nos regresa un objeto, como la que se muestra a continuación
let singlyLinkedList = {
    head: {
value: 1,
        next: {
value: 2,
            next: {
value: 3,
                next: {
value: 4,
                    next:null
                }
            }
        }
    }
}

// A continuación construimos la clase en Javascript de el objeto mostrado.

//Cada uno de los elementos tiene que tener un nodo, así que hacemos una instancia del Nodo con una clase para no tener que repetir código en la class MySinglyLinkesList.

class Node {
    constructor(value) {
this.value = value 
this.next = null
    }
}

class MySinglyLinkedList {
  constructor(value) { 
    // creamos el inicio de nuestro SinglyLinkedList 
    this.head = {
      value,
      next: null,
    };

    // Aqui sucede la magia ✨
    // Todo lo que modifiquemos en los atributos de tail 
    // se modificará en la estructura inicial 
    // por la REFENCIA! 🖊 🚀 👨‍🔧 🚀 🖊 
    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    // aquí estamos creando un nuevo nodo con la clase Node 
    const newNode = new Node(value);

    // Como mencionamos anteriormente 
    // si modificamos la cola por la REFERENCIA 
    // se modificará la estructura inicial! 🖊
    this.tail.next = newNode;
    // Pero aun tail sigue apuntando a la CABEZA 
    // de la estructura inicial entonces es momento
    // de apuntar al nuevo nodo creado para que posteriormente
    // podamos agregar más nodos! 🚀
    this.tail = newNode;
    // Finalmente aumentamos el tamaño definido de 
    // nuestra estructura 👨‍🔧
    this.length++;

    return this;
  }

  prepend(val)
  {
      
      // GENERAMOS UN NUEVO NODO
      const newNode = new Nodo(val)
      // SU NEXT APUNTA A LA CABEZA
      newNode.next = this.head
      // LA CABEZA ES EL NUEVO NODO CON LOS DATOS ANTERIORES
      this.head = newNode
      // EL LARGO AUMENTA
      this.length++
      return this
  }

  insert( index , val )
  {
      // SI EL INDEX QUE ME PASAN ES MAYOR
      // AL TAMAÑO DE MI LISTA
      if( index >= this.length )
      {
          // AÑADE AL FINAL DE LA LISTA
          // EL NUEVO VALOR
          return this.append(val)
      }
      // CREAMOS UN NUEVO NODO
      const newNode = new Nodo(val)
      const firstPointer = this.getTheIndex( index - 1 )
      const holdingPointer = firstPointer.next

      firstPointer.next = newNode
      newNode.next = holdingPointer 
      this.length++
  }

  getTheIndex(index)
  {
      
      let counter = 0
      let currentNode = this.head

      while( counter != index ){
          currentNode = currentNode.next    
          counter++
      }
      return currentNode
  }

  remove(index){
    if(index > this.length || index < 0){
        console.error("Index of bounds");
    }

    const holdingNode = this.getTheIndex(index-1);
    if (index === 0) {
        this.head = holdingNode.next;
    }else{
        const removedNode = holdingNode.next;
        holdingNode.next = removedNode.next;
    }
    this.length--;
    return this;    
  }
}