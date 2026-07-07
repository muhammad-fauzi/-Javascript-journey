//SWITCH CASE
/*
Switch case adalah menentukan suatu keputusan
dari banyak kondisi dan digunakan sebagai alternatif
if else yang terlalu banyak
*/

//CARA PENULISAN (SINTAK)
/*
switch (variabel){              

    case kondisi-1:
        console.log()
        break;              //break = digunakan utk menghentikan kode jika satu kasus telah cocok
    
    case kondisi-2:
        console.log()
        break;

    default:                //default = opsional, digunakan jika tidak ada kasus yg cocok. biasanya ditaruh diakhir
        console.log()
}
*/

//CONTOH
let hari = 1
let namaHari;

switch (hari){
    case 1:
    namaHari = 'senin'
    break;

    case 2:
    namaHari = 'selasa'
    break;

    case 3:
    namaHari = 'rabu'
    break;

    case 4:
    namaHari = 'kamis'
    break;

    case 5:
    namaHari = 'jumat'
    break;

    case 6:
    namaHari = 'sabtu'
    break;

    case 7:
    namaHari = 'minggu'
    break;

    default:
    namaHari = 'hari tidak ditemukan'

}
console.log (namaHari)          //output senin

//SWITCH CASE PADA OPERASI MATEMATIKA
let nilai = 50

switch (true){
    case nilai >= 60:
    console.log ('nilai c')
    break;

    case nilai >= 70:
    console.log ('nilai b')
    break;

    case nilai >= 80:
    console.log ('nilai a')
    break;

    default:
    console.log ('anda belom ujian atau tidak lulus')       //ini outputnya
}

/*PERBEDAAN IF ELSE DAN SWITCH CASE

IF ELSE                         SWITCH CASE
fleksibel                       lebih rapih utk banyak pilihan
bisa utk kondisi kompleks       cocok utk nilai spesifik
*/