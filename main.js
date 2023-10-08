function Funcionarios(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.horarios = function() {
        console.log("Carga horária de 8 horas");
    }
}

function Programador(nome, sobrenome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Funcionarios.call(this, nome, sobrenome);
    
}

function Designer(nome, sobrenome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Funcionarios.call(this, nome, sobrenome);
}

function Gerente(nome, sobrenome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;
    this.getSalario = function() {
        return _salario
    }
    this.setSalario = function(valor) {
        _salario = valor
    }

    this.aumentos = function() {
        const aumentoPorMetas = _salario * 1.1;
        console.log(aumentoPorMetas);
        _salario = aumentoPorMetas;
    }

    Funcionarios.call(this, nome, sobrenome);
}

const programador1 = new Programador("Gabriel", "Castro", "dev front end", 5000);
const programador2 = new Programador("Léia", "Ricardo", "back end", 7000);
const designer1 = new Designer("Bruno", "Felipe", "designer", 4000);
const gerente1 = new Gerente("Pedro", "Flavio", "gerente", 10000)

console.log(programador1);
programador1.horarios();

console.log(programador2);
programador2.horarios();

console.log(designer1);
designer1.horarios();

console.log(gerente1);
gerente1.horarios();
gerente1.setSalario(12000);
gerente1.aumentos();
console.log(gerente1.getSalario());


