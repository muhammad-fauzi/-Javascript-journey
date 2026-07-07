//⁡⁣⁣⁢FUNCTION
/*
Adalah blok kode yang digunakan untuk melakukan tugas tertentu
dan dapat digunakan berulang kali. Function mempermudah pengorganisasian
kode dan membagi tugas besar menjadi tugas-tugas kecil yang lebih terstruktur⁡

⁡⁣⁣⁢Function itu menyimpan aksi dan mengeluarkannya ketika dipanggil.⁡ 
⁡⁣⁣⁢Jadi dibikin dulu perintah aksinya di dalam function, terus nanti jika dibutuhkan
tinggal dipanggil⁡

CARA PENULISAN

function namaFunction (paramater1, parameter2..){
    console.log ()   
}
namaFunction()
*/

//CONTOH FUNCTION TANPA PARAMENTER
function salam(){               //membuat function
    console.log ('halo fauzi')
}
salam()                         //memanggil atau menjalankan function

//CONTOH FUNCTION DENGAN PARAMETER
function greeting (nama){                   //nama adalah paramenter
    console.log (`hello ${nama}`)
}
greeting ('spongebob')              //output hello sponge bob

//⁡⁣⁣⁢PARAMETER DAN ARGUMEN DALAM FUNCTION
/*
Parameter = variabel yang disebutkan dalam deklarasi function
Argumen   = nilai yang diberikan saat function dipanggil⁡
*/
//CONTOH
function tambah (a,b){
    return a + b                //return berfungsi sebagai sama dengan (=)
}
console.log (tambah (2,3))      //output 5
//paramater di atas ialah a dan b
//argumen di atas ialah 2 dan 3


//⁡⁣⁣⁢RETURN DALAM FUNCTION
/*console.log setelah return itu tidak akan dieksekusi.
jika ingin mengeksekusi kode setelah return, bisa taruh hasilnya di variabel baru
atau pakai if else⁡
*/

//CONTOH MENJALANKAN KODE SETELAH RETURN DENGAN MENARUH HASIL KODE DALAM VARIABEL
function kuadrat (num){
    return num * num
    //console.log (`hello ${num}`)        //ini tidak diprint karena console.log terletak setelah return
}
hasilkuadrat = kuadrat (4)      //hasilkuadrat ialah variabel yang menyimpan hasil dari return
console.log (hasilkuadrat)      //output 16
//console.log berjalan setelah return

//CONTOH MENJALANKAN KODE SETELAH RETURN DENGAN IF ELSE
function cekUmur (umur){
    if (umur > 17 ){
        return 'bisa nyoblos'
    }
    else {
        return 'belom bisa nyoblos'
    }
}
console.log(cekUmur (20))           //output bisa nyoblos 


//⁡⁣⁣⁢FUNCTION DENGAN PARAMETER DEFAULT⁡
/*
⁡⁣⁣⁢Parameter default ialah nilai yang digunakan jika tidak ada 
argumen yang diberikan saat function dipanggil⁡
*/

function sapaan (islam = 'assalamu\'alaikum'){
    console.log (islam + ' '+ 'fauzi')
}
sapaan()                        //output assalamu'alaikum fauzi

//⁡⁣⁣⁢FUNCTION EXPRESSION⁡
/*
⁡⁣⁣⁢Ialah function yang disimpan dalam variabel⁡
*/

let coba = function (a,b){    //function disimpan dalam variabel coba, tapi si function gk perlu ada nama functionnya
    return a + b
}
console.log (coba (5,5))            //output 10

//⁡⁣⁣⁢ARROW FUNCTION⁡
/*
⁡⁣⁣⁢Arrow Function adalah cara penulisan singkat function expression⁡
*/
//Sebelum pakai arrow function

let minum = function (a, b){
    return a+b
}
console.log (minum (10,10))

//Setelah pakai arrow function

let susu = (a,b) => {       //jika function hanya punya satu pernyataan, kurung kurawal dan return bisa dibuang
    return a * b            //ini namanya 1 penyataan, karena tidak ada eksekusi atau perintah kode lain
}
console.log (susu(2,5))

//atau

let kopi = (a,b) => a+b
    console.log (kopi (10,10))      //output 20


//⁡⁣⁣⁢IIFE (IMMEDIEATELY INVOKED FUNCTION EXPRESSION)⁡
/*
⁡⁣⁣⁢Function yang bisa langsung digunakan setelah dibuat. Ini berguna untuk
melindungi variabel dan mencegahnya mengganggu kode lain.⁡
*/
//CONTOH SINTAKS DASAR
;(function(){                     //Tambahkan (;) sblm tulisan function sebagai penanda bhwa kode sbelumnya telah selesai                
    console.log ('hello IIFE');   //outputnya hello IIFE
})();                             //tambahkan () sebagai penanda perintah memanggil function

//CONTOH LAIN
const appConfig = (function(){
    const apiKey = '1234'
    const apiURL = 'https://apiexample.com'

    return {
        getapiKey : function (){            //tipe data object
            return apiKey
        },
        getapiURL : function (){
            return apiURL
        } 
    }
})()    
    //tanda () perintah menjalankan function IIFE
    console.log (appConfig.getapiKey())     //ini mengambil getapiKey
    //output 1234
    console.log (appConfig.getapiURL())
    //output 'https://apiexample.com'

//⁡⁣⁣⁢HIGHER-ORDER FUNCTIONS⁡
/*
⁡⁣⁣⁢Higher Order Function adalah function yang menerima function lain sebagai argumen
atau mengembalikan function lain sebagai hasil⁡
*/

//CONTOH FUNCTION SEBAGAI PARAMETER
function tegur (){                      //tegur adalah function yg dikirim ke jalankan (sehat)
    console.log ('Ohayou Gozaimasu')
}
function jalankan (sehat){
    sehat ()                            //kemudian function tegur dipanggil di sini
}
jalankan (tegur)
//output ohayou gozaimasu
//Ini disebut High order function karena function jalankan (sehat) menerima function dari tegur()


//CONTOH FUNCTION MENGEMBALIKAN FUNCTION
function luar (){
    return function (){
        console.log ('Hi semua')
    }
}
let lihat = luar ()     //function luar () disimpan dlm variabel lihat
lihat ()                //lalu function luar () dipanggil di lihat ()
//output Hi semua

//⁡⁣⁣⁢CALLBACK FUNCTION⁡
/* 
⁡⁣⁣⁢Callback function adalah function yang dikirim sebagai argumen kepada function lain
dan dipanggil dlm function tersebut.⁡
*/
function presiden (){                   //presiden adalah callback function yang dikirim ke function order
    console.log ('negara demokrasi')
}
function order (callback){          //function presiden kemudian masuk ke function order
    callback ()                     //lalu function presiden dijalankan melalui function callback ()
}
order (presiden)
//output negara 

//CONTOH KOMBINASI HIGH ORDER FUNCTION DAN CALLBACK FUNCTION
function perjalanan (sendirian, grup){          /* ini high order function, karena parameter grup saat dipanggil (di bari 194), berupa argumen function pariwisata*/
    console.log ('pilih jenis perjalanan :' + sendirian)
    grup()
}
function pariwisata (){                 //ini callback function
    console.log ('perjalanan biasa')
}
perjalanan ('solo travelling', pariwisata)          //argumen pariwisata ialah function yang dikirim ke function perjalanan. ini disebut callback
//output pilih jenis perjalanan :solo travelling
//output perjalanan biasa