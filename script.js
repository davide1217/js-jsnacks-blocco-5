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



  let somma = 0;

  for(let zucchina of zucchine){
    somma += + parseFloat(zucchina.kg);
  };
  


document.getElementById('sommapesoTot').innerHTML = `Il peso totale è ${pesoTotale()} kg`;

*/



/* jsnack-2 


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

const pesoZucchine = (array) => {

  let somma = 0;

  for(let zucchina of array){
    somma += + parseFloat(zucchina.kg);
  };
  
  return somma

};

document.getElementById('sommaPiccole').innerHTML = `Il peso delle zucchine piccole è ${pesoZucchine(piccole)} kg`;
document.getElementById('sommaGrandi').innerHTML = `Il peso delle zucchine grandi è ${pesoZucchine(grandi)} kg`;

*/



/* jsnack3

let parola = prompt('inserisci un parola');

const controlloParola = (parola.includes(' ')) ? parola = prompt('inserisci UNA parola') : '' ;

const giraParola= (word) => word.split('').reverse().join('');

const parolaGirata = giraParola(parola);

document.getElementById('parola').innerHTML =  parola;
document.getElementById('parolaGirata').innerHTML = parolaGirata;

*/

const biciclette = [
  {
    nome : 'freccia',
    kg : 17
  },
  {
    nome : 'scheggia',
    kg : 15
  },
  {
    nome : 'lampo',
    kg : 20
  },
  {
    nome : 'fulmine',
    kg : 14
  },
]

const biciPiuLeggera = () => {

  let biciLeggera = '';

  let pesoMinore = '';

  for(let bicicletta of biciclette){

    const {kg, nome} = bicicletta;

    if(biciLeggera === '') {
      biciLeggera = nome;
      pesoMinore = kg;
    } 
    else if(pesoMinore > kg) {
      pesoMinore = kg;
      biciLeggera = nome;
    }

    console.log(biciLeggera);

  }

  return biciLeggera

}

let biciStampata = biciPiuLeggera();

document.getElementById('biciPiuLeggera').innerHTML = `La bici più leggera è ${biciStampata}`;