
function plusButton () {
    var input = document.getElementById("plus");
    input.addEventListener("click", function(event) {
        openPlusMenu();
    });
}

function okButton (){
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.display = "none";
}

function openPlusMenu () {
    console.log("benlo");
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.display = "block";
}