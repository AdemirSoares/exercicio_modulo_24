function Concessionaria(fabricante, modelo) {
    this.fabricante = fabricante;
    this.modelo = modelo;
}

function Carro(fabricante, modelo, valor) {
    Concessionaria.call(this, fabricante, modelo);
    this.valor = valor;
}

function Moto(fabricante, modelo, valor) {
    Concessionaria.call(this, fabricante, modelo);
    this.valor = valor;
}

const Carro1 = new Carro('BMW', 'iX', 699.950);
const Carro2 = new Carro('BMW', 'iX M60', 1.101,950);
const Carro3 = new Carro('BMW', 'i7', 1.301,950);
const Moto1 = new Moto('BMW', 'R 1300 GS', 99.900);
const Moto2 = new Moto('BMW', 'F 800 GS', 66.900);

console.log(Carro1);
console.log(Carro2);
console.log(Carro3);
console.log(Moto1);
console.log(Moto2);