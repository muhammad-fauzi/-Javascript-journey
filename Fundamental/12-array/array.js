//ARRAY
/*
Array adalah struktur data yang berisi kumpulan elemen berupa
string atau number dalam satu variabel. array bisa menyimpan berbagai
tipe data dan memiliki indeks mulai dari 0
*/

//CARA MEMBUAT ARRAY
//1. MENGGUNAKAN NOTASI ARRAY LITERAL
let mobil = ['toyota', ' honda', 'suzuki']
    console.log (mobil, typeof mobil)
    //output  ['toyota', ' honda', 'suzuki']

//2. MENGGUNAKAN NEW ARRAY()
let baru = new Array (1,2,3)
    console.log (baru)
    //output [1, 2, 3]

//3. MENGAMBIL DATA ARRAY 
let buah = ['jeruk', 'mangga', 'apel']
    console.log (buah[1])
    //output mangga

//4. MENGUBAH ATAU MENAMBAH ELEMEN ARRAY
let binatang = ['gajah', 'rusa']
binatang [2] = 'singa'              //menambah elemen pada indeks ke-2
binatang [1] = 'srigala'            //merubah elemen ke-1
    console.log (binatang)
    //output gajah, srigala, singa

//MANIPULASI ARRAY DENGAN METHOD
/*
    1- .push()              = menambahkan data di akhir array
    2- .pop()               = menghampus data di akhir array
    3- .unshift()           = menambahkan data di awal array
    4- .shift ()            = menghapus data di awal array
    5- .splice()            = bisa menghapus, menambah, atau mengganti data
    6- .slice()             = mengambil sebagian data array
    7- .indexOf()           = mencari index data
    8- .includes()          = mengecek apakah data ada atau tidak. hasilnya boolean
    9- .join()              = menggabungkan array jadi string
    10- .reverse()          = membalik data array
    11- .concat()           = menggabungnkan dua atau lebih array
*/

// 1- .push()              = menambahkan data di akhir array
let transportasi = ['angkot','ojek']
transportasi.push ('taksi')
    console.log (transportasi)      //output ['angkot', 'ojek', 'taksi']

// 2- .pop()               = menghampus data di akhir array
let alat =['tv', 'radio','komputer']
alat.pop ()
    console.log (alat)              //output tv, radio

// 3- .unshift()           = menambahkan data di awal array
let perkakas = ['sendok','garpu']
perkakas.unshift('pisau')   
    console.log (perkakas)          //output pisau, sendok, garpu

// 4- .shift ()            = menghapus data di awal array
let kegiatan = ['mandi', 'makan', 'kerja']
kegiatan.shift()
    console.log (kegiatan)          //output makan kerja

// 5- .splice()            = bisa menghapus, menambah, atau mengganti data
let variasi = [1,2,3,4,5]
let ubahVariasi = variasi.splice (0,2,80)   //index yang mau displice adalah index 0, ganti sebanyak 2 angka menjadi 80 berarti angka 1 dan 2
    console.log (variasi)       //output 80,3,4,5


let warna = ['merah','kuning', 'hijau',' biru','putih']
warna.splice(1,1)               //mulai dari index 1, hapus data ke-1
    console.log(warna)          //ouput ['merah', 'hijau', ' biru', 'putih']

let kota = ['jakarta', 'bandung', 'jogja', 'semarang','surabaya'] //4 index
let kotaLama = kota.splice (2,1,'aceh') //ambil index ke-2 (jogja), jumlah yang dihapus (1), ganti dengan 'aceh'
    console.log (kotaLama)              //output jogja
    console.log (kota) 
    //output 'jakarta', 'bandung', 'aceh', 'semarang', 'surabaya'

// let kotaBaru= kota.splice (0,3)  
//     console.log (kotaBaru)          //output jakarta bandung jogja dihapus
//     console.log (kota)              //output akhir semarang, surabay

// 6- .slice()             = mengambil sebagian data array
let negara = ['jepang','korea','cina','arab saudi', 'mesir','malaysia'] //5 indeks
let slicedNegara = negara.slice(1,3)    //ambil indeks ke-1 dan indeks sebelum indeks ke-3         
    console.log (slicedNegara)          // output korea, cina

// 7- .indexOf()           = mencari index data
let laut = ['hiu', 'paus','pari']
let hewanlaut = laut.indexOf('paus')
    console.log (hewanlaut)             //output index 1
     
// 8- .includes()          = mengecek apakah data ada atau tidak. hasilnya boolean
let cek = ['rendang', 'soto']
let mau = cek.includes('gorengan')
    console.log (mau)                   //output false

// 9- .join()              = menggabungkan array jadi string
let kebun = ['anggur','kopi']
let punya = kebun.join()
    console.log (punya, typeof punya)    //output anggur, kopi string

// 10- .reverse()          = membalik data array
let kebalik = [1,2,3,4,5]
let puyeng = kebalik.reverse()
    console.log (puyeng)                 //ouput 5,4,3,2,1

// 11- .concat()           = menggabungnkan dua atau lebih array
let buahimpor = ['apel','anggur']
let buahlokal = ['mangga', 'rambutan']
let gudang = buahlokal.concat(buahimpor)
    console.log (gudang)                //output mangga, rambutan, apel, anggur

//ARRAY DI DALAM ARRAY (NESTED ARRAY)
let matrix = [
    [1,2,3],    //baris pertama = index 0
    [4,5,6],    //baris kedua   = index 1
    [7,8,9]     //baris ketiga  = index 2
]
    console.log (matrix[2][1])      //ambil dari index kedua, terus ambil data index ke-1 dari index kedua tersebut
    //output 8