// alert('Assalamu\'alaikum') #memunculkan pop up

//SHORTCUT

/* 
1. ctrl + shift + i pada browser = memunculkan laman console developer di browser
2. alt + z = tampilan vs code ke bawah agar mudah dibaca kodenya
3. ctrl + // = bikin komentar
4. ctrl + d = milih beberapa elemen untuk diedit sekaligus
5. alt + arah = untuk memindahkan elemen
*/

//VARIABEL
/* Variabel adalah wadah yang digunakan untuk menyimpan data yang dapat berubah sepanjang program berjalan. Variabel ada 3
1. var      : bisa mencangkup diluar jangkauannya dan nilainya bisa diubah
2. let      : hanya bisa digunakan di dalam jangkauannya dan nilainnya bisa diubah
3. const    : ada scoupenya juga dan tidak bisa diubah nilainya
*/

//CONTOH VARIABEL
//pembuktian cara penggunaan var, let, const

//VAR
if (true){              //tanda kurung kurawal ialah scope (jaungauan)
    var nama = 'fauzi'
}                       //scope (jangkauan)
console.log('var: ', nama)       //var bisa mengeprint nama meskipun di luar scope
//output fauzi

//LET
if (true){              //tanda kurung kurawal ialah scope (jaungauan)
    let nama = 'fauzi'
    console.log('let: ', nama)   //ini bisa diprint. outputnya fauzi  
}                       //scope (jangkauan)
// console.log(nama)       //let hanya bisa mengeprint nama di dalam scope. jika diprint outputnya error

//CONST
if (true){              //tanda kurung kurawal ialah scope (jaungauan)
    const lokasi = 'jepang'
    console.log('const ', lokasi)   
    // outputnya jepang 
}
  // console.log('const ', lokasi) 
  //outputnya error karena diluar scoupe  


//PEMBUKTIAN MERUBAH NILAI VAR, LET, CONST

if (true){              //tanda kurung kurawal ialah scope (jaungkauan)
    var job = 'engineer'
    job     = 'software engineer'

    let nama = 'fauzi'
    nama = 'muhammad'
    console.log('ubah  fauzi jadi: ' ,nama)   //outputnya muhammad 
}     
    console.log (job)   //outputnya software engineer

if (true){              //tanda kurung kurawal ialah scope (jaungkauan)
    const job = 'engineer'
    //job     = 'software engineer'  //kalo komentar dinonaktifkan, outputnya error
    console.log(job) 
} 