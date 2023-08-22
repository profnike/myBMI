
function weightValue() {
    let weight=document.getElementById("weight").value
    let height=document.getElementById("height").value
    let heightsquare=height*height
    let val=document.getElementById("val")
    let bmi=weight/heightsquare
    console.log(bmi)
    val.innerHTML="weight" + weight
    // d = document.getElementById("select_id").value;
    // alert(d);
}
//weight.addEventListener('change', function() { console.log('You selected: ', weight.value);});
//console.log(weight)


