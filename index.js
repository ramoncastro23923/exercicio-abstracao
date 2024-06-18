class FiguraGeometrica {
    constructor(cor) {
        if (new.target === FiguraGeometrica) {
            throw new Error("Não é possível instanciar a classe abstrata FiguraGeometrica diretamente.");
        }
        this._cor = cor;
    }

    get cor() {
        return this._cor;
    }

    set cor(novaCor) {
        this._cor = novaCor;
    }

    calcularArea() {
        throw new Error("Método abstrato não implementado.");
    }

    toString() {
        return `Figura: ${this.constructor.name}, Cor: ${this._cor}`;
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(cor, lado) {
        super(cor);
        this._lado = lado;
    }

    calcularArea() {
        return this._lado * this._lado; 
    }
}

class Retangulo extends FiguraGeometrica {
    constructor(cor, largura, altura) {
        super(cor);
        this._largura = largura;
        this._altura = altura;
    }

    calcularArea() {
        return this._largura * this._altura;
    }
}

const quadradoAzul = new Quadrado("azul", 5);
const retanguloVermelho = new Retangulo("vermelho", 3, 4);
const retanguloVerde = new Retangulo("verde", 2, 6);

console.log(quadradoAzul.cor);
console.log(retanguloVermelho.calcularArea());
console.log(retanguloVerde.calcularArea()); 

const figuras = [quadradoAzul, retanguloVermelho, retanguloVerde];
for (const figura of figuras) {
    console.log(figura.toString());
}
