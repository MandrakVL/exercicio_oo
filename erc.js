function Cachorro(nome) {
    this.nome = nome;
    this.cachorroLate = function() {
        console.log(this.nome + " " + "diz...Au-Au!")
    }
}

function Gato(nome) {
    this.nome = nome;
    this.gatoMia = function() {
        console.log(this.nome + " " + "diz...Miauu-miau!")
    }
}

function IdadeCac(idade) {
    let _idade = idade;

    this.getIdade = function() {
        return idade;
    }
}

function Animal(nome, idade, raca, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.raca = raca;

    console.log(`${this.nome}, tem ${this.idade} anos, é da raça ${this.raca}`)

    if(tipo === "Cachorro") {
        let cachorro = new Cachorro(nome);
        cachorro.cachorroLate();
    } else if(tipo === "Gato") {
        let gato = new Gato(nome);
        gato.gatoMia();
    } else {
        console.log("Animal não indentificado!")
    }

    Cachorro.call(this, nome);

    Gato.call(this, nome);

    IdadeCac.call(this, idade);
}

const cachorro1 = new Animal("Gus", 8, "Hushy siberiano", "Cachorro");
const gato1 = new Animal("Billy", 10, "Angorá", "Gato");

const cachorro2 = new Animal("Simba", 8, "Pastor-alemão", "Cachorro");
const gato2 = new Animal("Diana", 3, "Ashera", "Gato");