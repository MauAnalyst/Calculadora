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


//-------- Function when clicked on the number button
function clickNumber(buttonNumber){
    let currentText = screendg.innerHTML;
    let expressao = screenStores.innerHTML;
    checkResulte.innerHTML = "";

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

        if(resultado == compscreen && currentText[0] != "+"){ //se o que está no screen botton(screendg) for um resultado de uma oparação, será eliminado ao clicar em number. 
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
} //-- end function number button

//click numbers buttons

buttonZero.onclick = function(){ //0
    screendg.style.opacity = '100%';
    checkResulte.innerHTML = "";
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
    checkResulte.innerHTML = "";

    if (screendg.innerHTML.includes(".")) {
        console.log("Ponto decimal já foi adicionado");
        return; // Sai da function se o ponto decimal ja estiver
    }
    else if (screendg.innerHTML === '0') { // Se não houver ponto, é add
        screendg.innerHTML = "0" + buttonPoint.innerHTML;
    } else {
        screendg.innerHTML += buttonPoint.innerHTML;
    }

};
//---------- end numbers buttons

//----------- Calculate
let buttonMore = document.getElementById("button-more");
let buttonLess = document.getElementById("button-less");
let buttonMultiply = document.getElementById("button-multiply");
let buttonDivision = document.getElementById("button-division");
let buttonPorcent = document.getElementById("button-porcent");

//Function when clicked on the math operation button
function clickButtonOp(ButtonOP){
    screendg.style.opacity = '100%';
    checkResulte.innerHTML = "";

    let checkScreenTop = screenStores.innerHTML;
    let checkScreenBotton = screendg.innerHTML;

    if(checkScreenTop == 'warehouse'){
        screenStores.innerHTML = screendg.innerHTML;
        screendg.innerHTML = ButtonOP.innerHTML;

    } else if(checkScreenTop[checkScreenTop.length - 1] == '%'){
        screenStores.innerHTML = screendg.innerHTML;
        screendg.innerHTML = ButtonOP.innerHTML;
    }
    else if(screendg.innerHTML == '-' || screendg.innerHTML == '*' || screendg.innerHTML == '+'|| screendg.innerHTML == '/'){
        screendg.innerHTML = ButtonOP.innerHTML;

    } else if(checkScreenBotton[0] == '*' || checkScreenBotton[0] == '/'){
        screenStores.innerHTML+= screendg.innerHTML;
        screendg.innerHTML = ButtonOP.innerHTML;

    } else if(eval(screenStores.innerHTML) == eval(screendg.innerHTML)){

        let checkScreenTop = screenStores.innerHTML;
        let checkScreenBotton = screendg.innerHTML;

        if (checkScreenBotton[0] == '+' || checkScreenBotton[0] == '-' || checkScreenBotton[0] == '*'){
            screenStores.innerHTML += screendg.innerHTML;
            screendg.innerHTML = ButtonOP.innerHTML;

        }else{
            screenStores.innerHTML = screendg.innerHTML;
            screendg.innerHTML = ButtonOP.innerHTML;
        }
    }
    else {
        //let noAdd = screenStores.innerHTML;
        //let noAdd2 = screendg.innerHTML;
        //if(screendg.innerHTML != '0' && noAdd2.length > 1){
            screenStores.innerHTML += screendg.innerHTML;
            screendg.innerHTML = ButtonOP.innerHTML;
        //} else{
        //}
    }
};// end function math operation

//buttons math
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

        if(screendg.innerHTML.includes("*") ){ //multiply
            let firstPorcent = checkScreenBotton.slice(1)/100;
            checkScreenTop = eval(checkScreenTop);

            screenStores.innerHTML = checkScreenTop + "*" + firstPorcent+"";
            screendg.innerHTML = checkScreenTop * firstPorcent;

            return;
        } else if(screendg.innerHTML.includes("/")){ //divid
            let firstPorcent = checkScreenBotton.slice(1)/100;
            checkScreenTop = eval(checkScreenTop);

            screenStores.innerHTML = checkScreenTop + "/" + firstPorcent+"";
            screendg.innerHTML = checkScreenTop / firstPorcent;

            return;
        } else if(screendg.innerHTML.includes("+")){ //sum
            let firstPorcent = checkScreenBotton.slice(1)/100;
            checkScreenTop = eval(checkScreenTop);

            screenStores.innerHTML = checkScreenTop + "+" + firstPorcent+"";
            screendg.innerHTML = checkScreenTop + firstPorcent;
            return;

        } else if(screendg.innerHTML.includes("-")){
            let firstPorcent = checkScreenBotton.slice(1)/100;
            checkScreenTop = eval(checkScreenTop);

            screenStores.innerHTML = checkScreenTop + "-" + firstPorcent+"";
            screendg.innerHTML = checkScreenTop - firstPorcent;
            return;

        }
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
        }else{
            let expressao = screendg.innerHTML;
            let resultado = calcular(expressao);
            let resultePorcent = resultado/100;

            screenStores.innerHTML = "("+screendg.innerHTML+")%";
            screendg.innerHTML = resultePorcent;
        }
        //else if(eval(screenStores.innerHTML) == eval(screenStores.innerHTML)){}
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
let checkResulte = document.getElementById("check-resulte"); 

