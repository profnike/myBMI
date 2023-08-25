// BMI CALCULATION START
function weightValue() {
    let weight=document.getElementById("weight").value
let height=document.getElementById("height").value
let heightsquare=height*height
let result=document.getElementById("bmi-result")
let calculate=document.getElementById("calculate-bmi")
let reset=document.getElementById("reset-bmi")
let bmi=weight/heightsquare
let value= parseFloat(bmi.toFixed(1))
let comment=""
   
    if(weight=="" || height==""){
        console.log("empty value")
        document.getElementById("input-warning").style.display="flex"
    }
    else if(value<18.5){

        result.innerHTML="Your BMI is" + " "+ value +"<br/>" + "<b>" + "This is underweight"
        reset.style.display="inline"
        calculate.style.display="none"
    }
    else if(value==18.5 || value < 25.0){
    result.innerHTML="Your BMI is" + " "+ value +"<br/>" + "<b>" + "This is a healthy weight"
    reset.style.display="inline"
    calculate.style.display="none"
}
    else if(value==25.0 || value < 30.0){
        result.innerHTML="Your BMI is" + " "+ value +"<br/>" + "<b>" + "This is overweight"
        reset.style.display="inline"
        calculate.style.display="none"
    }
    else {
        result.innerHTML="Your BMI is" + " "+ value +"<br/>" + "<b>" + "This is obesity"
        reset.style.display="inline"
    calculate.style.display="none"
    }
    
    
}

function resetValue(){
    let result=document.getElementById("bmi-result")
    let calculate=document.getElementById("calculate-bmi")
    let reset=document.getElementById("reset-bmi")
    console.log('reset')
    result.innerHTML="<img src='./images/question.jpg'/>"
    reset.style.display="none"
    calculate.style.display="inline"
    document.getElementById("weight").value=""
    document.getElementById("height").value=""
}
//cancel  input incomplete notification
function cancelWarning(){

    document.getElementById("input-warning").style.display="none"
}
//  input incomplete notification
function inputValue(){

    document.getElementById("input-warning").style.display="none"
}

//  To convert pound to kilogram
function poundUnit (){
    let poundInput=document.getElementById("poundValue").value
   let pound= poundInput*0.453592
  
   let poundVal=parseFloat(pound.toFixed(2))
   if(poundInput.length!==0){document.getElementById("kgpoundValue").value= poundVal}
   else{document.getElementById("kgpoundValue").value= ""}
   
}
//  To convert gram to kilogram
function gramUnit (){
    let gramInput=document.getElementById("gramValue").value
    let gram= document.getElementById("gramValue").value*0.001
    let gramVal=parseFloat(gram.toFixed(2))
   
    if(gramInput.length!==0){document.getElementById("kggramValue").value= gramVal}
   else{document.getElementById("kggramValue").value= ""}
    
 }
 //  To convert feet to meter
 function feetUnit (){
    let feetInput=document.getElementById("feetValue").value
    let feet= feetInput*0.3048
    let feetVal=parseFloat(feet.toFixed(2))
   
    if(poundInput.length!==0){document.getElementById("meterfeetValue").value= feetVal}
   else{document.getElementById("meterfeetValue").value= ""}
    
 }
//  To convert inches to meter
 function inchesUnit (){
    let inchesInput= document.getElementById("feetValue").value
    let inches= inchesInput*0.0254
    let inchesVal=parseFloat(inches.toFixed(2))
   
    if(inchesInput.length!==0){document.getElementById("meterinchesValue").value= inchesVal}
   else{document.getElementById("meterinchesValue").value= ""}
    
 }
//  BMI CALCULATION ENDS


