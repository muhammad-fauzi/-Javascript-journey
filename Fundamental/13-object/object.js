//OBJECT
/*
Object adalah tipe data yang digunakan untuk menyimpan data
atau entitas yang lebih komplek dalam bentuk

variabel = {
key : value

}

*/
//MEMBUAT OBJECT
//1. OBJECT LITERAL
let kendaraan = {
    motor: 'honda',
    kepemilikan: 'pribadi',
    tahun: 2001
}
console.log (kendaraan)
//output {motor: 'honda', kepemilikan: 'pribadi', tahun: 2001}

//2. MENGGUNAKAN CONSTRUCTOR NEW OBJECT
let buku = new Object()
    buku.jenis= 'pengetahuan',
    buku.penulis= 'Kartika',
    buku.terbit= 2003
console.log (buku)
//output {jenis: 'pengetahuan', penulis: 'Kartika', terbit: 2003}

//MENGAKSES PROPERTI / KEY DALAM OBJECT
//1. MENGGUNAKAN TITIK (DOT NOTATION)
let handphone ={
    merk : 'Iphone',
    warna: 'hitam'
}
console.log (handphone.merk)        //output iphone

//2. MENGGUNAKAN KURUNG PETAK [] (BRACKET NOTATION)
/*Bracket Notation sangat berguna saat properti mengandung spasi atau
karakter khusus dan properti di dalam bracket tersebut harus dikasih
tanda petik [" "]*/

let barang = {
    nama: 'tepung terigu',
    berat: '1 kg'
}
console.log (barang['nama'])        //output tepung terigu
//properti nama dikasih tanda petik

//MENAMBAH, MENGUBAH, DAN MENGHAPUS PROPERTI
let tiket = {
    kendaraan: 'kereta',
    harga : 200
}
tiket.keberangkatan = 'Senin'       //MENAMBAH PROPERTI
    console.log (tiket)             //output {kendaraan: 'kereta', harga: 200, keberangkatan: 'Senin'}

tiket.harga = 300                   //MERUBAH PROPERTI PAKAI TITIK
    console.log (tiket)             //output {kendaraan: 'kereta', harga: 300}

tiket ['kendaraan'] = 'kapal laut'  //MERUBAH PROPERTI PAKAI BRACKET
    console.log (tiket)             //output {kendaraan: 'kapal laut', harga: 300}

delete tiket.harga;                 //MENGHAPUS PROPERTI PAKAI DELETE
    console.log(tiket)              //output {kendaraan: 'kapal laut', keberangkatan: 'Senin'}

//DESTRUCTURING OBJECT (CARA LAIN PENULISAN OBJECT)

//SEBELUM DESTRUCTURING
let kegiatan ={
    nama    : 'buka bersama',
    tempat  : 'cafe',
    undangan: '20 orang'
}
console.log (kegiatan)              //output {nama: 'buka bersama', tempat: 'cafe', undangan: '20 orang'}

//SETELAH DESTRUCTURING
let {tempat, undangan} = kegiatan;  //penulisan propertinya menggunakan kurung kurawal
    console.log (tempat)            //output cafe
    console.log (undangan)          //output 20 otang

//NESTED OBJECT (OBJECT DI DALAM OBJECT)
let universitas = {
    nama    : 'Universitas Indonesia',
    kota    : 'Depok',
    fakultas : {
        nama : 'fakultas ilmu budaya',
        jurusan: 'sastra arab'
    }
}
console.log(universitas.fakultas.jurusan)   //output sastra arab