//TYPE CONVERSION

/*
Type conversion adalah mengubah tipe data ke tipe data lain

Terdapat 2 jenis Type conversion
    1. Implicit Conversion : konversi tipe data yang dilakukan secara otomatis oleh javascript
    2. Explicit Conversion : konversi tipe data yang dilakukan programmer dgn metode / fungsi tertentu
*/

//IMPLICIT CONVERSION
//konversi tipe data yang dilakukan secara otomatis oleh javascript
let ubah = "5" + 10

console.log (ubah, typeof ubah) //output 510 string
//angka 10 yang tadinya tipe number berubah menjadi tipe string

let ular = "10" - 5

console.log (ular, typeof ular) //outputnya 5 number
//angka 10 yang tadinya string berubah menjadi number saat operasi pengurangan

/* Semua operasi yang bilangannya berbentuk string akan berubah menjadi number
kecuali operasi penjumlahan, maka ia akan merubah number menjadi string */

/* IMPLICIT CONVERSION PADA FALCY VALUE

FALCY VALUE adalah  0, null, undefined, "". Semua bernilai false
*/

let arti = !0      //cara baca: arti not 0 ()
console.log (arti, typeof arti)  //output true, boolean

let makna = !5     //cara baca: makna bukanlah 5
console.log (makna, typeof makna) //output false, boolean

//EXPLICIT CONVERSION
//Konversi tipe data yang dilakukan programmer dgn metode / fungsi tertentu

//CONTOH: cara 1 mengubah type data lain menjadi string
let tukar = 5              //tipe number
let change = String(tukar)

console.log (change, typeof change) //output 5 string

//CONTOH: cara 2 mengubah type data lain menjadi string
let ganti = 10              //tipe number
let ikan = ganti.toString()     //pakai .toString()

console.log (ikan, typeof ikan) //output 10 string

//CONTOH: cara 3 mengubah tipe data string menjadi number
let datang = "200"
let pergi = parseInt(datang)    //pakai parseInt untuk membulatkan angka

console.log (pergi, typeof pergi) //output 200 number

let utang = "20.33"
let bayar = parseFloat(utang)  //pakai parseFloat untuk mempertahankan koma

console.log (bayar, typeof bayar) //outpt 20.33 number

//CONTOH: cara 4 mengubah tipe data lain ke boolean
let a = Boolean(0)          //falcy value: 0, undefined, null, ""
console.log (a, typeof a) //output false, boolean

let b = Boolean(23)
console.log (b, typeof b) //output true, boolean

//CONTOH LAIN
let pengurangan_Aneh = "abc" - 10
console.log (pengurangan_Aneh, typeof pengurangan_Aneh)  //output, Nan, number