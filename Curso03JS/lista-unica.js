const clientes = [
    {
        nome: "Rafael",
        cpf: "11111111111",
        dependentes: [{
            nome: "Deborah",
            parentesco: "Esposa",
            dataNasc: "16/08/92"
        },
        {
            nome: "Ruan",
            parentesco: "Filho",
            dataNasc: "07/09/2022"
        }],
    },
    {
        nome: "Deborah",
        cpf: "22222222222",
        dependentes: [{
            nome: "Rafael",
            parentesco: "Marido",
            dataNasc: "11/01/1990"
        },
        {
            nome: "Ruan",
            parentesco: "Filho",
            dataNasc: "07/09/2022"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.log(listaDependentes)

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

   const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
   console.log(guerreiro)
   console.log(`O ${guerreiro.nome} é um ${guerreiro.classe} equipado com a espada${guerreiro.espada} e a ${guerreiro.capa}`)