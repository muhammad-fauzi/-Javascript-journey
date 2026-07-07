//TIPE DATA

/*
PRIMITIF
1. STRING
    Kumpulan karakter yang  digunakan untuk menyimpan dan memanipulasi teks. Cara buatnya menggunakan (""), ('), (`)
    contoh
*/  const nama = 'fauzi'
    const alamat = "Ciputat"
    const identitas = `${nama} 29 tahun`  //meggabungkan string menggunakan `${nama variabel}`
    
    console.log(nama, typeof nama) //typeof untuk menampilkan tipe data //output fauzi string
    console.log (identitas) //output fauzi 29 tahun

    //jika terdapat tanda petik satu dan tanda petik dua dalam satu kalimat */

    let ucapan = '"I think it\'s awesome!" he answered confidently'; 
    console.log(ucapan); 

    /*tambahkan garis miring terbalik \ pada kata yang terdapat tanda petik 
    agar tidak eror*/

    /*backslash juga berguna untuk mengabaikan simbol lain yang 
    menimbulkan ambigu di dalam string, 
    contohnya seperti backslash itu sendiri */

    console.log("Windows path: C:\\Program Files\\MyProject");
    //outpuntya Windows path: C:\Program Files\MyProject

    /*jika ingin menggabungkan 2 kata terpisah menjadi satu, tambahkan
    tanda (+) */
    let panggil = 'woyy';
    let sapaan = panggil + panggil;
    console.log (sapaan); //outputnya woyywoyy

    /*kita bisa menambahkan kalimat lain di dalam string 
    dengam menambahkan petik di bawah esc (` kalimat tambahan ${variabel{); */

    let namaSaya = "muhammad fauzi";
    console.log (`Halo, perkenalkan ${namaSaya}`); //output Halo, perkenalkan muhammad fauzi

/*
2. NUMBER
    Tipe data angka untuk menyimpan nilai numerik, bilangan bulat (integer), dan desimal (float)
    contoh
*/  const umur = 29.5

    console.log (umur, typeof umur) // output 29 'number'

/*
3. BOOLEAN
    Tipe data yang bernilai True atau False
    contoh
*/  const ismarried = true
    const output = ismarried

    console.log (output, typeof output) // output true 'boolean
/*

4. UNDEFINED
    Tipe data yang nilainya tidak disebutkan atau tidak diinisialisasi
    contoh
*/  var listrik;            //variabel const tidak bisa digunakan untuk undefined karena undefined bisa saja diisi dengan suatu nilai

    //listrik = 20          //ini mengisi undefined dengan tipe data number

    const tegangan = listrik

    console.log(listrik, typeof listrik)

/*
5. NULL
    Tipe data yang digunakan SEBAGAI ISTILAH untuk variabel yang belum dikasih nilai dan mereturn / mengacu pada object
    contoh
*/  let botol = null

    //botol = 'aqua'        //ini mengisi null dengan string
    console.log (botol, typeof botol)  //output null 'object'
/*

6. SYMBOL
    Tipe data yang unik, digunakan sebagai identifier unik untuk properti objek
    contoh
*/  const simbol = Symbol(20)      //tanda dalam kurung diisi dengan tipe data tertentu

    console.log (simbol, typeof simbol)  //output symbol (20), symbol

/*
7. BigInt (Big Integer)
    Tipe data untuk merepresentasikan angka yang sangat besar, melebihi batas tipe data Number
    contoh
*/  
    const angkaBesar = 2910246461467n   //tambahkan n diakhir jika menginginkan tipe data BigInt

    console.log(angkaBesar, typeof angkaBesar)

/*
REFERENCE
1. OBJECT
    Tipe data yang digunakan untuk menyimpan koleksi / variasi data dalam pasangan key-value, dibuat dengan  {} dan dipisahkan oleh koma
    contoh
*/  const anggota = {
    ketua : "fauzi",            //ketua = key
    wakil : "muzdalifah",       //fauzi = value
    jumlahPersonil : 20
}
    console.log(anggota, typeof anggota)  //output {ketua: 'fauzi', wakil: 'muzdalifah', jumlahPersonil: 20}

/*
2. ARRAY
    TIpe data yag berisi kumpulan data berurutan dan diakses melalui indeks, dibuat menggunakan []
    contoh
*/  const acak = ['Toyota', 3, true]

    console.log (acak, typeof acak)  //output (3) ['Toyota', 3, true] 'object'
    
/*
3. FUNCTION
    Tipe data blok kode yang dapat digunakan kembali dan dianggap sebagai object di Javascript. Dibuat dengan menambahkan function nama (){}
    contoh
*/  function fauziGanteng (){
    return "rezeki luas, makin dermawan"
    }
    const hasil = fauziGanteng  //kalo menambahkan () akan mengeprin nilai returnnya.

    console.log (hasil, typeof hasil) /* output ƒ fauziGanteng (){
    return "rezeki luas, makin dermawan"
    } 'function'
     */

/* PERBEDAAN TIPE DATA PRIMITIF DAN REFERENCE
    Tipe data primitif menyimpan nilai dari variabel sebelumnya, sehingga saat ada perubahan nilai variabel yang baru, nilainya tetap sama

    Sedangkan tipe data Reference, ia akan mengprint nilai data terbaru
    contoh
*/  //Primitif
    let a = 5
    let b = a

    a = 10
    console.log(b) //outputnya 5. meskipun di akhir nilai a berubah menjadi 10, variabel b tetap mengeprin nilai data a sebelumnya

    //reference
    let jenis1 = {
        mobil: 'Nissan'
    }
    let jenis2 = jenis1 

    jenis1.mobil = 'ferrari'      //ini cara merubah nilai sebuah key

    console.log(jenis2)  //output {mobil: 'ferrari'}. program mengeprin data terbaru