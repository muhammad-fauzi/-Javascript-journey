//DOCUMENT OBJECT MODEL (DOM)
/*
DOM adalah DOCUMENT OBJECT MODEL, yaitu fitur javascript
untuk memanipulasi HTML.

Semua elemen dalam DOM disebut NODE
Adapun ROOT NODE ialah awal / akar semua node

Contoh;
    (div)               //disebut ROOT NODE
        (section)       // NODE
            (h1)        // NODE
*/

//CONTOH PERCOBAAN MENGKASES HTML
console.log (document.querySelector('li'))          //output li
console.log (document.querySelectorAll('li'))       //output NodeList(3) [li, li, li]
    //document          = kata kunci untuk mengakses html
    //querySelector     = mengakses elemen pertama dalam parent
    //querySelectorAll  = mengakses semua elemen dalam parent

//MENGAKSES DOM
/*
    1. getElementById()           = mengakses elemen berdasakan id
    2. getElementsByClassName()   = mengakses elemen berdasarkan class, perlu [0] index
    3. getElementsByTageName()    = mengakses elemen berdasarkan tag, perlu [0] index
    4. querySelector()            = mengakses elemen menggunakan selector css
    5. querySelectorAll()         = mengakses semua elemen yang sesuai dengan selector css, perlu [0] index
    6. createElement()            = membuat elemen HTML baru
    7. appendChild()              = menambahkan elemen ke HTML
    8. remove()                   = menghapus element
    9. setAttribute()             = menambah / mengubah attribute HTML
    10. addEventListener()        = menambahkan event
*/


//1. getElementById()           = mengakses elemen berdasakan id
console.log (document.getElementById('header1'))        //memanggil langsung
//output h1#header1
let header1 = document.getElementById('header1')        //memanggil lewat variabel      
    console.log (header1)                               
    //output <h1 id="header1"> Header-1</h1>

//2. getElementsByClassName()   = mengakses elemen berdasarkan class yang sama
const paragraf1 = document.getElementsByClassName('paragraf1')
    console.log (paragraf1)
    //output HTMLCollection [p.paragraf1]

//3. getElementsByTageName()    = mengakses elemen berdasarkan tag
const ul = document.getElementsByTagName ('ul')
    console.log (ul)
    //output HTMLCollection [ul]

const li = document.getElementsByTagName ('li')
    console.log (li)
    //output HTMLCollection(3) [li, li, li]

    console.log (li[1])         //mengakses salah satu tag dengan []
    //output <li> item 2

//4. querySelector()            = mengakses elemen yang pertama menggunakan selector css
const query1 = document.querySelector ('li')    //hanya ngambil elemen yg paling atas
    console.log (query1)
    //output <li> item 1

const query2 = document.querySelector ('li#text2')       //mengakses li id dengan #
    console.log (query2)
    //output li#text2 -- item 2

const query3 = document.querySelector ('li.text3')      //mengakses li class dengan titik
    console.log (query3)
    //output li.text3 -- item 2

//5. querySelectorAll()         = mengakses semua elemen yang sesuai dengan selector css
const query4 = document.querySelectorAll ('li')
    console.log (query4)
    //output NodeList(3) [li, li, li]


//6. createElement()            = membuat elemen HTML baru
let baru = document.createElement ('h2')
    console.log (baru)
    //output <h2></h2>
    // ini hanya muncul di console saja, belum masuk html

//7. appendChild()              = menambahkan elemen ke HTML dan muncul paling bawah
const tambah = document.createElement('h1')
tambah.innerHTML = 'BERITA TERKINI'         //ini muncul di browser
console.log (tambah)                        //ini muncul di console

//const masukin = document.getElementsByTagName('section')[0]     //gunakan [0] saat menggunakan getelementbytagname utk appendchild
const masukin = document.querySelector('section')                 //queryselector lebih enak diapakai untuk akses tag saat appendchild
masukin.appendChild (tambah)
console.log (masukin)
    //output BERITA TERKINI muncul di browser html meskipun hanya ditulis di console


//8. remove()                   = menghapus element
const habis = document.getElementById ('kelakuan').querySelector('h1')
habis.remove()
    //output tulisan ADUHH hilang di browser meskipun di kode html masih ada

//9. setAttribute()             = menambah / mengubah attribute HTML
/*
kata kunci:
    src     = gambar
    href    = link
    class   = class css
    id      = id element
    title   = tooltip
*/
const link = document.getElementById ('google')

link.setAttribute(
    "href",                 //tambahkan koma
    "https://google.com"
)
//output di browser, tulisan akses google bisa berubah menjadi link


//10. addEventListener()        = menambahkan event
/* 
Contoh Event        fungsi
    'click'         = klik
    'input'         = mengetik
    'mouseover'     = hover mouse
    'submit'        = submit form
*/
const tombol = document.getElementById ('btn')

tombol.addEventListener('click',
    function (){                        //function digunakan saat ada event dilakukan, bukan saat browser reload langsung dijalankan
        console.log ('tombol diklik')
    }
)
//output, saat tombol di browser diklik, muncul tulisan 'tombol diklik' di console


//PERCOBAAN UBAH TULISAN SEKALI KLIK DAN TIDAK KEMBALI KE TULISAN AWAL
const coba = document.getElementById('pagi')
const tes = document.querySelector('button.pencet')
    console.log (tes)

tes.addEventListener( 
    'click',
    function (){
        pagi.innerHTML = 'Selamat Malam'
    }
)

//PERCOBAAN UBAH TULISAN TIAP KALI DIKLIK TULISAN BERUBAH
const love = document.getElementById ('cinta')
const answer = document.querySelector('button.tombolJawaban')

