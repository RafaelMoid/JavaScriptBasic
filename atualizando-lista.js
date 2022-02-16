const listaDeChamada = ['tom', 'ze', 'abmael', 'paula', 'carla', 'ana'
, 'juli', 'lujius', 'renata', 'daisy', 'camilo', 'renan', 'carlo',
'paul', 'margo','sandro', 'magno'];

console.log(listaDeChamada);

listaDeChamada.splice(1,3, 'rodrigo');

console.log(`Lista de chamada:${listaDeChamada}`);