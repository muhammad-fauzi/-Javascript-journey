/*
    <div id="container">
        <div id="boxcontainer">
            <div class="title">
                <h1>COLOR PICKER</h1>
            </div>
            <input type="color" id="choosencolor">
            <P>Color code: <span class="colorcode"> #fffff</span></P>
        </div>
        <div id="colordisplay">
            <!--di sini muncul warna-->
        </div>
    </div>
*/

const choosencolor = document.getElementById ('choosencolor')
const colordisplay = document.querySelector ('.colordisplay')


choosencolor.addEventListener ('input', 
    function (event){

        const colorcode = document.querySelector ('.colorcode')
        colorcode.textContent = event.target.value

        colordisplay.style.backgroundColor = event.target.value
        document.body.style.backgroundColor = event.target.value


    }
)