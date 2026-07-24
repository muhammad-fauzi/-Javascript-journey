const navbar = document.getElementById ('navbar')
const navbarbtn = document.getElementById ('navbarbtn')

navbarbtn.addEventListener('click',
    function (){
        navbar.classList.toggle ('open')
        
        if (navbar.classList.contains ('open')){
            navbarbtn.textContent = 'X'
        }
        else {
            navbarbtn.textContent = '☰'
        }
    }
    
 )