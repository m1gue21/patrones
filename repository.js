class Producto {
    constructor(id, nombre) {
      this.id = id;
      this.nombre = nombre;
    }
  }
  
  class RepositorioProductos {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    obtenerProductoPorId(id) {
      return this.productos.find(producto => producto.id === id);
    }
  
    listarProductos() {
      return this.productos;
    }
  }
  
  const repositorio = new RepositorioProductos();
  const producto1 = new Producto(1, "Manzana");
  const producto2 = new Producto(2, "Naranja");
  
  repositorio.agregarProducto(producto1);
  repositorio.agregarProducto(producto2);
  
  console.log(repositorio.obtenerProductoPorId(1)); // Producto: Manzana
  console.log(repositorio.listarProductos());
  