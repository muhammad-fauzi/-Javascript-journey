//LOOP
/*
Loop adalah menjalan kode berulang kali selama kondisi tertentu
terpenuhi. Jenis-jenis loop ialah
    1. for
    2. while
    3. do while
ketiganya memiliki kegunaan sendiri sesuai kebutuhannya
*/

//1. FOR
/*Digunakan ketika jumlah perulangan sudah diketahui

for (inisialisasi; kondisi; perubahan){         
    //kode yang dijalankan saat kondisi true
}

Inisialisasi = Nilai awal variabel loop
kondisi      = kondisi yang harus true agar loop berjalan terus
perubahan    = perubahan yang terjadi pada variabel loop setiap iterasi
*/

for (let halo = 1; halo <=3; halo++){
    console.log (halo)                  //outputnya 1,2,3,4,5
}
//halo = 1      : angka awal utk perulangan loop. 1 lebih kecil dari 3, maka loop berjalan
//halo <=3      : selama nilai variabel lebih kecil / sama dengan 3, lakukan terus loop
//halo++        : ini tanda utk berhenti. Tiap kali loop, nilai ditambah 1

//2. WHILE
/*Digunakan saat jumlah perulangan tidak diketahui

while (kondisi){
    console.log()
}
*/
let makan = 1
while (makan <=3){
    console.log (`${makan} kenyang`)     //output 1 kenyang, 2 kenyang, 3 kenyang
    makan++
}

//3. DO WHILE
/*Menjalankan kode dulu baru ngecek kondisi

do {                    
    console.log()
    variabel ++
} while (kondisi)

*/
let greeting = 1

do {
    console.log (`selamat pagi`)    //output selamat pagi 3 kali
    greeting++
} while (greeting <=3)

//4. FOR IN --> UNTUK TIPE DATA OBJECT
/* For In digunakan untuk mengiterasi properti object
atau index array
*/

//CONTOH MENGAMBIL PROPERTI UNTUK DIITERASI
const pegawai = {
    nama: 'John',
    umur: 29
}
for (let cekStatus in pegawai ){    //mengambil properti utk diiterasi
    console.log (cekStatus)         //output nama, umur 
}

//CONTOH MENGAMBIL VALUE UNTUK DIITERASI
let barang = {
    nama: 'penggorengan',
    merk: 'Yong Ma'
}
for (let stok in barang){           //mengambil value untuk diiterasi
    console.log (barang [stok])     //output penggorengan, yong ma
}

//⁡⁣⁣⁡⁣⁣⁢5. FOR OF --> UNTUK TIPE DATA STRING ATAU ARRAY
/* For of ialah untuk mengiterasi value pada tipe data string atau array⁡
*/

//FOR OF PADA STRING
let ejaan = 'fauzi'

for (let huruf of ejaan){           //mengiterasi huruf pada kata fauzi
    console.log (huruf)             //output f a u z i
}

//FOR OF PADA ARRAY
let belanja = ['sabun', 'sendal', 'buah']

for (let item of belanja){          //mengambil value data array
    console.log (item)              //output sabun, sendal, buah
}

//CONTOH LAIN FOR OF ARRAY
let sum = 0
const angka = [10,20,30]

for (list of angka){
    sum = sum + list        //menjumlahkan iterasi
}
    console.log (sum)       //output 60