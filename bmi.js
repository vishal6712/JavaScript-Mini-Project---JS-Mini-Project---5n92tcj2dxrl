window.onload = writeMessage;
function writeMessage() {

let btn=document.getElementById("calculate");
btn.addEventListener("click",function()
{
    let h=document.getElementById("height").value;
    let w=document.getElementById("weight").value;

    if(h=="" || w=="")
    {
        alert("Plaese fill data of Height and Weight");
    }

    h=h/100;
    let BMI=(w/(h*h));
    BMI=BMI.toFixed(2);

    document.getElementById("result").innerHTML=BMI;

    let ans=""

    if(BMI<18.5)
    {
        ans="Underweight";
    }
    if(BMI>=18.5 && BMI<25)
    {
        ans="Healthy";
    }
    if(BMI>=25 && BMI<30)
    {
        ans="Overweight";
    }
    if(BMI>=30)
    {
        ans="Obese";
    }
    document.getElementById("comment").innerHTML=ans;
});


}