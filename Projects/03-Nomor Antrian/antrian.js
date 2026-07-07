/*
    <div id="container">
        <div id="boxcontainer">
            <div id="content">
                <h3>COUNTER</h3>
                <!--disini muncul nomor antrian-->
            </div>
            <div id="counterbtn">
                <button class="prev">Previous</button>
                <button class="reset">Reset</button>
                <button class="next">Next</button>
            </div>
        </div>
    </div>

1. Layar menampilkan nomor antrian
    - ada nomor antrian 
    - ada tanggal antrian

2. saat user klik prev, nomor antrian akan mundur
3. saat user klik reset, nomor antrian berubah jadi 0
3. saat user klik next, nomor antrian nambah
*/

const prevbutton = document.querySelector('#counterbtn .prev')
const reset = document.querySelector('#counterbtn .reset')
const nextbutton = document.querySelector('#counterbtn .next')

let nomorditampilkan = document.querySelector ('#content .nomorditampilkan')

const tanggalantrian = new Date()
const tanggalcontent = document.querySelector('#content .tanggal')
const arrayhari = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu'
]
let hari = arrayhari[tanggalantrian.getDay()]
let tanggal = tanggalantrian.getDate()
let bulan = tanggalantrian.getMonth() +1
let tahun = tanggalantrian.getFullYear()

const tanggalditampilkan = document.createElement ('h3')
tanggalditampilkan.textContent = `${hari}, ${tanggal} - ${bulan} - ${tahun}`

tanggalcontent.appendChild (tanggalditampilkan)

let nomorantrian = 0
prevbutton.addEventListener ('click',
    ()=>{
        nomorantrian--;
        nomorditampilkan.textContent = nomorantrian
    }
)
reset.addEventListener('click',
    ()=>{
        nomorantrian=0
        nomorditampilkan.textContent = nomorantrian
    }
)
nextbutton.addEventListener ('click',
    ()=>{
        nomorantrian++;
        nomorditampilkan.textContent = nomorantrian
    }
)