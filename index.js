//screen
var screendg = document.getElementById("screen-digit");
var screenStores = document.getElementById("stores-values");

//----- buttons numbers
let buttonZero = document.getElementById("button-0");
let buttonOne = document.getElementById("button-1");
let buttonTwo = document.getElementById("button-2");
let buttonThree = document.getElementById("button-3");
let buttonFour = document.getElementById("button-4");
let buttonFive = document.getElementById("button-5");
let buttonSix = document.getElementById("button-6");
let buttonSeven = document.getElementById("button-7");
let buttonEigth = document.getElementById("button-8");
let buttonNine = document.getElementById("button-9");
let buttonPoint = document.getElementById("button-point");


//Function when clicked on the number button
function clickNumber(buttonNumber){
    let currentText = screendg.innerHTML;
    let expressao = screenStores.innerHTML;

    if (screenStores.innerHTML == 'warehouse'){
        if (screendg.innerHTML == '0'){
            screendg.style.opacity = '100%';
            screendg.innerHTML = buttonNumber.innerHTML;
        } else {
            screendg.innerHTML += buttonNumber.innerHTML;
        }
    } else {
        let resultado = eval(expressao);
        let compscreen = calcular(currentText);

        if(resultado == compscreen){
            let checkScreem = currentText+expressao;
            if(checkScreem[0] != '+' || checkScreem[0] != '-' || checkScreem[0] != '*' ){
                screenStores.innerHTML = 'warehouse';
                screendg.innerHTML = buttonNumber.innerHTML;
            }else{
                screendg.innerHTML += buttonNumber.innerHTML;
            }
        }else {
            screendg.innerHTML += buttonNumber.innerHTML;
        }
    }
}

//----------


buttonZero.onclick = function(){ //0
    screendg.style.opacity = '100%';
    if (screendg.innerHTML == '0' && screendg.innerHTML != '+'){
        screendg.innerHTML = buttonZero.innerHTML;
        
    } else {
        screendg.innerHTML += buttonZero.innerHTML;
    }
};

buttonOne.onclick = function() { //1
    let buttonNumber = buttonOne;
    return clickNumber(buttonNumber);
};

buttonTwo.onclick = function() { //2
    let buttonNumber = buttonTwo;
    return clickNumber(buttonNumber);
};

buttonThree.onclick = function() { //3
    let buttonNumber = buttonThree;
    return clickNumber(buttonNumber);
};

buttonFour.onclick = function() { //4
    let buttonNumber = buttonFour;
    return clickNumber(buttonNumber);
};

buttonFive.onclick = function() { //5
    let buttonNumber = buttonFive;
    return clickNumber(buttonNumber);
};

buttonSix.onclick = function() { //6
    let buttonNumber = buttonSix;
    return clickNumber(buttonNumber);
};

buttonSeven.onclick = function() { //7
    let buttonNumber = buttonSeven;
    return clickNumber(buttonNumber);
};

buttonEigth.onclick = function() { //8
    let buttonNumber = buttonEigth;
    return clickNumber(buttonNumber);
};

buttonNine.onclick = function() { //9
    let buttonNumber = buttonNine;
    return clickNumber(buttonNumber);
};

buttonPoint.onclick = function(){ // point
    screendg.style.opacity = '100%';

    if (screendg.innerHTML == '0'){
        screendg.innerHTML = "0"+buttonPoint.innerHTML;
    } else {
        screendg.innerHTML += buttonPoint.innerHTML;
    }
};

//----------- Calculate
let buttonMore = document.getElementById("button-more");
let buttonLess = document.getElementById("button-less");
let buttonMultiply = document.getElementById("button-multiply");
let buttonDivision = document.getElementById("button-division");
let buttonPorcent = document.getElementById("button-porcent");

//Function when clicked on the math operation button
function clickButtonOp(ButtonOP){
    screendg.style.opacity = '100%';

    let checkScreenTop = screenStores.innerHTML;
    let checkScreenBotton = screendg.innerHTML;

    if(screenStores.innerHTML == 'warehouse'){
        screenStores.innerHTML = screendg.innerHTML;
        screendg.innerHTML = ButtonOP.innerHTML;
    }
    else if(screendg.innerHTML == '-' || screendg.innerHTML == '*' || screendg.innerHTML == '+'|| screendg.innerHTML == '/'){
        screendg.innerHTML = ButtonOP.innerHTML;
    }
    else if (checkScreenBotton[0] == '*' || checkScreenBotton[0] == '/'){
        screenStores.innerHTML+= screendg.innerHTML;
        screendg.innerHTML = ButtonOP.innerHTML;
    }
    else if (eval(screenStores.innerHTML) == eval(screendg.innerHTML)){
        console.log("click "+ButtonOP.innerHTML+": top screen == botton screen");

        let checkScreenTop = screenStores.innerHTML;
        let checkScreenBotton = screendg.innerHTML;

        if (checkScreenBotton[0] == '+' || checkScreenBotton[0] == '-' || checkScreenBotton[0] == '*'){
            screenStores.innerHTML += screendg.innerHTML;
            screendg.innerHTML = ButtonOP.innerHTML;
            console.log("click "+ButtonOP.innerHTML+": if length screen botoon != screen top");
        }else{
            screenStores.innerHTML = screendg.innerHTML;
            screendg.innerHTML = ButtonOP.innerHTML;
        }
    }
    else {
        let noAdd = screenStores.innerHTML;
        let noAdd2 = screendg.innerHTML;

        if(screendg.innerHTML != '0' && /*noAdd[noAdd.length - 1]  != '+'*/ noAdd2.length > 1){
            screenStores.innerHTML += screendg.innerHTML;
            screendg.innerHTML = ButtonOP.innerHTML;
        }
        console.log("click +: last else");
    }
};
// end function math operation

