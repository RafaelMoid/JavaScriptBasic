const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4, 8, 7.5];

const reprovados = nomes.filter((aluno,i) =>
notas[i] < 5)

console.log(`reprovados: ${reprovados}`)