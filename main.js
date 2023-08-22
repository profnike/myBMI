
function weightValue() {
    let weight=document.getElementById("weight").value
    let height=document.getElementById("height").value
    let heightsquare=height*height
    let result=document.getElementById("bmi-result")
    let bmi=weight/heightsquare
    let value= parseFloat(bmi.toFixed(1))
    let comment=""

    if(value<18.5){comment="This is underweight"}
    else if(value==18.5 || value < 25.0){comment="This is a healthy weight"}
    else if(value==25.0 || value < 30.0){comment="This is overweight"}
    else {comment="This is obesity"}
    result.innerHTML="Your BMI is" + " "+ value +"<br/>" + "<b>" + comment + "</b>"
    
}



