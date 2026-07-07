/*
    <div id="tombolsoal">
        <button class="soal1">1</button>
        <button class="soal2">2</button>
        <button class="soal3">3</button>
    </div>
*/
//1. ada tombol angka 
    //akses semua tombol
const soal1 = document.querySelector('.soal1');
const soal2 = document.querySelector('.soal2');
const soal3 = document.querySelector('.soal3');

//Bikin variabel penampung di luar function
const pertanyaansemua = document.getElementById ('pertanyaan')


soal1.addEventListener('click',() => {

//SOAL NOMOR 1
    const pertanyaan1 = document.createElement('p');
    pertanyaan1.textContent = '1. Apa ibukota Indonesia?';
    document.getElementById('pertanyaan').appendChild(pertanyaan1);

//PILIHAN SOAL NOMOR 1 A
    const pilihan1A = document.createElement ('input')
    pilihan1A.type = 'radio'
    pilihan1A.id = 'pilihan1A'
    pilihan1A.name = 'jawabansoal1'  //pemberian name yg sama utk pilihan A dan B berfungsi agar tombol radio hanya bisa memilih salah satu jawaban saja

    const tekspilihan1A = document.createElement ('span')
    tekspilihan1A.textContent = 'Jakarta'

    pertanyaansemua.appendChild(pilihan1A)
    pertanyaansemua.appendChild(tekspilihan1A)
    
//PILIHAN SOAL NOMOR 1 B
    const pilihan1B = document.createElement ('input')
    pilihan1B.type = 'radio'
    pilihan1B.id = 'pilihan1B'
    pilihan1B.name = 'jawabansoal1'   

    const tekspilihan1B = document.createElement ('span')
    tekspilihan1B.textContent = 'Bandung'
    
    pertanyaansemua.appendChild(pilihan1B)
    pertanyaansemua.appendChild(tekspilihan1B)
    
    soal1.disabled = true;  //menontaktifkan tombol soal agar berfungsi sekali klik
})
soal2.addEventListener('click',() => {
    const pertanyaan2 = document.createElement('p');
    pertanyaan2.textContent = '2. Apa ibukota Amerika Serikat?';
    document.getElementById('pertanyaan').appendChild(pertanyaan2);

    //PILIHAN SOAL NOMOR 2 A
    const pilihan2A = document.createElement ('input')
    pilihan2A.type = 'radio'
    pilihan2A.id = 'pilihan2A'
    pilihan2A.name = 'jawabansoal2'  //pemberian name yg sama utk pilihan A dan B berfungsi agar tombol radio hanya bisa memilih salah satu jawaban saja

    const tekspilihan2A = document.createElement ('span')
    tekspilihan2A.textContent = 'Washington'

    pertanyaansemua.appendChild(pilihan2A)
    pertanyaansemua.appendChild(tekspilihan2A)
    
//PILIHAN SOAL NOMOR 2 B
    const pilihan2B = document.createElement ('input')
    pilihan2B.type = 'radio'
    pilihan2B.id = 'pilihan2B'
    pilihan2B.name = 'jawabansoal2'   

    const tekspilihan2B = document.createElement ('span')
    tekspilihan2B.textContent = 'San Fransisco'
    
    pertanyaansemua.appendChild(pilihan2B)
    pertanyaansemua.appendChild(tekspilihan2B)
    
    soal2.disabled = true;  //menontaktifkan tombol soal agar berfungsi sekali klik
})
soal3.addEventListener('click',() => {
    const pertanyaan3 = document.createElement('p');
    pertanyaan3.textContent = '3. Apa ibukota Jepang?';
    document.getElementById('pertanyaan').appendChild(pertanyaan3);

    //PILIHAN SOAL NOMOR 3 A
    const pilihan3A = document.createElement ('input')
    pilihan3A.type = 'radio'
    pilihan3A.id = 'pilihan3A'
    pilihan3A.name = 'jawabansoal3'  //pemberian name yg sama utk pilihan A dan B berfungsi agar tombol radio hanya bisa memilih salah satu jawaban saja

    const tekspilihan3A = document.createElement ('span')
    tekspilihan3A.textContent = 'Osaka'

    pertanyaansemua.appendChild(pilihan3A)
    pertanyaansemua.appendChild(tekspilihan3A)
    
//PILIHAN SOAL NOMOR 3 B
    const pilihan3B = document.createElement ('input')
    pilihan3B.type = 'radio'
    pilihan3B.id = 'pilihan3B'
    pilihan3B.name = 'jawabansoal3'   

    const tekspilihan3B = document.createElement ('span')
    tekspilihan3B.textContent = 'Tokyo'
    
    pertanyaansemua.appendChild(pilihan3B)
    pertanyaansemua.appendChild(tekspilihan3B)
    
    soal3.disabled = true;  //menontaktifkan tombol soal agar berfungsi sekali klik
    
    //Bikin tombol selesai
    const selesai = document.createElement ('button')
    selesai.textContent = 'Selesai'

    const tombolselesai = document.getElementById ('tombolselesai')
    tombolselesai.appendChild(selesai)


    selesai.addEventListener('click',
        ()=>{
            let konfirmasi = 
            confirm('apakah anda yakin ingin mengakhiri ujian?')

            if (konfirmasi === true){

                let nilai = 0

                //soal 1
                if (document.getElementById ('pilihan1A').checked){
                    nilai++
                }

                //soal 2
                if (document.getElementById ('pilihan2A').checked){
                    nilai++
                }

                //soal3
                if (document.getElementById ('pilihan3B').checked){
                    nilai++
                }
            alert (`Skor kamu = ${nilai}/3`) 
            }
            
        }
    )

})

//2. user pencet tombol angka
    //pakai addEvent & function


//3. saat tombol angka dipencet, muncul pertanyaan dan pilihan ganda (ini createElement)
//4. user memilih jawaban yang dianggap benar
//5. setelah selesai, user pencet tombol selesai
//6. ketika tombol selesai dipencet, akan ada hasil mana jawaban yang benar dan salah
//7. saat tombol selesai dipencet, juga ada nilai dari pertanyaan yang benar
//8. saat tombol selesai dipencet, ada tombol ulangi simualasi soal. kemudian soal muncul secara acak