var display = document.getElementById("displays") ; 
var buttons = document.getElementsByClassName("button") ;
var arr = Array.from(buttons) ; 

arr.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CE':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'C':
                if (display.innerText){
                display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case 'X²' :
                display.innerText =  display.innerText**2
                break;
            case '√x' :
                display.innerText = Math.sqrt(display.innerText) ;
                break;
                
            default:
                display.innerText = display.innerText + e.target.innerText;
        }
    });
});