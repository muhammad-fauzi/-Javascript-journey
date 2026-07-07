//DATE OBJECT
/*
Date object digunakan untuk kepentingan tanggal dan waktu.
Kita bisa mendapatkan, mengatur atau memanipulasi tanggal dan waktu.
*/

//MEMBUAT DATE OBJECT dengan new Date()
let sekarang = new Date()
    console.log(sekarang)
//output Sun May 10 2026 21:15:55 GMT+0900 (Eastern Indonesia Time)

//MEMBUAT DATE LEBIH SPESIFIK SESUAI YANG KITA INGINKAN pakai String
let spesific = new Date("May 31, 1996 23:00:00")
    console.log(spesific)
//output Fri May 31 1996 23:00:00 GMT+0900 (Eastern Indonesia Time)

let atur = new Date("2075-5-23")
    console.log(atur)
//output Sun May 10 2026 21:15:55 GMT+0900 (Eastern Indonesia Time)

let bebas = new Date(2027, 4, 31, 20, 18)  //format: tahun-bulan-tanggal-jam-menit
    console.log(bebas)
//output Fri May 31 1996 23:00:00 GMT+0900 (Eastern Indonesia Time)

/*CATATAN
Di Javascript, bulan indeksnya dari 0, jadi januari dianggap bulan 0 dan februari
dianggap bulan 1
*/

/*METHOD DI DATE OBJECT
    1-  .getFullYear()          : mengambil tahunnya aja
    2-  .getMonth()             : mengambil bulannya aja
    3-  .getDate()              : mengambil tanggalnya aja
    4-  .getDay()               : mengambil hari. Minggu indeksnya 0, Senin indeksnya 1 dst
    5-  .getHours()             : mengambil jam
    6-  .getMinutes()           : mengambil menit aja
    7-  .getSeconds()           : mengambil detik
    8-  .getMilliseconds()      : mengambil milisecond
    9-  .getTime()              : mengambil millisecond dari 1970
*/
// 1 -  .getFullYear()          : mengambil tahunnya aja
let tahun = new Date()
    console.log (tahun.getFullYear())   //output 2026

// 2 -  .getMonth()             : mengambil bulannya aja
let bulan = new Date()
    console.log(bulan.getMonth())       //output 4 (bulan Mei)

// 3 -  .getDate()              : mengambil tanggalnya aja
let tanggal = new Date()
    console.log(tanggal.getDate())      //output 10

// 4 -  .getDay()               : mengambil hari.Minggu indeksnya 0, Senin indeksnya 1 dst
let hari = new Date()
    console.log(hari.getDay())          //output 0 (hari minggu)

// 5 -  .getHours()             : mengambil jam
let jam = new Date()
    console.log(jam.getHours())         //output 21 (jam 9 malam)

// 6 -  .getMinutes()           : mengambil menit aja
let menit = new Date()
    console.log(menit.getMinutes())     //output 54 (menit ke-54)

// 7 -  .getSeconds()           : mengambil detik
let detik = new Date()
    console.log(detik.getSeconds())     //output 17 (detik ke-17)

// 8 -  .getMilliseconds        : mengambil milisecond
let milli = new Date()
    console.log (milli.getMilliseconds()) //output 795 (millisecond ke-795)

// 9 -  .getTime()              : mengambil millisecond dari 1970 (keterangan 1970 ada di penjelasan getTime)
let time = new Date()
    console.log (time.getTime())        //output 1778418152088

//MENGATUR TANGGAL DAN WAKTU
/*
    1- .setFullYear()           : mengatur tahun
    2- .setMonth()              : mengatur bulan
    3- .setDate ()              : mengatur tanggal
    4- .setHours()              : mengatur jam
    5- .setMinutes()            : mengatur menit
    6- .setSeconds()            : mengatur detik
    7- .
*/

// 1- .setFullYear()           : mengatur tahun
let aturTahun = new Date ('May 31, 2010')
aturTahun.setFullYear(2005)
    console.log(aturTahun)          //output tadinya May 31 2010, sekarang jadi 2005'

// 2- .setMonth()              : mengatur bulan
let aturBulan = new Date ("January 21")
aturBulan.setMonth (1)
    console.log (aturBulan)         //output February 21

// 3- .setDate ()              : mengatur tanggal
let aturTanggal = new Date ("August 17")
aturTanggal.setDate (11)
    console.log (aturTanggal)       //output August 11

// 4- .setHours()              : mengatur jam
let aturJam = new Date ("February 21, 10:00")
aturJam.setHours (13)
    console.log (aturJam)           //output Feb 21, 13:00

// 5- .setMinutes()            : mengatur menit
let aturMenit = new Date ("September 23, 13:00")
aturMenit.setMinutes(59)
    console.log (aturMenit)         //output Sep 23, 13:59

// 6- .setSeconds()            : mengatur detik
let aturDetik = new Date ('July 14, 23:00:00')
aturDetik.setSeconds (40)
    console.log (aturDetik)         //output July 14, 23:00:40

//LATIHAN MENGUBAH SEMUA KOMPONEN TANGGAL DAN WAKTU
let latihan = new Date ('December 24, 2004 11:00:00')
latihan.setFullYear (2008, 8, 27)       //ubah semua
    console.log(latihan)            //ouput sept 27, 2008

//CARA MENGHITUNG SELISIH ANTAR TANGGAL
/* Sebelum menghitung selisih antar tanggal atau waktu, ingat rumus
    1 hari = 24 jam
    1 jam = 60 menit atau 3600 detik
    1 menit = 60 detik
    1 detik =  1000 ms

    Kemudian komponen tersebut dikalikan terlebih dahulu sebelum 
    dibagi dengan variabel
*/

let starDate = new Date ("2024, 7, 23")
let endDate = new Date ("2025, 5, 24")

let selisih =  endDate - starDate       //tanpa melakukan operasi pembagian dan perkalian
    console.log (selisih)               //outputnya 26352000000

let hasil = selisih / (24 * 3600 * 1000)   //hari, menit, detik
    console.log (hasil +' '+ 'hari')    //output 305 hari