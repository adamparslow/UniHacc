//Assuming html file has input boxes called input1 and input2 and a button
/*
var input = document.getElementById("myInput");

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 9) {
        document.getElementById("myInput2").click();
    }
});
*/
function plusButton () {
    console.log("abc")
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.display = "block";
}

function okButton (){
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.display = "none";
}
