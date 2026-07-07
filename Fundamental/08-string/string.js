//STRING

/* String adalah tipe data primitif yang digunakan untuk penulisan teks.
String dapat ditulis dengan petik satu ('...'), petik dua ("..."), atau dengan
backtikcs (`...`)
*/

//CONTOH
let petik_satu = 'hello'
let petik_dua = "apa kabar"
let backtikcs = `alhamdulillah`
    console.log (petik_satu, petik_dua, backtikcs) //output hello apa kabar alhamdulillah

//MENGGABUNGKAN STRING
let firstName = 'Muhammad'
let secondName = 'fauzi'
let fullName1 = firstName + ' ' +secondName
    console.log(fullName1)       //output Muhammad fauzi

let fullName2 = `${firstName} ${secondName}`
    console.log (fullName2)      //output Muhammad fauzi


//MENGAKSES KARAKTER DALAM STRING
/*
    karakter di dalam string memiliki indeks yang dimulai dari 0
    karakter bisa diakses dalam notasi bracket ( [] )
*/
//CONTOH
let karakter = 'IndoNesia'
    console.log (karakter [0])      //output I
    console.log (karakter[5])       //output e

//PROPERTI PADA STRING
/*
    Properti adalah sifat atau informasi si string
    Ditulis TANPA tanda kurung ()
*/
//CONTOH
//1-  .length (Menghitung panjang string)
let teks = 'Zombie attacked'
    console.log (teks.length)       //output 15 (spasi dihitung)

//METHOD PADA STRING
/*
    Method adalah aksi yang dilakukan ke string
    Ditulis pakai tanda kurung ()
*/
//CONTOH
//1-  .toUpperCase()    = mengubah karakter jadi huruf besar
let info = 'botolMinum'
    console.log (info.toUpperCase())    //output BOTOLMINUM

//2-  .toLowerCase()    = mengubah karakter jadi huruf kecil    
let tulis = 'ANAK DEWASA'
    console.log (tulis.toLowerCase())   //output anak dewasa

//3-  .trim()    = menghapus spasi
let bacaan = '   fauzi    '
    console.log (bacaan.trim())         //output fauzi (tanpa spasi)

//4-  .slice()   = ambil sebagian teks
let tempat = 'Tempat Terindah'
    console.log(tempat.slice(0,4))      //output Temp

//5-  .includes()   = mengecek apakah ada kata yang dicari atau tidak. hasilnya boolean
let cek = 'rumah makan padang'
    console.log(cek.includes('padang'))    //output true
    console.log(cek.includes('medan'))     //output false

//6-  .replace()    = menganti teks dgn teks lain
let ubah = 'Indonesia ramah'
    console.log (ubah.replace('ramah','indah'))     //output indonesia indah

//7-  .split ()     = memecah string menjadi array berdasarkan separator yang diberikan di split
let pisah = 'Jakarta-Ibu-Kota'
let jakartaPisah = pisah.split('-')
    console.log (jakartaPisah)      //output ['Jakarta', 'Ibu', 'Kota']

let nama = 'Sponge Bob Square Pants'
let namaPisah = nama.split (' ')
    console.log (namaPisah[3])      //output Pants

//8-  .join()       = menggabungkan elemen di dalam array menjadi string
let jenis = ['manusia','tumbuhan', 'hewan']
let gabung = jenis.join('-')
    console.log (gabung)            //output manusia-tumbuhan-hewan 

//9- .indexOf()     = mencari index dari teks yang ada di dalam string berdasarkan 
                    //  urutan pertama teks. Kalo teks tersebut gak ada, indexnya -1
let legacy = 'the king of the north'
    console.log (legacy.indexOf('king'))    //output 4, karena huruf k ada di index 4
    console.log (legacy.indexOf('south'))   //output -1, karena kata south gak ada di string

//10-  lastindexOf() =  mencari index dari kemunculan terakhir teks yang ada di string
let abjad = 'abcd efgh ijkl'
    console.log(abjad.lastIndexOf('efgh'))  //output 5, karena huruf h ada di index 5 dihitung dari L

