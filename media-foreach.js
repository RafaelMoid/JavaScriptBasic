const notas = [10, 8.5, 7, 6];

let somaDasNotas = 0;

notas.forEach(nota => {
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length;

console.log(media);clear