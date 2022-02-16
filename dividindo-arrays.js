const nomes = ['tom', 'ze', 'abmael', 'paula', 'carla', 'ana'
, 'juli', 'lujius', 'renata', 'daisy', 'camilo', 'renan', 'carlo',
'paul', 'margo','sandro', 'magno'];

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice((nomes.length)/2);

console.log(`A sala 1 é composta de ${sala1}`);
console.log(`A sala 2 é composta de ${sala2}`);