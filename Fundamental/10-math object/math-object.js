//MATH OBJECT
/*
Math object adalah object bawaan yag berisi properti dan method untuk
melakukan operasi matematika
*/

//PROPERTI MATH
/*
    1. Math.PI      = Mengembalikan nilai π (3.141592653589793)
    2. Math.E       = Mengembalikan nilai konstanta Euler (2.718281828459045)

*/
//1. MATH.PI        = Mengembalikan nilai π (3.141592653589793)
console.log (Math.PI)   //output 3.14....

//2. MATH.E         = Mengembalikan nilai konstanta Euler (2.718281828459045)
console.log (Math.E)    //output 2.718...

//METHOD MATH
/*
    1-  Math.abs(angka)             = mengubah angka negatif menjadi positif
    2-  Math.pow (angka,pangkat)    = melakukan pangkat
    3-  Math.sqrt (angka)           = mencari akar (dua kali)
    4-  Math.cbrt (angka)           = mencari akar (tiga kali)
    5-  Math.max (angka,angka,dll)  = mencari angka tertinggi dari kumpulan angka
    6-  Math.min (angka,angka,dll)  = mencari angka terkecil dari kumpulan angka
    7-  Math.round (angka)          = membulatkan angka ke bilangan terdekat
    8-  Math.ceil (angka)           = membulatkan angka ke atas
    9-  Math.floor(angka)           = membulatkan angka ke bawah
    10- Math.trunc(angka)           = menghilangkan angka desimal
    11- Math.random()               = memunculkan angka random dari 0-1  
*/
//1. Math.abs(angka)             = mengubah angka negatif menjadi positif
console.log (Math.abs(-5))      //output 5

//2. Math.pow (angka,pangkat)    = melakukan pangkat
console.log (Math.pow(3,2))     //output 9 karena 3 x 3

//3. Math.sqrt (angka)           = mencari akar (dua kali)
console.log (Math.sqrt(16))     //output 4

//4. Math.cbrt (angka)           = mencari akar (tiga kali)
console.log (Math.cbrt(27))     //output 3

//5. Math.max (angka,angka,dll)  = mencari angka tertinggi dari kumpulan angka
console.log (Math.max(5, 10, 15))   //output 15

//6. Math.min (angka,angka,dll)  = mencari angka terkecil dari kumpulan angka
console.log (Math.min(5,10.15))     //output 5

//7.  Math.round (angka)        = membulatkan angka ke bilangan terdekat
console.log (Math.round(3.8))   //output 4
console.log (Math.round(3.5))   //output 4
console.log(Math.round(3.2))    //output 3

//8.  Math.ceil (angka)         = membulatkan angka ke atas
console.log (Math.ceil(3.1))    //output 4

//9.  Math.floor(angka)         = membulatkan angka ke bawah
console.log(Math.floor (3.9))   //output 3

//10. Math.trunc(angka)         = menghilangkan angka desimal 
console.log(Math.trunc(3.5))    //output 3 

//11- Math.random()             = memunculkan angka random dari 0-1  
console.log (Math.random())     //output berubah-ubah
    
    //Math.random() saat digunakan untuk game, biasanya dikali 100 (*100)
    //Setelah dikali 100, pakai Math.trunc untuk menghilangkan desimalnya
    //Selain Math.trunc, biasanya pakai Math.round juga
//CONTOH
    console.log (Math.trunc(Math.random()*100)) //outputnya berubah-ubah tiap kali direfres
    

