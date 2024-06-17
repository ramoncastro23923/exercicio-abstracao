class FiguraGeometrica {
    constructor(cor) {
        this._cor = cor; 
    }
    
    get cor() {
        return this._cor;
    }

    set cor(novaCor) {
        this._cor = novaCor;
    }

    abstract calcularArea() {
        throw new Error("Método abstrato não implementado.");
    }

    toString() {
        return `Figura: ${this.constructor.name}, Cor: ${this._cor}`;
    }
}

    class Quadrado extends FiguraGeometrica {
        constructor(cor, lado) {
            super(cor);
            this._raio = raio;
        }

        calcularArea() {
            return Math.PI * this._raio * this._raio;
        }
    }

    const quadradoAzul = new Quadrado("azul", 5);
    const circuloVermelho = new Circulo("vermelho", 3);

    console.log(quadradoAzul.cor);
    console.log(circuloVermelho.calcularArea());

    const figuras = [quadradoAzul, circuloVermelho];
    for (const figura of figuras) {
        console.log(figura.toString());
    }