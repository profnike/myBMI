

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
function cancelWarning(){

    document.getElementById("input-warning").style.display="none"
}
function inputValue(){

    document.getElementById("input-warning").style.display="none"
}

function poundUnit (){
   let pound= document.getElementById("poundValue").value*0.453592
   let poundVal=parseFloat(pound.toFixed(2))
   document.getElementById("kgpoundValue").value= poundVal
   
}
function gramUnit (){
    let gram= document.getElementById("gramValue").value*0.001
    let gramVal=parseFloat(gram.toFixed(2))
    document.getElementById("kggramValue").value=gramVal
    
 }