//Calc more (+)
buttonMore.onclick = function(){
    let ButtonOP = buttonMore;
    return clickButtonOp(ButtonOP);
};

//calc less (-)
buttonLess.onclick = function(){
    let ButtonOP = buttonLess;
    return clickButtonOp(ButtonOP);
};

//button multiply (*)
buttonMultiply.onclick = function(){
    let ButtonOP = buttonMultiply;
    return clickButtonOp(ButtonOP);
};

//button division (/)
buttonDivision.onclick = function(){
    let ButtonOP = buttonDivision;
    return clickButtonOp(ButtonOP);
}

//button porcent(%)
buttonPorcent.onclick = function(){
    let checkScreenTop = screenStores.innerHTML;
    let checkScreenBotton = screendg.innerHTML;

    if (screenStores.innerHTML == 'warehouse'){
        let resultePorcent = checkScreenBotton/100;

        screenStores.innerHTML = screendg.innerHTML+"%";
        screendg.innerHTML = resultePorcent;
    } else{
        if (screenStores.innerHTML != 'warehouse' && checkScreenBotton.length < 1){
            let resultePorcent = checkScreenTop/100;
            
            screenStores.innerHTML = screenStores.innerHTML+"%";
            screendg.innerHTML = resultePorcent;
        }
        else if(checkScreenBotton.length > 1){
            if(checkScreenBotton[0] == "+"  || checkScreenBotton[0] == "-" ){
                screenStores.innerHTML += screendg.innerHTML;

                let expressao = screenStores.innerHTML;
                let resultado = calcular(expressao);
                let resultePorcent = resultado/100;

                screenStores.innerHTML = "("+screenStores.innerHTML+")%";
                screendg.innerHTML = resultePorcent;
            }else{
                let expressao = screendg.innerHTML;
                let resultado = calcular(expressao);
                let resultePorcent = resultado/100;

                screenStores.innerHTML = "("+screendg.innerHTML+")%";
                screendg.innerHTML = resultePorcent;
            }
        }
        else if(eval(screenStores.innerHTML) == eval(screenStores.innerHTML)){}
    }
}

//------------------- resulte (=)
function calcular(expressao) {
    try {
        const resultado = eval(expressao);
        return resultado;
    } catch (error) {
        return "Error";
        console.log(error);
    }
};

let resulte = document.getElementById("button-resulte");

resulte.onclick = function(){
    console.log(screendg.innerHTML);
    if (screenStores.innerHTML == 'warehouse' && screendg.innerHTML == '0'){
        screenStores.innerHTML = 'warehouse';
        screendg.innerHTML = '0';
        screendg.style.opacity = '50%';
    } 
    else if (screendg.innerHTML != '0' && screenStores.innerHTML == 'warehouse') {
        screenStores.innerHTML = screendg.innerHTML;
    }
    else {
        screenStores.innerHTML += screendg.innerHTML;

        let expressao = screenStores.innerHTML;

        if (expressao[expressao.length-1] == '+' || expressao[expressao.length-1] == '-'){ //se o último digito for um operador, o mesmo é retirado
            screenStores.innerHTML = expressao.slice(0,-1); 
            let newExpressao = screenStores.innerHTML;
            let resultado = calcular(newExpressao);
            screendg.innerHTML = resultado;
        } else{
            let resultado = calcular(expressao);
            screendg.innerHTML = resultado;
        }
    } 
}

//--------------------- delete
let deleteALL = document.getElementById("delete-all");
let deleteP = document.getElementById("delete-p");

deleteALL.onclick = function(){ //deletando tudo
    screenStores.innerHTML = 'warehouse';
    screendg.innerHTML = '0';
    screendg.style.opacity = '50%';
};
deleteP.onclick = function(){ //deletado por dígito
    //esse if valida se foi digitado algo para deletar

    if (screenStores.innerHTML == 'warehouse'/* && screendg.innerHTML == '0'*/){
        let currentText = screendg.innerHTML;
        if(screendg.innerHTML != '0' && currentText.length > 1){
            screendg.innerHTML = currentText.slice(0, -1);
        }else{
        screendg.innerHTML = '0';
        screendg.style.opacity = '50%';
        }
    } 
    //caso tenha sido digitado, cai no else abaixo
    else {
        let currentText = screendg.innerHTML;
        let expressao = screenStores.innerHTML;
        let resultado = eval(expressao);
        let compscreen = calcular(currentText);
        
        if(compscreen == resultado){
            screenStores.innerHTML = 'warehouse';
            screendg.innerHTML = '0';
            screendg.style.opacity = '50%';
            console.log("(<-) entrou no if que deleta tudo");
        }
        else if(currentText.length > 1){ //vai deletando até chegar em 1 dígito
            screendg.innerHTML = currentText.slice(0, -1);
            console.log("entrou no else if que deleta um de cada vez");
        }
        else if (currentText.length == 1){ //quando chega em 1, é deletado caso este último digito não seja um operador math       
                if (currentText == '1' || currentText == '2' || currentText == '3' || currentText == '4' || currentText == '5' || currentText == '6' || currentText == '7' || currentText == '8' || currentText == '9'){
                    screendg.innerHTML = currentText.slice(0, -1); 
                    screendg.innerHTML = '0';
                    screendg.style.opacity = '50%'; 
                }

                
        }
        else {
            screendg.innerHTML = '0';
            screendg.style.opacity = '50%'; 
        }
    }
}; 