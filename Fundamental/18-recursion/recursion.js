//RECURSION
/*
Recursion itu mirip loop, bedanya recursion itu berlaku utk function.
Jadi, recursion adalah function yang memanggil dirinya sendiri terus menerus
sampai kondisi berhenti terpenuhi

Dalam recursion ada 2 bagian penting, yaitu
    1. Base case = kondisi berhenti
    2. Recursive case = bagian yang jalan terus

Recursion ibarat turun tangga, base case ialah titik henti
dan Recursive case ialah langkah untuk terus turun
*/

//RECURSION FAKTORIAL
/*
Faktorial adalah perkalian berurutan dari sebuah angka sampai 1
Penulisan faktorial ialah 
5! (faktorial lima) = 5*4*3*2*1
3! (faktorial tiga) = 3*2*1
*/
//CONTOH
function factorial (n){
    if (n === 1){               //Base case dari if ( n===1 ) s/d return 1, artinya saat angka sudah 1, hentikan recursion
        return 1
    }
    console.log (n)             //output 5,4,3,2. ini tidak di loop sampai angka 1 karena di base casenya hanya sampe ===1
    return n * factorial (n-1)  //Ini Recursion Case, function memanggil dirinya sendir dengan angka yg lebih kecil
}
console.log (factorial (5)) 
//output 120 karena 5x4x3x2x1 = 120
