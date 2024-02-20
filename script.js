let outputScreen = document.getElementById('output-screen');

function display(num){
    outputScreen.value += num;
}

function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalido")
    }
}
function Clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}

function toggleSign() {
    var output = document.getElementById('output-screen');
    var currentValue = output.value;

    if (currentValue !== '' && currentValue !== '0') {
        var lastChar = currentValue.charAt(currentValue.length - 1);
        if (lastChar === '-') {
            output.value = currentValue.substring(0, currentValue.length - 1);
        } else {
            output.value += '-';
        }
    }
}



