function Cliente(id, nome, cpf, email, saldo){
    this.id= id;
    this.nome= nome;
    this.cpf= cpf;
    this.email= email;
    this.saldo= saldo;
}

Cliente.prototype.depositar = function(valor){
    this.saldo += valor;
}

ClientePoupanca.prototype.depositar = function(valor){
    this.saldo += valor;
}

function ClientePoupanca(id, nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this,id,nome,cpf,email,saldo);
    this.saldoPoup= saldoPoup;
}

const deborah = new ClientePoupanca(2, "Deborah", "11122211122", "db@email.com", 100, 200)
console.log(deborah);

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}


deborah.depositar(1000);
console.log(deborah);
deborah.depositarPoup(100);
console.log(deborah);