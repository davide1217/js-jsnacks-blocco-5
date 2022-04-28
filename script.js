/* jsnack-1

const zucchine = [
  {
    tipo : 'verde',
    kg : 0.5,
    cm : 13
  },
  {
    tipo : 'verde',
    kg : 0.4,
    cm : 10
  },
  {
    tipo : 'verde',
    kg : 0.5,
    cm : 15
  },
  {
    tipo : 'verde',
    kg : 0.3,
    cm : 11
  },
  {
    tipo : 'verde',
    kg : 0.6,
    cm : 13
  },
  {
    tipo : 'verde',
    kg : 0.7,
    cm : 14
  },
  {
    tipo : 'verde',
    kg : 0.5,
    cm : 9.5
  },
  {
    tipo : 'verde',
    kg : 1,
    cm : 16
  },
  {
    tipo : 'verde',
    kg : 0.5,
    cm : 13
  },
  {
    tipo : 'verde',
    kg : 0.2,
    cm : 6
  },
]

const pesoTotale = () => {

  let somma = 0;

  for(let zucchina of zucchine){
    somma += + parseFloat(zucchina.kg);
  };
  
  return somma

};

document.getElementById('sommapesoTot').innerHTML = `Il peso totale è ${pesoTotale()} kg`;

*/



/* jsnack-2 */


const zucchine = [
  {
    tipo : 'verde',
    kg : 0.5,
    cm : 17
  },
  {
    tipo : 'verde',
    kg : 0.4,
    cm : 10
  },
  {
    tipo : 'verde',
    kg : 0.5,
    cm : 18
  },
  {
    tipo : 'verde',
    kg : 0.3,
    cm : 11
  },
  {
    tipo : 'verde',
    kg : 0.6,
    cm : 13
  },
  {
    tipo : 'verde',
    kg : 0.7,
    cm : 14
  },
  {
    tipo : 'verde',
    kg : 0.5,
    cm : 9.5
  },
  {
    tipo : 'verde',
    kg : 1,
    cm : 16
  },
  {
    tipo : 'verde',
    kg : 0.5,
    cm : 16
  },
  {
    tipo : 'verde',
    kg : 0.2,
    cm : 6
  },
]

const piccole = [];
const grandi = [];

for(let zucchina of zucchine){
  const dividiZucchine = (zucchina.cm > 15) ? grandi.push(zucchina) : piccole.push(zucchina);
}
console.log(piccole);

const pesoPiccole = () => {

  let somma = 0;

  for(let zucchina of piccole){
    somma += + parseFloat(zucchina.kg);
  };
  
  return somma

};

const pesoGrandi = () => {

  let somma = 0;

  for(let zucchina of grandi){
    somma += + parseFloat(zucchina.kg);
  };
  
  return somma

};

document.getElementById('sommaPiccole').innerHTML = `Il peso delle zucchine piccole è ${pesoPiccole()} kg`;
document.getElementById('sommaGrandi').innerHTML = `Il peso delle zucchine grandi è ${pesoGrandi()} kg`;

