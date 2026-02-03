//alert('Hello');

/* console.log('Hello')
console.error('Hiba van');
console.warn('Lehet hiba');
 */

// -- Változók

//let, const, var
var kor = 20;
kor = 21;
//console.log(kor);


// -- Adat típusok

const nev = 'Vilmos'; //String
const kor2 =21; // Number
const suly = 100; // Number
const felnott = true; // Boolean
const date = new Date( '2020-10-01' );

const x = null;
let y;

//console.log(typeof y);

// -- Műveletek

let szam1 = 10;
szam1 += '1';

let nev2 = 'Vilmos';
/* nev2 += 10; */

let szoveg = 'Hello';

//console.log( `${szoveg} ${nev2}!!!!`);

//console.log(szoveg.length);
//console.log(szoveg.toLowerCase());
//let lista = 'alma, körte, banán';
//console.log(szoveg.split(''));

date.setFullYear(2024);

//console.log(date);

// -- FELTÉTELEK

const x1 = 14;
const x2 = '14';

/* if(x1 == 12) {
    console.log('IGAZ');
} else if (x1 == 13) {
    console.log('Majdnem IGAZ');
} else {
    console.log('NEM IGAZ')
} */

/* switch (x1) {
    case 10:
    console.log('IGAZ');
    break;
    case 13:
    console.log('kicsit IGAZ');
    break;
    default:
        console.log('NEM IGAZ');
} */

/* if (x1 == x2 && (x1 < 10 || x2 == 14)) {
    console.log('IGAZ');
}

const color = x1 > 10 ? 'piros' : 'kek'; */

//console.log(color);

/* if (!1) {
    console.log ('IGAZ');
} */

/* if (x1 == x2 && x1 > 10 && x2 == 14) {
    console.log('IGAZ');
} */

if (!1) {
    console.log('IGAZ');
}   

const color = x1 > 10? 'piros' : 'kek';

console.log(color);