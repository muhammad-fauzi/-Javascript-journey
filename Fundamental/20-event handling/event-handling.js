//EVENT HANDLING
/*
Digunakan untuk menangkap dan merespons interaksi pengguna,
seperti klik, gerakan mouse, input keyboard, dll

Event adalah kejadian di halaman web, seperti pengisian formulir,
perguliran halaman, klik tombol, itu semua ditangani oleh javascript

Event Handling menggunakan EVENT LISTENER, yaitu mekanisme utk menangkap event
dan menjalankan fungsi tertentu saat event terjadi

CARA MENAMBAHKAN EVENT LISTENER
    1. Menggunakan onlick (Inline Event Handling di html)
    <button onlick ="alert ('button clicked')"> KLIK </button>

    2. Menggunakan addEventListener (di javascript)
    const button = document.querySelector ('button)
    button.addEventListener ('click', 
    ()=>{
        alert ('pagi semua')
        }
    )

JENIS-JENIS EVENT
1. MOUSE EVENT
    click           = ketika elemen diklik
    dblclick        = ketika elemen diklick 2 kali
    mouseover       = ketika mouse berada di atas elemen (hover)
    mouseout        = ketika mouse meninggalkan element

2. KEYBOARD EVENT
    keydown         = ketika sebuah tombol ditekan
    keyup           = ketika sebuah tombol dilepaskan
    keypress        = ketika sebuah tombol ditekan dan dilepaskan lagi

3. FORM EVENT
    submit          = ketika form dikirim
    change          = ketika nilai elemen input berubah
    focus           = ketika elemen form mendapat fokus
    blur            = ketika elemen form kehilangan fokus

4. WINDOW EVENT
    load            = ketika halaman selesai dimuat
    resize          = ketika ukuran jendela berubah
    scroll          = ketika halaman digulir
*/

//CONTOH PAKAI ADD EVENT LISTENER
const submitBtn = document.getElementById ('submit')
submitBtn.addEventListener ('click',
    ()=>{
        const newText = document.createElement ('h4')
        newText.textContent = 'SEMANGAT TERUS FAUZI, NEXT KITA TINGGAL DI EROPA'

        const appearText = document.querySelector ('.submitText')
        appearText.appendChild (newText)
    }
)