answer.addEventListener('click',
    function(){
    if(cinta.innerHTML === 'Kamu sayang gak sama aku?'){
    
        cinta.innerHTML = 'Pastilah, Aku sayang kamu'
    }
    else{
        cinta.innerHTML = 'Kamu sayang gak sama aku?'
    }
}
)

//MEMANIPULASI ELEMEN
/*
Yaitu mengubah gaya atau isi konten

1. Mengubah Konten
    nama element.textContent    = mengubah isi kontennya aja
    nama element.innerHTML      = mengubah isi konten beserta tagname nya

2. Mengubah Atribut
    nama element.setAttribute (attribute, value)

3. Mengubah gaya
    nama element.style.property = value
*/

//MENGUBAH KONTEN
//1. TEXT CONTENT
const ubahKonten = document.getElementById ('cover')
ubahKonten.textContent = 'Ini Judul Baru'
    console.log (ubahKonten)
    //output browser: ini judul baru
    //output console: <h1 id="cover">Ini Judul Baru</h1>

//2. INNER HTML
const ubahInner = document.getElementById ('depan')
    ubahInner.innerHTML = '<h2>Ini judul dengan inner HTML</h2>'
    console.log(ubahInner)
    //output browser: 'Ini judul dengan inner HTML' berubah menjadi h2, padahal sebelumnya 
    
//MENGUBAH ATTRIBUTE
/*
    src     = gambar
    href    = link
    class   = class css
    id      = id element
    title   = tooltip
*/
const paragraf = document.getElementById ('paragraf')
paragraf.setAttribute('class', 'bg-red')        //ini menambahkan attribut class yang berupa style css  
//output browser, background teks jadi merah. 

//MENGUBAH GAYA
const ubahGaya = document.querySelector ('li.ukuranfont')
ubahGaya.style.backgroundColor = 'blue'
//output browser, background teks jadi biru

//MENAMBAH SEBUAH ELEMENT SEBELUM DAN SESUDAH H2
const akar = document.getElementById('akar')            //1.panggil dulu si div akar
    console.log (akar)

        //menambah elemen sebelum h2 pakai INSERT BEFORE
const sebelum = document.createElement ('h1')           //2. bikin variabel baru utk create Element. Elemen barunya berupa h1
sebelum.textContent =' ini element sebelum h2'          //3. masukin konten ke dalam create elemen
akar.insertBefore (sebelum, acuan)                      //4. mengeprint konten create Elemen sebelum h2
    console.log (sebelum)                               //5. ini utk ngecek bahwa elemen h1 sudah dicetak di console dan browser sblm h2
       
        //menambah elemen sesudah h2 pakai APPENDCHILD
const sesudah = document.createElement ('h3')
sesudah.textContent = 'ini element sesudah h2'
akar.appendChild(sesudah)
    console.log (sesudah)  

//MENGHAPUS ELEMEN DI DALAM DIV 
const dihapus = document.querySelector ('.hapus')           //1. ambil div class hapus
const deletes = document.querySelector('.kalimathapus')     //2. ambil elemen dlm div class berupa p class
dihapus.removeChild (deletes)                               //3. eksekusi hapus elemen
//output tulisan 'kalimat ini akan dihapus' sudah dihapus di browser

//DOM TRAVERSAL
/*
DOM Traversal adalah proses menjelajahi DOM TREE (hirarki DOM) untuk 
mencari elemen tertentu. pencarian bisa lewat element orang tua (elemen akar),
elemen anak (elemen dahan), elemen saudara (elemen samping / ranting)

    1- parentNode               : mencari tau elemen orang tua
    2- childNodes              : mengambil Node list semua anak elemen
    3- firstChild / lastChild   : mengambil elemen anak pertama / terakhir
    4- nextSibling / previousSibling    : mengambil elemen saudara berikutnya / sebelumnya
*/

//1- parentNode               : mencari tahu elemen orang tua
const item1 = document.getElementById ('item-1')
    console.log (item1.parentNode)      //output <ul id="list-item">. ini untuk melihat item-1 itu element parent (elemen org tuanya) apa
    console.log (item1.parentElement)   //output <ul id="list-item">. ini hanya ngambil elemen saja

//2- childNodes              : mengambil Node list semua anak elemen
const listItem = document.getElementById ('list-item')
    console.log (listItem.childNodes)
    //output NodeList(7) [text, li#item-1, text, li#item-2, text, li#item-3, text]
    //childNodes menghitung spasi juga yang ada di antara elemen li dan dianggap lebih ribet

    console.log (listItem.children)
    //output HTMLCollection(3) [li#item-1, li#item-2, li#item-3, item-1: li#item-1, item-2: li#item-2, item-3: li#item-3]
    //outputnya ini beda dengan childnodes. kalo children bentuknya html collection

//3- firstChild / lastChild   : mengambil elemen anak pertama / terakhir
    console.log (listItem.firstChild)       //output #text
    console.log (listItem.firstElementChild)  //output  <li id="item-1">item-1</li>

    console.log (listItem.lastChild)       //output #text
    console.log (listItem.lastElementChild)  //output  <li id="item-3">item-3</li>

//4- nextSibling / previousSibling    : mengambil elemen saudara berikutnya / sebelumnya
    console.log (listItem.nextSibling)              //output #text
    console.log (listItem.nextElementSibling)       //output <script src="dom.js"></script>

    console.log (listItem.previousSibling)          //output #text
    console.log (listItem.previousElementSibling)   //output <p>paragraf DOM TRAVERSAL</p>