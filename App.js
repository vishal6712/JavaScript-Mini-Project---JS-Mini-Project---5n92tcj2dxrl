window.onload = writeMessage;
function writeMessage() {
let input =document.getElementById("input-box");
input.style.cssText="border:none;bax-shadow:none;outline:none;"


let menuIcon=document.getElementById("menu-icon");
var menuBar=document.getElementById("menu-bar");
menuIcon.addEventListener("click",function()
{
    menuBar.style.cssText="display:flex;overflow: hidden;transition: linear 0.5s;";
    menuIcon.addEventListener("click",function()
    {
        menuBar.style.cssText="display:none;overflow: hidden;transition: linear 0.5s;";
    });
});


// search()
// {
//     const inputText=document.getElementById("input-box").value.toUpperCase();
// }
}