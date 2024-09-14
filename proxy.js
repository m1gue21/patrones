// Clase real que simula la carga de imágenes desde un servidor
class RealImage {
  constructor(filename) {
    this.filename = filename;
    this.loadImageFromDisk();
  }

  loadImageFromDisk() {
    console.log(`Cargando imagen ${this.filename} desde el disco...`);
  }

  displayImage() {
    console.log(`Mostrando imagen: ${this.filename}`);
  }
}

// Clase Proxy que actúa como intermediario
class ProxyImage {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null;
  }

  displayImage() {
    // Carga la imagen solo cuando sea necesario
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.displayImage();
  }
}

// Cliente
function clientCode() {
  const image1 = new ProxyImage("imagen1.jpg");
  const image2 = new ProxyImage("imagen2.png");

  // Se carga la imagen cuando se muestra por primera vez
  image1.displayImage(); // Carga desde el disco y la muestra
  image1.displayImage(); // Ya está en la caché, solo la muestra

  image2.displayImage(); // Carga desde el disco y la muestra
  image2.displayImage(); // Ya está en la caché, solo la muestra
}

clientCode();
