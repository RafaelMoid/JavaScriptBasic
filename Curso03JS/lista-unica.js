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