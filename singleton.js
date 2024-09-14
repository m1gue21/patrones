class Singleton {
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
      this.data = "Soy la única instancia";
      Singleton.instance = this;
    }
  
    getData() {
      return this.data;
    }
  }
  
  const singleton1 = new Singleton();
  const singleton2 = new Singleton();
  
  console.log(singleton1.getData()); // Soy la única instancia
  console.log(singleton1 === singleton2); // true
  