function Cliente(id, nome, cpf, email, saldo){
    this.id= id;
    this.nome= nome;
    this.cpf= cpf;
    this.email= email;
    this.saldo= saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const rafael = new Cliente(1, "Rafael", 11122211122, "rv@gmail.com", 0)
console.log(`Olá ${rafael.nome},seu saldo é: ${rafael.saldo}`);
rafael.depositar(199);
console.log(`Olá ${rafael.nome},seu saldo é: ${rafael.saldo}`);

