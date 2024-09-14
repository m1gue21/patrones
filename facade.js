class SistemaDePago {
    procesarPago() {
      console.log("Procesando pago...");
    }
  }
  
  class SistemaDeEnvio {
    gestionarEnvio() {
      console.log("Gestionando envío...");
    }
  }
  
  class SistemaDeInventario {
    verificarStock() {
      console.log("Verificando stock...");
    }
  }
  
  class FachadaTiendaOnline {
    constructor() {
      this.sistemaDePago = new SistemaDePago();
      this.sistemaDeEnvio = new SistemaDeEnvio();
      this.sistemaDeInventario = new SistemaDeInventario();
    }
  
    realizarCompra() {
      this.sistemaDeInventario.verificarStock();
      this.sistemaDePago.procesarPago();
      this.sistemaDeEnvio.gestionarEnvio();
      console.log("Compra realizada con éxito.");
    }
  }
  
  const tienda = new FachadaTiendaOnline();
  tienda.realizarCompra();
  