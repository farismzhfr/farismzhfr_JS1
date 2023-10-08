//if
const nama="faris";

if (nama === "faris") {
  console.log("faris");
}

//else
umur = prompt( "Masukan Umur Anda")

if (umur <13 ) {
  console.log("Anak Anak");
} else {
  console.log("Remaja");
}

//nested if
num = prompt("Masukan angka1-8");

if (num >= 4 && num <= 8) {
  if (num > 5) {
    console.log("Renang");
  } else {
    console.log("Bulu Tangkis");
  }
} else if (num < 4) {
  console.log("Main Game");
} else {
  console.log("Voli");
}

//switch case
var mobil = 2;
mobil = prompt("Masukan angka 1/2 untuk memilih jenis mobil")
switch(mobil) {
    case '1':
          console.log("R34")
        break;
    case '2':
          console.log("Toyota Supra MK4")
        break;
    default:
        console.log("Tidak Ada Merk")
        brek
}

//for statement
const mobilfav = ['Supra MK4','R34','Silvia S14']
for(let m = 0; m < mobilfav.length; m++){
    console.log(mobilfav[m])
}

//while,dowhile
let n=1;
    while (n<5)
    {
        console.log("Mobil Favorit Supra MK4",n);
        n++;
    }

let m=0;
    do
    {
        m++;
        console.log("Mobil Fav kedua R34");
    }
    while (m<=5)

//function
function tname(namalengkap, namapanggilan){
  console.log('Nama Depan :',namalengkap)
  console.log('Nama panggilan : ', namapanggilan)
}
tname('Faris Muzhafar','ris')
