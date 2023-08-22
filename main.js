

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
   
    if(weight=="" || height==""){console.log("empty value")}
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
}



