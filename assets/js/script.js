function FiguraGeometrica(lado) {
  this.lado = lado;
}

function Poligono(lado) {
  FiguraGeometrica.call(this, lado);
}
Poligono.prototype = Object.create(FiguraGeometrica.prototype);

Poligono.prototype.calcularArea = function () {
  return this.lado * this.lado;
};

var cuadrado = new Poligono(3);
console.log(cuadrado);
console.log(cuadrado.calcularArea());
