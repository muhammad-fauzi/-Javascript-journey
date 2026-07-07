//OPERATOR LOGIKA

/* Digunakan untuk membandingkan ekspresi logika dan
menghasilkan nilai boolean

    && = AND    (menghasilkan nilai true jika 2 variable bernilai true)
    || = OR     (menghasilkan nilai true jika salah satu variable bernilai true)
    !  = NOT    (hasil kebalikan dari sebuah nilai variabel)
*/

//1. OPERATOR AND (&&)
let a = true
let b = true
console.log (a && b)    //output true

//2. OPERATOR OR (||)
let c = true
let d = false
console.log (c || d)    //output true

let e = true
let result = !e
console.log (result)    //output false