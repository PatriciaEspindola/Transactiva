// Clase abstracta
class FigGeo {
    constructor() {
        this.area = 0;
    }

    calcArea() {
        throw new Error('calcArea() debe ser implementado.');
    }

    saveArea() {
        if (this.area === 0) {
            console.log('calculando area...');
            this.area = this.calcArea();
        }
    }
}

class Circle extends FigGeo {
    constructor() {
        super();
        this.r = 1;
    }

    calcArea() {
        return 3.1416 * this.r * this.r;
    }

    PrintDetails() {
        console.log(`r= ${this.r} area= ${this.area}`);
    }
}

class Square extends FigGeo {
    constructor() {
        super();
        this.width = 1.0;
    }

    calcArea() {
        return this.width * this.width;
    }

    PrintDetails() {
        console.log(`width= ${this.width} area= ${this.area}`);
    }
}

class Triangle extends FigGeo {
    constructor() {
        super();
        this.base = 1.0;
        this.height = 1.0;
    }

    calcArea() {
        return (this.base * this.height) / 2;
    }

    PrintDetails() {
        console.log(`base= ${this.base} height= ${this.height} area= ${this.area}`);
    }
}

// Factory base
class Creator {
    FactoryMethod() {
        throw new Error('FactoryMethod() debe ser implementado.');
    }

    SomeOperation() {
        const fig = this.FactoryMethod();
        console.log(`Creator: calculando area: ${fig.calcArea()}`);
        fig.saveArea();
        return fig;
    }
}

class CircleCreator extends Creator {
    FactoryMethod() {
        return new Circle();
    }
}

class SquareCreator extends Creator {
    FactoryMethod() {
        return new Square();
    }
}

class TriangleCreator extends Creator {
    FactoryMethod() {
        return new Triangle();
    }
}

// Ejecución
console.log('App: Launched with the CircleCreator.');
let creator = new CircleCreator();
let fig = creator.SomeOperation();
fig.PrintDetails();

console.log('\nApp: Launched with the SquareCreator.');
creator = new SquareCreator();
fig = creator.SomeOperation();
fig.PrintDetails();

console.log('\nApp: Launched with the TriangleCreator.');
creator = new TriangleCreator();
fig = creator.SomeOperation();
fig.PrintDetails();
