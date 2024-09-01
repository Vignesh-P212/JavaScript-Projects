const display=document.getElementById('display');
function append(input){
    display.value += input;
}
function cleardis(){
    display.value="";
}
function calc(){
    try {
        display.value=eval(display.value);
    } catch (error) {
        display.value="Syntax Error"    ;
    }
   
}
