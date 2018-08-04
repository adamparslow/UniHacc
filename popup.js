
document.addEventListener('DOMContentLoaded', function() {
    var plus = document.getElementById('plus');
    var sub = document.getElementById('submit');
    plus.addEventListener("click", function() {
        openPlusMenu();
    });

    sub.addEventListener("Submit", function() {
        closeSubmit();
    });
});




function okButton (){
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.display = "none";
}

function openPlusMenu () {
    console.log("benlo");
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.visibility = "visible";
}

function closeSubmit(){
    var submit = document.getElementById("Submit");
    submit.style.visibility = "hidden";
}

/*
sub.addEventListener("Submit", function() {
        closeSubmit();
    });

*/