// Set up event listeners
document.addEventListener("DOMContentLoaded", function() {
    loadGroups();

    var plus = document.getElementById("plus");
    var sub = document.getElementById("submit");
    var addRow = document.getElementById("addRow");

    plus.addEventListener("click", function() {
        openPlusMenu();
    });

    sub.addEventListener("click", function() {
        closeSubmit();
    });

    addRow.addEventListener("click", function() {
      addFields();
   });
});

function okButton (){
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.display = "none";
}

function openPlusMenu () {
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.visibility = "visible";
}