resulte.onclick = function(){
    let checkScreenBotton = screendg.innerHTML;
    let currentText = screendg.innerHTML;
    let expressao = screenStores.innerHTML;
    //let resultado = eval(expressao);

    let partes = expressao.split(/[+\-*/]/);
    let numberAfter = parseFloat(partes[partes.length - 1]);

    let parteFinal = "";

    for (var i = expressao.length - 1; i >= 0; i--) {
        if (expressao[i] === "+" || expressao[i] === "-" || expressao[i] === "*" || expressao[i] === "/") {
            parteFinal = expressao.substring(i);
            break;
        }
    }

    if (screenStores.innerHTML == 'warehouse' && screendg.innerHTML == '0'){
        screenStores.innerHTML = 'warehouse';
        screendg.innerHTML = '0';
        screendg.style.opacity = '50%';
    } 
    else if (screendg.innerHTML != '0' && screenStores.innerHTML == 'warehouse') {
        //screenStores.innerHTML = screendg.innerHTML;
        return; //nada acontece;
    }
    else {
        screenStores.innerHTML += screendg.innerHTML;
        let expressao = screenStores.innerHTML;

        let ResulteEqual = checkResulte.innerHTML;

        if(expressao.includes("/0")){ //operação por /0 não permitida
            screenStores.innerHTML = 'warehouse';
            screendg.style.opacity = '50%';
            screendg.innerHTML = '0';
        }
        else if(ResulteEqual != "="){ //gambiarra para verficar se foi já foi apertado o =
            if(expressao[expressao.length-1] == '+' || expressao[expressao.length-1] == '-'){ //se o último digito for um operador, o mesmo é retirado para o sucesso do cálculo.
                screenStores.innerHTML = expressao.slice(0,-1); 
                let newExpressao = screenStores.innerHTML;
                screendg.innerHTML = resultado % 1 === 0 ? resultado :resultado.toFixed(2);
                let resultado = calcular(newExpressao);
                checkResulte.innerHTML = "=";
            } else{
                let resultado = calcular(expressao);
                checkResulte.innerHTML = "=";
                screendg.innerHTML = resultado % 1 === 0 ? resultado :resultado.toFixed(2); 
            }
        } else{

            if(parteFinal.includes("+")){
                screenStores.innerHTML = screendg.innerHTML +"+"+ numberAfter;
                let expressao = screenStores.innerHTML;
                screendg.innerHTML = calcular(expressao);

                console.log(numberAfter);
            } else if(parteFinal.includes("-")){
                screenStores.innerHTML = screendg.innerHTML +"-"+ numberAfter; 
                let expressao = screenStores.innerHTML;
                screendg.innerHTML = calcular(expressao);
            } else if(parteFinal.includes("*")){
                screenStores.innerHTML = screendg.innerHTML +"*"+ numberAfter; 
                let expressao = screenStores.innerHTML;
                screendg.innerHTML = calcular(expressao);
            } else if(parteFinal.includes("/")){
                screenStores.innerHTML = screendg.innerHTML +"/"+ numberAfter; 
                let expressao = screenStores.innerHTML;
                screendg.innerHTML = calcular(expressao);
            } else{
                return;
            }
        }
    } 
}; // ---- end resulte (=)  

//--------------------- delete
let deleteALL = document.getElementById("delete-all");
let deleteP = document.getElementById("delete-p");

deleteALL.onclick = function(){ //deletando tudo
    screenStores.innerHTML = 'warehouse';
    screendg.innerHTML = '0';
    screendg.style.opacity = '50%';
    checkResulte.innerHTML = "";
};
deleteP.onclick = function(){ //deletado por dígito (caso não seja uma resposta)
    checkResulte.innerHTML = "";
    //esse if valida se foi digitado apenas no botton screen (screendg.innerHTML) algo para deletar
    if (screenStores.innerHTML == 'warehouse'){
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
        
        if(compscreen == resultado && currentText[0] != '+'){
            if(currentText[0] == '-' && expressao[0] == '0'){
                let expressao = screenStores.innerHTML;
                let currentText = screendg.innerHTML;
                let expression = expressao.slice(1);
                let resultado = eval(currentText);
                let compscreen = calcular(expression);

                if(expression ==  currentText){
                    screendg.innerHTML = currentText.slice(0, -1);
                }else{
                    screenStores.innerHTML = 'warehouse';
                    screendg.style.opacity = '50%';
                    screendg.innerHTML = '0'; 
                }
            }else{
                screenStores.innerHTML = 'warehouse';
                screendg.style.opacity = '50%';
                screendg.innerHTML = '0'; 
            }
        }else if(currentText.length > 1){ //vai deletando até chegar em 1 dígito
            screendg.innerHTML = currentText.slice(0, -1);

        }else if (currentText.length == 1){ //quando chega em 1, é deletado caso este último digito não seja um operador math       
                if (currentText == '1' || currentText == '2' || currentText == '3' || currentText == '4' || currentText == '5' || currentText == '6' || currentText == '7' || currentText == '8' || currentText == '9'){
                    screendg.innerHTML = currentText.slice(0, -1); 
                    screendg.innerHTML = '0';
                    screendg.style.opacity = '50%'; 
                }
        }else {
            screendg.innerHTML = '0';
            screendg.style.opacity = '50%'; 
        }
    }
}; 
