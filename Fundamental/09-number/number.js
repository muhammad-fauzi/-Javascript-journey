//⁡⁣⁣⁢NUMBER⁡
/* 
⁡⁣⁢⁣Number ialah tipe data yang digunakan untuk merepresentasikan angka, baik itu
berupa bilangan bulat (integer), pecahan (floating), atau bilangan khusus 
seperti infinity dan NaN (Not a Number) ⁡
*/

//⁡⁣⁣⁡⁣⁣⁢JENIS NUMBER⁡
let bilanganBulat = 5
    console.log(bilanganBulat)      //output 5

let bilanganPecahan = 27.5
    console.log(bilanganPecahan)    //output 27.5

let bilanganNegatif = -9
    console.log(bilanganNegatif)    //output -9

let bilanganInfinity = Infinity
    console.log(bilanganInfinity)   //output Infinity (+)

let infinityNegatif = -Infinity
    console.log (infinityNegatif)   //output -Infinity (-)

let NotaNumber = NaN
    console.log (NotaNumber)        //output Nan    


/* ⁡⁣⁣⁢PROPERTI PADA NUMBER:⁡
    1. Number.MAX_VALUE
    2. Number.MIN_VALUE
    3. Number.POSITIVE_INFINITY
    4. Number.NEGATIVE_INFINITY
    5. Number.Nan
*/
//1. NUMBER.MAX_VALUE
console.log (Number.MAX_VALUE)              //output 1.7976931348623157e+308

//2. NUMBER.MIN_VALUE
console.log (Number.MIN_VALUE)              //output 5e-324

//3. NUMBER.POSITIVE_INFINITY
console.log (Number.POSITIVE_INFINITY)      //output Infinity (+)

//4. NUMBER.NEGATIVE_INFINITY
console.log (Number.NEGATIVE_INFINITY)      //output -Infinity (-)

//5. NUMBER.Nan
console.log ('abc'/5)                       //output Nan, karena abc bukan number

/*METHOD PADA NUMBER:
    1- .toString()          = mengubah number jadi string
    2- .toFixed(digit)      = mengatur jumlah angka di belakang koma. (digit) adalah banyaknya angka setelah koma
    3- .toPrecision(digit)  = mengatur total digit angka
    4- .parseInt(variabel)      = mengubah string jadi integer
    5- .parseFloat(variabel)    = mengubah string jadi desimal
*/

//⁡⁣⁣⁢1- .toString()        = mengubah number jadi string⁡
let num = 782.97  
let str = num.toString()
   console.log(str, typeof str)     //output 782.97 string

//⁡⁣⁣⁢2- .toFixed(digit)  = mengatur jumlah angka di belakang koma. (digit) adalah banyaknya angka setelah koma⁡
let jumlah = 23.149056
let fix = jumlah.toFixed (3)
    console.log (fix, typeof fix)   //output 23.149 string

//⁡⁣⁣⁢3- .toPrecision(digit)   = mengatur total digit angka dan menjadikannya string⁡
let angka = 49.23459
    console.log (angka.toPrecision(3))  //output 49.2

//⁡⁣⁣⁢4- .parseInt(variabel)      = mengubah string jadi integer⁡
let ubah = "190.57"
    console.log (parseInt(ubah))    //output 190

//⁡⁣⁣⁢5- .parseFloat(variabel)    = mengubah string jadi desimal⁡
let jauh = "95.67"
    console.log (parseFloat(jauh))  //output 95.67 (desimalnya dipertahankan)




