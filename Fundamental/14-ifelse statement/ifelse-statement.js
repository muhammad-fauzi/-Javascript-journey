//IF ELSE STATEMENT

/*
If berfungsi menguji program. Jika true, program akan dijalankan
jika false, program tidak dijalankan 

CARA PENULISAN
    if (kondisi){
        console.log ()
    }
    else {
        console.log()
    }
ATAU
    variabel = (kondisi) ? "jawaban 1" : "jawaban 2"
*/

//CONTOH PENULISAN
let nilai = 70
if (nilai >= 70){
    console.log ('anda lulus')          //outputnya ini
}
else {
    console.log ('anda tidak lulus')
}
//ATAU 

let kepadatan_sekarang = 1000
let jumlah_penduduk = (kepadatan_sekarang >= 1000 ) ? "PADAT SEKALI" : "TIDAK PADAT"

console.log (jumlah_penduduk)       //output PADAT SEKALI

//ELSE IF STATEMENT
/*
Digunakan untuk memeriksa kondisi secara berurutan
*/

let angka = 65
if (angka >= 90){
    console.log ('Nilai kamu A')
}
else if (angka >= 80 ){
    console.log ('Nilai kamu B')
}
else if (angka >= 70 ){
    console.log ('Nilai kamu C')
}
else if (angka >= 60) {
    console.log ('Nilai kamu D')            //outputnya ini
}
else {
    console.log ('Silahkan ujian lagi')
}

//NESTED IF ELSE STATEMENT
let umur = 20
let punyaKtp = false

if (umur >= 17){
    if (punyaKtp === true){
        console.log('Boleh Membuat SIM')
    }
    else {
        console.log ('Harus punya KTP')     //outputnya ini
    }
}
else {
    console.log ('umur belum cukup')
}