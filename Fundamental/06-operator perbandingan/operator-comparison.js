//OPERATOR COMPARISON (PERBANDINGAN)

/* Digunakan untuk membandingkan dua nilai dan menghasilkan
nilai BOOLEAN (True / false)

    ==      (sama dengan, mengecek nilai)
    ===     (sama dengan, mengecek nilai dan tipe data)
    !=      (tidak sama dengan secara nilai)
    !==     (tidak sama dengan secara nilai dan tipe data)
    >       (lebih besar dari)
    <       (lebih kecil dari)
    >=      (lebih besar atau sama dengan)
    <=      (lebih kecil atau sama dengan)
*/

//1. SAMA DENGAN, MENGECEK NILAI (==)
let a = "3"             //string
let b = 3               //number
console.log (a==b)      //output true

//2. SAMA DENGAN, MENGECEK NILAI DAN TIPE DATA (===)
let c = "5"             //string
let d = 5               //number
console.log (c === d)   //output false, karena beda tipe data

//3. TIDAK SAMA DENGAN, SECARA NILAI (!=)
let e = "5"              //string
let f = "10"             //string
console.log (e != f)     //output true, karena keduanya tidak sama secara nilai

//4. TIDAK SAMA DENGAN, SECARA NILAI DAN TIPE DATA (!==)
let g = "20"
let h = 20
console.log (g !== h)    //output true, meskipun sama nilainya, tpi keduanya tidak sama secara tipe data

//5. LEBIH BESAR (>)
let i = 10
let j = 3
console.log (i > j)       //output true

//6. LEBIH KECIL (<)
let l = 9
let m = 10
console.log (l < m)       //output true

//7. LEBIH BESAR ATAU SAMA DENGAN (>=)
let nilai_minimal = 80
let nilai = 80

if (nilai >= nilai_minimal){
    console.log ('lulus')       //ini outputnya
}
else {
    console.log ('tidak lulus')  
}

//8. LEBIH KECIL ATAU SAMA DENGAN (<=)
let tinggi = 168

if (tinggi <= 165){
    console.log ('boleh masuk')
}
else {
    console.log ('maaf, terlalu tinggi')    //ini outputnya    
}