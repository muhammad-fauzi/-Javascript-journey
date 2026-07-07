/*
    <div id="container">
        <div id="boxcontainer">
            <div id="judul">
                <h1>Daftar Belanja</h1>
                <h3 class="tanggal"> 
                    <!--disini ada tanggal belanja-->
                </h3>
            </div>
            <div id = "kolominput">
                <input id="daftar" type="text" placeholder="Masukkan daftar belanja"">
                <button id="tambah">Tambah</button>
            </div>
            <ul id="barangbelanja">
                <!--di sini muncul li dan tombol delete daftar barang belanja-->
            </ul>
        </div>
    </div>
*/
/*1. user input daftar belanjaan
    - akses input
    - akses button
    - jika input dan tombol diklik kosong, tampilkan alert "silakan masukkan daftar belanja"
    - hilangkan spasi di awal dan akhir kata pakai .trim
    - hentikan program jika inputnya kosong

2. setelah input dimasukkan, user klik tombol
    - akses ul
    - muncul ul dan li dan munculkan kan daftar yang diinput user
    - munculkan juga tombol delete di samping li

3. saat tombol delete dipencet
    - hapus daftar belanja yang dituju
    `
*/
const input = document.getElementById ('daftar')        //akses inpun
const button = document.getElementById ('tambah')       //akses button

const belanja = document.getElementById ('barangbelanja') //ul
const jadwal = document.getElementById ('judul')

//Bikin tanggal
const tanggalbelanja = new Date ()

const arrayhari = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu'
    ]
const hari = arrayhari[tanggalbelanja.getDay()]
const tanggal = tanggalbelanja.getDate()
const bulan = tanggalbelanja.getMonth() +1
const tahun = tanggalbelanja.getFullYear()


const bikintanggal = document.createElement ('h4')
bikintanggal.textContent = `${hari}, ${tanggal}/${bulan}/${tahun}`;

jadwal.appendChild (bikintanggal)

function tambahbarang(){

        const teksInput = input.value;      //bikin variabel baru utk mengatur input value

        if (teksInput.trim () ===''){       //ngecek apakah kolom input diisi atau tidak. Kalo tidak diisi, maka jalankan

            let teksAlert = document.getElementById('pesan-error')     //bikin variabel utk id bayangan

            if (!teksAlert){    //ngecek apakah id bayangan ada di html atau tidak. Kalo tidak ada (dan emang gak ada), maka jalankan

                teksAlert = document.createElement ('p')
                teksAlert.textContent = 'Silakan masukkan daftar belanja'
                teksAlert.style.color = 'red'
                teksAlert.id = 'pesan-error'

                document.getElementById ('kolominput').appendChild (teksAlert)
                //langsung masukin di id kolominput tanpa harus bikin variabel dulu
            }
            return;
        }        

        //Input daftar belanjaan
        let teksBelanja = document.createElement ('li')
        teksBelanja.textContent = teksInput
        belanja.appendChild(teksBelanja)

        input.value = ''    //ngosongin kembali kolom input setelah ditampilkan
    
        //Bikin tombol delete
        const hapus = document.createElement ('button')
        hapus.textContent = '✕'
        hapus.id = 'deletebtn'

        teksBelanja.appendChild (hapus)   //masukin tombol delete ke samping li
        
        hapus.addEventListener ('click',
            ()=>{
                teksBelanja.remove()
            }
        )
    }

//input daftar belanjaan pakai klik
button.addEventListener ('click', tambahbarang) 

//input daftar belanjaan pakai enter
input.addEventListener ('keydown',
    (event) => {
        if (event.key === 'Enter'){
            tambahbarang()
        }
    }
)
