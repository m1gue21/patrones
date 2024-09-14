class Observador {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    actualizar(mensaje) {
      console.log(`${this.nombre} ha recibido la actualización: ${mensaje}`);
    }
  }
  
  class Sujeto {
    constructor() {
      this.observadores = [];
    }
  
    agregarObservador(observador) {
      this.observadores.push(observador);
    }
  
    notificar(mensaje) {
      this.observadores.forEach(observador => observador.actualizar(mensaje));
    }
  }
  
  const sujeto = new Sujeto();
  const observador1 = new Observador("Observador 1");
  const observador2 = new Observador("Observador 2");
  
  sujeto.agregarObservador(observador1);
  sujeto.agregarObservador(observador2);
  
  sujeto.notificar("Cambio en el estado del sistema");
  